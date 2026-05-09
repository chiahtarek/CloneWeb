import Conta from '#models/conta'
import { BaseRepository } from '#repositories/base_repository'
import db from '@adonisjs/lucid/services/db'
import { TransactionClientContract } from '@adonisjs/lucid/types/database'

export default class ContaRepository extends BaseRepository<Conta> {
  constructor() {
    super(Conta)
  }

  // Sobrescrevendo o create para gerar conta e agência aleatórios e saldo inicial 0
  async create(payload: Partial<Conta>): Promise<Conta> {
    const agencia = Math.floor(1000 + Math.random() * 9000) // 4 dígitos aleatórios
    const conta = Math.floor(100000 + Math.random() * 900000) // 6 dígitos aleatórios
    const saldo = 0

    const payloadWithDefaults = {
      ...payload,
      agencia: agencia.toString(),
      conta: conta.toString(),
      saldo,
    }

    return super.create(payloadWithDefaults)
  }
  async transfer(fromId: number, toId: number, amount: number, trx: TransactionClientContract): Promise<void> {
    if (amount <= 0) {
      throw new Error('Valor da transferência deve ser maior que zero')
    }

    if (fromId === toId) {
      throw new Error('Não é possível transferir para a mesma conta')
    }


    // Lock nas contas (evita concorrência)
    const fromAccount = await Conta
      .query({ client: trx })
      .where('id', fromId)
      .forUpdate()
      .first()

    const toAccount = await Conta
      .query({ client: trx })
      .where('id', toId)
      .forUpdate()
      .first()

    if (!fromAccount || !toAccount) {
      throw new Error('Conta de origem ou destino não encontrada')
    }

    if (fromAccount.saldo < amount) {
      throw new Error('Saldo insuficiente')
    }

    // Atualiza os saldos
    fromAccount.saldo = Number(fromAccount.saldo) - amount
    toAccount.saldo = Number(toAccount.saldo) + amount

    await fromAccount.useTransaction(trx).save()
    await toAccount.useTransaction(trx).save()

  }
  async getSaldoByUserId(userId: number): Promise<number> {
    const conta = await Conta
      .query()
      .where('user_id', userId)
      .first()

    if (!conta) {
      throw new Error('Conta não encontrada para este usuário')
    }

    return Number(conta.saldo)
  }


}
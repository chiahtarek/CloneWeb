import { inject } from '@adonisjs/core'
import { BaseCrudService } from './base_crud_service.ts'
import Conta from '#models/conta'
import ContaRepository from '#repositories/conta_repository'
import ExtratoRepository from '#repositories/extrato_repository'
import db from '@adonisjs/lucid/services/db'

@inject()
export class ContaService extends BaseCrudService<Conta, ContaRepository> {
  // Your code here
  constructor(repository: ContaRepository, private extratoRepository: ExtratoRepository) {
    super(repository)
  }
  async transfer(userId: number, numeroConta: String, amount: number): Promise<void> {
    await db.transaction(async (trx) => {
      const fromAccount = await Conta
        .query({ client: trx })
        .where('user_id', userId)
        .first()

      if (!fromAccount) {
        throw new Error('Conta do usuário não encontrada')
      }

      // conta destino pelo número
      const toAccount = await Conta
        .query({ client: trx })
        .where('conta', Number(numeroConta))
        .first()

      if (!toAccount) {
        throw new Error('Conta destino não encontrada')
      }

      await this.repository.transfer(
        fromAccount.id,
        toAccount.id,
        amount,
        trx
      )

      await this.extratoRepository.createExtrato(
        'pix',
        amount,
        trx
      )



    })
  }
  async getSaldo(userId: number): Promise<number> {
  return await this.repository.getSaldoByUserId(userId)
}

}

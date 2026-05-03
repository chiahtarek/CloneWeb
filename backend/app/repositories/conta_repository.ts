import Conta from '#models/conta'
import { BaseRepository } from '#repositories/base_repository'

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
}
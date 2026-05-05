import { inject } from '@adonisjs/core'
import { BaseCrudService } from './base_crud_service.ts'
import Conta from '#models/conta'
import ContaRepository from '#repositories/conta_repository'
import ExtratoRepository from '#repositories/extrato_repository'
import db from '@adonisjs/lucid/services/db'

@inject()
export class ContaService extends BaseCrudService<Conta, ContaRepository> {
  // Your code here
  constructor(repository: ContaRepository,  private extratoRepository: ExtratoRepository) {
    super(repository)
  }
  async transfer(fromId: number, toId: number, amount: number): Promise<void> {
    await db.transaction(async (trx) => {
    await this.repository.transfer(fromId, toId, amount)

    await this.extratoRepository.createExtrato('pix', amount, trx)
  })
  }

}

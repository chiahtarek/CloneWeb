import { inject } from '@adonisjs/core'
import { BaseCrudService } from './base_crud_service.ts'
import Conta from '#models/conta'
import ContaRepository from '#repositories/conta_repository'

@inject()
export class ContaService extends BaseCrudService<Conta, ContaRepository> {
  // Your code here
  constructor(repository: ContaRepository) {
    super(repository)
  }
}

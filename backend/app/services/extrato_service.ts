import { inject } from '@adonisjs/core'
import ExtratoRepository from '#repositories/extrato_repository'
import Extrato from '#models/extrato'
import { BaseCrudService } from './base_crud_service.ts'

@inject()
export class ExtratoService extends BaseCrudService<Extrato, ExtratoRepository> {
  constructor(repository: ExtratoRepository) {
    super(repository)
  }
}

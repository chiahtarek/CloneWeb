import { inject } from '@adonisjs/core'
import EnderecoRepository from '#repositories/endereco_repository'
import Endereco from '#models/endereco'
import { BaseCrudService } from './base_crud_service.ts'

@inject()
export class DisciplinaService extends BaseCrudService<Endereco, EnderecoRepository> {
  constructor(repository: EnderecoRepository) {
    super(repository)
  }
}

import { inject } from '@adonisjs/core'
import MatriculaRepository from '#repositories/matricula_repository'
import Matricula from '#models/matricula'
import { BaseCrudService } from './base_crud_service.ts'

@inject()
export class MatriculaService extends BaseCrudService<Matricula, MatriculaRepository> {
  constructor(protected repository: MatriculaRepository) {
    super(repository)
  }
}

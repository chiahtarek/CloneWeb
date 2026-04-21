import { inject } from '@adonisjs/core'
import DisciplinaRepository from '#repositories/disciplina_repository'
import Disciplina from '#models/disciplina'
import { BaseCrudService } from './base_crud_service.ts'

@inject()
export class DisciplinaService extends BaseCrudService<Disciplina, DisciplinaRepository> {
  constructor(repository: DisciplinaRepository) {
    super(repository)
  }
}

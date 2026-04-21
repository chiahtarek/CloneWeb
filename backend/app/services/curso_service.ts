import { inject } from '@adonisjs/core'
import CursoRepository from '#repositories/curso_repository'
import Curso from '#models/curso'
import { BaseCrudService } from './base_crud_service.ts'

@inject()
export class CursoService extends BaseCrudService<Curso, CursoRepository> {
  constructor(repository: CursoRepository) {
    super(repository)
  }
}

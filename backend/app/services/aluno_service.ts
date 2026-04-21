import { inject } from '@adonisjs/core'
import { BaseCrudService } from './base_crud_service.ts'
import Aluno from '#models/aluno'
import AlunoRepository from '#repositories/aluno_repository'

@inject()
export class AlunoService extends BaseCrudService<Aluno, AlunoRepository> {
  // Your code here
  constructor(repository: AlunoRepository) {
    super(repository)
  }
}

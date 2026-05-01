import { inject } from '@adonisjs/core'
import { CursoService } from '#services/curso_service'
import { criarCurso, alterarCurso } from '#validators/curso'
import { BasesController } from './bases_controller.ts'
import CursoPolicy from '#policies/curso_policy'

@inject() // Habilita injeção automática no Adonis 6
export default class UsersController extends BasesController<
  CursoService,
  CursoPolicy,
  { criar: typeof criarCurso, altera: typeof alterarCurso }
> {
  constructor(service: CursoService, policy: CursoPolicy) {
    super(service, policy, { criar: criarCurso, altera: alterarCurso })
  }
}

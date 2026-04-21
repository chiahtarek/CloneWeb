import { inject } from '@adonisjs/core'
import { criarMatricula } from '#validators/matricula'
import { BasesController } from './bases_controller.ts'
import { MatriculaService } from '#services/matricula_service'
import MatriculaPolicy from '#policies/matricula_policy'

@inject() // Habilita injeção automática no Adonis 6
export default class MatriculasController extends BasesController<
  MatriculaService,
  MatriculaPolicy,
  {criar: typeof criarMatricula, altera: typeof criarMatricula }
>{
  constructor(service: MatriculaService, policy: MatriculaPolicy) {
    super(service, policy, { criar: criarMatricula, alterar: criarMatricula })
  }
}

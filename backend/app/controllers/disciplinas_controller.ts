import { inject } from '@adonisjs/core'
import { criarDisciplina, alterarDisciplina } from '#validators/disciplina'
import { BasesController } from './bases_controller.ts'
import { DisciplinaService } from '#services/disciplina_service'
import DisciplinaPolicy from '#policies/disciplina_policy'

@inject() // Habilita injeção automática no Adonis 6
export default class DisciplinasController extends BasesController<
  DisciplinaService,
  DisciplinaPolicy,
  {criar: typeof criarDisciplina, altera: typeof alterarDisciplina }
> {
  constructor(service: DisciplinaService, policy: DisciplinaPolicy) {
    super(service, policy, { criar: criarDisciplina, altera: alterarDisciplina })
  }
}

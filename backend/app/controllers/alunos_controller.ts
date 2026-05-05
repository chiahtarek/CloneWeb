import { inject } from '@adonisjs/core'
import { criarAluno, alterarAluno } from '#validators/aluno'
import { BasesController } from './bases_controller.ts'
import { AlunoService } from '#services/aluno_service'
import AlunoPolicy from '#policies/aluno_policy'

@inject() // Habilita injeção automática no Adonis 6
export default class AlunosController extends BasesController<
  AlunoService,
  AlunoPolicy,
  {criar: typeof criarAluno, altera: typeof alterarAluno }
>{
  constructor(service: AlunoService, policy: AlunoPolicy) {
    super(service, policy, { criar: criarAluno, altera: alterarAluno })
  }
}

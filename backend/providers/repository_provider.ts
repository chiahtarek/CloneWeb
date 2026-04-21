import type { ApplicationService } from '@adonisjs/core/types'
import CursoRepository from '#repositories/curso_repository'
import AlunoRepository from '#repositories/aluno_repository'
import DisciplinaRepository from '#repositories/disciplina_repository'

export default class RepositoryProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  register() {
    // Registra como singleton para usar a mesma instância
    // Curso
    this.app.container.singleton('CursoRepository', () => {
      return new CursoRepository()
    })
    // Aluno
    this.app.container.singleton('AlunoRepository', () => {
      return new AlunoRepository()
    })
    // Disciplina
    this.app.container.singleton('DisciplinaRepository', () => {
      return new DisciplinaRepository()
    })
  }

  /**
   * The container bindings have booted
   */
  async boot() {}

  /**
   * The application has been booted
   */
  async start() {}

  /**
   * The process has been started
   */
  async ready() {}

  /**
   * Preparing to shutdown the app
   */
  async shutdown() {}
}

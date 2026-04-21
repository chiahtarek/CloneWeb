import Curso from '#models/curso'
import { BaseRepository } from '#repositories/base_repository'

export default class CursoRepository extends BaseRepository<Curso> {
  constructor() {
    super(Curso) // Passa o Model Lucid
  }

  // Você pode adicionar métodos específicos aqui, exemplo:
  /*async findByEixo(eixo: string): Promise<Curso | null> {
    return Curso.findBy('eixo', eixo)
  }*/
}

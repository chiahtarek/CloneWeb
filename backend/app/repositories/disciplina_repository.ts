import Disciplina from '#models/disciplina'
import { BaseRepository } from '#repositories/base_repository'

export default class DisciplinaRepository extends BaseRepository<Disciplina> {
  constructor() {
    super(Disciplina)
  }
}

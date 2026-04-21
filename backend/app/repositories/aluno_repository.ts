import Aluno from '#models/aluno'
import { BaseRepository } from '#repositories/base_repository'

export default class AlunoRepository extends BaseRepository<Aluno> {
  constructor() {
    super(Aluno)
  }
}

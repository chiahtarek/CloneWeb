import Matricula from '#models/matricula'
import { BaseRepository } from '#repositories/base_repository'

export default class MatriculaRepository extends BaseRepository<Matricula> {
  constructor() {
    super(Matricula)
  }
}

import Endereco from '#models/endereco'
import { BaseRepository } from '#repositories/base_repository'

export default class DisciplinaRepository extends BaseRepository<Endereco> {
  constructor() {
    super(Endereco)
  }
}

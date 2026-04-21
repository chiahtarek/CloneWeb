import { MatriculaSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Aluno from '#models/aluno'
import Disciplina from '#models/disciplina'

export default class Matricula extends MatriculaSchema {
  @belongsTo(() => Aluno)
  declare aluno: BelongsTo<typeof Aluno>

  @belongsTo(() => Disciplina)
  declare disciplina: BelongsTo<typeof Disciplina>
}

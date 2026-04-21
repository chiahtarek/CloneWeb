import { AlunoSchema } from '#database/schema'
import { belongsTo, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Curso from '#models/curso'
import Disciplina from '#models/disciplina'

export default class Aluno extends AlunoSchema {
  @belongsTo(() => Curso)
  declare curso: BelongsTo<typeof Curso>

  @manyToMany(() => Disciplina)
  declare disciplinas: ManyToMany<typeof Disciplina>
}

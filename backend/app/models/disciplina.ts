import { DisciplinaSchema } from '#database/schema'
import { belongsTo, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Curso from '#models/curso'
import Aluno from '#models/aluno'

export default class Disciplina extends DisciplinaSchema {
  @belongsTo(() => Curso)
  declare curso: BelongsTo<typeof Curso>

  @manyToMany(() => Aluno)
  declare alunos: ManyToMany<typeof Aluno>
}

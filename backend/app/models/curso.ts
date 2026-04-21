import { CursoSchema } from '#database/schema'
import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Aluno from '#models/aluno'
import Disciplina from '#models/disciplina'

export default class Curso extends CursoSchema {
  /* Passamos uma função para evitar dependência circular
     Model A importa B, e Model B importa A */
  @hasMany(() => Aluno)
  /* indica ao typescript que a propriedade não vai ser 
     inicializada agora com um valor comum (aluno = []) 
     e sim pelo Adonis quando houver uma consulta ao banco */
  declare alunos: HasMany<typeof Aluno>

  @hasMany(() => Disciplina)
  declare disciplinas: HasMany<typeof Disciplina>
}

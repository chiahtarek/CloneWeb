import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'matriculas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('aluno_id').unsigned().references('alunos.id')
      table.integer('disciplina_id').unsigned().references('disciplinas.id')
      table.unique(['aluno_id', 'disciplina_id'])
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

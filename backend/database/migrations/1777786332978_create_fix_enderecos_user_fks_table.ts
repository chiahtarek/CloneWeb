import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'enderecos'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      // só tenta remover se existir (evita crash)
      try {
        table.dropColumn('userid')
      } catch {}

      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')

      table.unique(['user_id']) // garante 1:1
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropForeign(['user_id'])
      table.dropColumn('user_id')

      table.integer('userid')
    })
  }
}
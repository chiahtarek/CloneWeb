import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'enderecos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('rua').nullable()
      table.integer('numero').nullable()
      table.string('cidade').nullable()
      table.string('estado').nullable()
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').nullable()
      table.integer('userid')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
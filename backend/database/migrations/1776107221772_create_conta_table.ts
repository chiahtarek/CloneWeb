import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'conta_corrente'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')                   // ID auto-increment
      table.integer('user_id').unsigned().notNullable() // FK para usuário
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')                  // se o usuário for deletado, deletar conta
        .onUpdate('CASCADE')
      table.string('conta').notNullable()     // número da conta
      table.string('agencia').notNullable()   // número da agência
      table.decimal('saldo', 12, 2).defaultTo(0) // saldo inicial com 2 casas decimais
      table.timestamp('created_at').defaultTo(this.now())
      table.timestamp('updated_at').defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
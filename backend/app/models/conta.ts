import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'

import User from './user.js'

export default class Conta extends BaseModel {
  public static table = 'conta_corrente'
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare conta: string

  @column()
  declare agencia: string

  @column()
  declare saldo: number

  // FK para o usuário
  @column({ columnName: 'user_id' })
  declare userId: number

  @belongsTo(() => User, {
    foreignKey: 'userId',
  })
  declare user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
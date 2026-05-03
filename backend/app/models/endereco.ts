import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'

import User from '#models/user'

export default class Endereco extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare rua: string | null

  @column()
  declare numero: number | null

  @column()
  declare cidade: string | null

  @column()
  declare estado: string | null

  // FK correta
  @column({ columnName: 'user_id' })
  declare userId: number

  // relacionamento obrigatório
  @belongsTo(() => User, {
    foreignKey: 'userId',
  })
  declare user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime | null

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
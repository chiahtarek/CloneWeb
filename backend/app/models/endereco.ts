import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
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

  // FK
  @column()
  declare userId: number

  // RELAÇÃO (endereço pertence a user)
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}
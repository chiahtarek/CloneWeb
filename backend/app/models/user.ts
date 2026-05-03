import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import  Endereco  from './endereco.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import { hasOne } from '@adonisjs/lucid/orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare email: string

  @column()
  declare fullName: string | null

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare roleId: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @hasOne(() => Endereco)
  declare endereco: HasOne<typeof Endereco>
}
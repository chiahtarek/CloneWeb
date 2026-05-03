import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Matricula extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare alunoId: number | null

  @column()
  declare disciplinaId: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime | null

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Aluno extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string | null

  @column()
  declare cursoId: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime | null

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
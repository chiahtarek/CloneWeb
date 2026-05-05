import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import Endereco from './endereco.js'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import Conta from './conta.js'
import { hasOne } from '@adonisjs/lucid/orm'
import hash from '@adonisjs/core/services/hash'
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid'
import { DbAccessTokensProvider } from '@adonisjs/auth/access_tokens'
import { scrypt } from 'node:crypto'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})



export default class User extends AuthFinder(BaseModel) {

  static accessTokens = DbAccessTokensProvider.forModel(User)

  
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

  @hasOne(() => Conta)
  declare conta: HasOne<typeof Conta>
  
}
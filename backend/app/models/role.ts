import { RoleSchema } from '#database/schema'
import { hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import User from '#models/user'

export default class Role extends RoleSchema {
  @hasMany(() => User)
  declare usuario: HasMany<typeof User>
}

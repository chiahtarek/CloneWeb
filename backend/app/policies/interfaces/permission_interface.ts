import type User from '#models/user'

export interface BaseCrudPremissionInterface {
  list(user: User | undefined): boolean
  view(user: User | undefined): boolean
  create(user: User | undefined): boolean
  edit(user: User | undefined): boolean
  delete(user: User | undefined): boolean
}

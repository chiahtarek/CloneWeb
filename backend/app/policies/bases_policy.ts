import type User from '#models/user'
import type { BaseCrudPremissionInterface } from '#policies/interfaces/permission_interface'

export abstract class BasePolicy implements BaseCrudPremissionInterface {
  protected permissions: []

  constructor(permissions: []) {
    this.permissions = permissions
  }

  list(user: User | undefined): boolean {
    if (!user) return false
    console.log(this.permissions[Number(user.roleId) - 1])
    return this.permissions[Number(user.roleId) - 1].list
  }

  view(user: User | undefined): boolean {
    if (!user) return false
    console.log(this.permissions[Number(user.roleId) - 1].view)
    return this.permissions[Number(user.roleId) - 1].view
  }

  create(user: User | undefined): boolean {
    if (!user) return false
    console.log(this.permissions[Number(user.roleId) - 1].create)
    return this.permissions[Number(user.roleId) - 1].create
  }

  edit(user: User | undefined): boolean {
    if (!user) return false
    console.log(this.permissions[Number(user.roleId) - 1].edit)
    return this.permissions[Number(user.roleId) - 1].edit
  }

  delete(user: User | undefined): boolean {
    if (!user) return false
    console.log(this.permissions[Number(user.roleId) - 1].delete)
    return this.permissions[Number(user.roleId) - 1].delete
  }
}

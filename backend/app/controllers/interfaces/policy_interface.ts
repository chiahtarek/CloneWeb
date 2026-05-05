export interface BasePolicy {
  list(user: any): boolean
  create(user: any): boolean
  view(user: any): boolean
  edit(user: any): boolean
  delete(user: any): boolean
}
export interface BaseCrudInterface {
  index({ response }: any): Promise<void>
  store({ request, response }: any): Promise<void>
  show({ params, response }: any): Promise<void>
  update({ params, request, response }: any): Promise<void>
  destroy({ params, response }: any): Promise<boolean>
}

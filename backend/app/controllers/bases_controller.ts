import type { HttpContext } from '@adonisjs/core/http'
import type { BaseCrudInterface } from '#controllers/interfaces/base_crud_interface'
import type { ControllerValidators } from '#controllers/interfaces/validator_inerface'
import type { BasePolicy } from '#controllers/interfaces/base_policy'

export abstract class BasesController<
  T,
  P extends BasePolicy,
  V extends ControllerValidators,
> implements BaseCrudInterface {
  // Recebemos o service e o schema do validator no construtor
  constructor(
    protected service: T,
    protected policy: P,
    protected validators: V
  ) {}

  async index({ response, auth }: HttpContext) {
    if (!this.policy.list(auth.user)) {
      return response.forbidden({ message: 'Você não tem permissão para listar esse recurso!' })
    }
    // const dados = await (this.service as any).indexWith(['alunos', 'disciplinas'])
    const data = await (this.service as any).index()
    return response.status(200).json({
      message: 'OK',
      data: data,
    })
  }

  async store({ request, response, auth }: HttpContext) {
    if (!this.policy.create(auth.user)) {
      return response.forbidden({ message: 'Você não tem permissão para criar esse recurso!' })
    }
    const payload = await request.validateUsing(this.validators.criar)
    const data = await (this.service as any).store(payload)
    if (!data) {
      return response.status(422).json({
        message: 'ERROR',
      })
    }
    return response.status(201).json({
      message: 'OK',
      data: data,
    })
  }

  async show({ params, response, auth }: HttpContext) {
    if (!this.policy.view(auth.user)) {
      return response.forbidden({ message: 'Você não tem permissão para visualizar esse recurso!' })
    }
    const data = await (this.service as any).show(Number(params.id))
    if (!data) {
      return response.status(404).json({
        message: 'ERROR',
      })
    }
    return response.status(200).json({
      message: 'OK',
      data: data,
    })
  }

  async update({ params, request, response, auth }: HttpContext) {
    if (!this.policy.edit(auth.user)) {
      return response.forbidden({ message: 'Você não tem permissão para modificar esse recurso!' })
    }
    const payload = await request.validateUsing(this.validators.altera)
    const data = await (this.service as any).update(Number(params.id), payload)
    if (!data) {
      return response.status(422).json({
        message: 'ERROR',
      })
    }
    return response.status(202).json({
      message: 'OK',
      data: data,
    })
  }

  async destroy({ params, response, auth }: HttpContext) {
    if (!this.policy.delete(auth.user)) {
      return response.forbidden({ message: 'Você não tem permissão para remover esse recurso!' })
    }

    const data = await (this.service as any).delete(Number(params.id))
    if (data) {
      return response.status(200).json({
        message: 'OK',
      })
    }
    return response.status(404).json({
      message: 'ERROR',
    })
  }
}


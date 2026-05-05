  import { inject } from '@adonisjs/core'
  import type { HttpContext } from '@adonisjs/core/http'
  import { registerValidator, loginValidator } from '#validators/auth'
  import { AuthService } from '#services/auth_service'

  @inject()
  export default class AuthController {
    protected service: AuthService

    constructor(service: AuthService) {
      this.service = service
    }

    /* Efetuar Registro do Usuário */
    async register({ request, response }: HttpContext) {
      const payload = await request.validateUsing(registerValidator)
      const resp = await this.service.register(payload)

      return response.created({
        message: 'Usuário registrado com sucesso',
        resp,
      })
    }

 
    async login({ request, response }: HttpContext) {
      const { email, password } = await request.validateUsing(loginValidator)
      const resp = await this.service.login({ email, password })

      response.ok({
        message: 'Login realizado com sucesso',
        resp,
      })
    }

    async logout(httpcontext: HttpContext) {
      const { response } = httpcontext

      if (await this.service.logout(httpcontext)) {
        return response.ok({
          message: 'Logout Realizado com Sucesso',
        })
      }

      return response.unauthorized({
        message: 'Token Inválido',
      })
    }

    /* Retorna Informações do Usuário Autenticado */
    async me(httpcontext: HttpContext) {
      const { response } = httpcontext
      const resp = await this.service.user(httpcontext)

      return response.ok(resp)
    }

    /* Listar Todos os Tokens do Usuário Autenticado */
    async tokens(httpcontext: HttpContext) {
      const { response } = httpcontext
      const resp = await this.service.tokens(httpcontext)

      console.log(resp)

      return response.ok(resp)
    }

    /* Criar um novo token para o usuário autenticado */
    async createToken(httpcontext: HttpContext) {
      const { response } = httpcontext
      const resp = await this.service.createToken(httpcontext)

      return response.ok({
        message: 'Token Criado com Sucesso',
        resp,
      })
    }
  }

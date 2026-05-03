import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import AuthRepository from '#repositories/auth_repository'
import ContaRepository from '#repositories/conta_repository'
import { inject } from '@adonisjs/core'
import Endereco from '#models/endereco'
import type {
  PayloadUser,
  LoginInput,
  UserOutput,
  LoginOutput,
  UserToken,
} from '#interfaces/auth_interface'

@inject()
export class AuthService {
  protected repository: AuthRepository
  protected contaRepository: ContaRepository 

  constructor(repository: AuthRepository, contaRepository: ContaRepository) {
    this.repository = repository
    this.contaRepository = contaRepository
  }

  async register(payload: PayloadUser): Promise<any> {

  const { endereco, ...userData } = payload

  const user = await User.create(userData)
  console.log('🔥 PAYLOAD COMPLETO:', JSON.stringify(payload, null, 2))
  console.log('🔥 ENDERECO:', payload.endereco)

  if (endereco) {
      await user.related('endereco').create(endereco)
  } 

    const conta = await this.contaRepository.create({
      userId: user.id, // vincula a conta ao usuário
    })

  return user

}
  async login(payload: LoginInput): Promise<LoginOutput> {
    return this.repository.authenticateUser(payload)
  }

  async logout(httpContext: HttpContext): Promise<boolean> {
    return this.repository.deauthenticateUser(httpContext)
  }
  async user(httpContext: HttpContext): Promise<UserOutput> {
    return this.repository.getUserAuthenticated(httpContext)
  }

  async tokens(httpContext: HttpContext): Promise<UserToken[]> {
    return this.repository.getListTokens(httpContext)
  }

  async createToken(httpContext: HttpContext): Promise<any> {
    return this.repository.createNewToken(httpContext)
  }
}

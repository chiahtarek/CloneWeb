import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import AuthRepository from '#repositories/auth_repository'
import { inject } from '@adonisjs/core'
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

  constructor(repository: AuthRepository) {
    this.repository = repository
  }

  async register(payload: PayloadUser): Promise<any> {
    return this.repository.createUser(payload)
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

import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
import type {
  PayloadUser,
  LoginInput,
  UserOutput,
  LoginOutput,
  UserToken,
} from '#interfaces/auth_interface'
import { permissions } from '#utils/permissions'

export default class AuthRepository {
  async createUser(payload: PayloadUser): Promise<any> {
    const { endereco, ...userData } = payload

    const user = await User.create(userData)

    if (endereco) {
      await user.related('endereco').create(endereco)
    }

    //return user
    // user: usuário logado;
    // *: coringa, token pode acessar todas as rotas protegidas;
    const token = await User.accessTokens.create(user, ['*'], {
      name: 'Registration Token',
      expiresIn: '30 days', // define a validade do Token;
    })

    return {
      message: 'Usuário registrado com sucesso',
      user,
      endereco,
      token: {
        type: 'bearer',
        value: token.value!.release(),
        expiresAt: token.expiresAt,
      },
    }
  }

  async authenticateUser(payload: LoginInput): Promise<LoginOutput> {
    const user = await User.verifyCredentials(payload.email, payload.password)
    // Cria o token de acesso
    const token = await User.accessTokens.create(user, ['*'], {
      name: 'Login Token',
      expiresIn: '30 days',
    })

    return {
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        roleId: user.roleId,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      token: {
        type: 'bearer',
        value: token.value!.release(),
        expiresAt: token.expiresAt,
      },
      permissions: { ...this.getFormatedPermissions(user) },
    }
  }

  async deauthenticateUser({ auth }: HttpContext): Promise<boolean> {
    const user = auth.getUserOrFail()
    const token = auth.user?.currentAccessToken

    if (token) {
      await User.accessTokens.delete(user, token.identifier)
      return true
    }

    return false
  }

  async getUserAuthenticated({ auth }: HttpContext): Promise<UserOutput> {
    const user = auth.getUserOrFail()

    return {
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        roleId: user.roleId,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      permissions: { ...this.getFormatedPermissions(user) },
    }
  }

  async getListTokens({ auth }: HttpContext): Promise<UserToken[]> {
    const user = auth.getUserOrFail()
    const tokens = await User.accessTokens.all(user)
    const tokensList: UserToken[] = tokens.map((token) => ({
      name: token.name,
      type: token.type,
      abilities: token.abilities,
      lastUsedAt: token.lastUsedAt,
      expiresAt: token.expiresAt,
      createdAt: token.createdAt,
    }))

    return tokensList
  }

  async createNewToken({ auth, request }: HttpContext): Promise<any> {
    const user = auth.getUserOrFail()
    const { name, abilities, expiresIn } = request.only(['name', 'abilities', 'expiresIn'])

    const token = await User.accessTokens.create(user, abilities || ['*'], {
      name: name || 'API Token',
      expiresIn: expiresIn || '30 days',
    })

    return {
      message: 'Token criado com sucesso',
      token: {
        type: 'bearer',
        value: token.value!.release(),
        name: token.name,
        abilities: token.abilities,
        expiresAt: token.expiresAt,
      },
    }
  }

  getFormatedPermissions(user) {
    const curso = permissions.curso[Number(user.roleId) - 1]
    const disciplina = permissions.disciplina[Number(user.roleId) - 1]
    const aluno = permissions.aluno[Number(user.roleId) - 1]
    const matricula = permissions.curso[Number(user.roleId) - 1]

    return {
      // Curso
      listCurso: curso.list,
      viewCurso: curso.view,
      createCurso: curso.create,
      editCurso: curso.edit,
      deleteCurso: curso.delete,
      // Disciplina
      listDisciplina: disciplina.list,
      viewDisciplina: disciplina.view,
      createDisciplina: disciplina.create,
      editDisciplina: disciplina.edit,
      deleteDisciplina: disciplina.delete,
      // Aluno
      listAluno: aluno.list,
      viewAluno: aluno.view,
      createAluno: aluno.create,
      editAluno: aluno.edit,
      deleteAluno: aluno.delete,
      // Matricula
      listMatricula: matricula.list,
      createMatricula: matricula.create,
      deleteMatricula: matricula.delete,
    }
  }
}

import app from '@adonisjs/core/services/app'
import { type HttpContext, ExceptionHandler } from '@adonisjs/core/http'
import { errors as authErrors } from '@adonisjs/auth'
import { errors as lucideErrors } from '@adonisjs/lucid'

export default class HttpExceptionHandler extends ExceptionHandler {
  /**
   * Define se o stack trace deve ser exibido (apenas em desenvolvimento)
   */
  protected debug = !app.inProduction

  /**
   * O método handle converte a exceção em uma resposta HTTP
   */
  async handle(error: unknown, ctx: HttpContext) {
    /**
     * Erros de Validação (VineJS)
     * O Adonis já trata isso automaticamente, mas você pode customizar aqui
     */
    if (error.code === 'E_VALIDATION_ERROR') {
      return ctx.response.status(422).send({
        errors: error.messages,
      })
    }

    /**
     * 2. Erros de Registro Não Encontrado (Lucid findOrFail)
     */
    if (error instanceof lucideErrors.E_ROW_NOT_FOUND) {
      return ctx.response.status(404).send({
        message: 'O recurso solicitado não foi encontrado no banco de dados.',
      })
    }

    /**
     * 3. Erros de Autenticação
     */
    if (error instanceof authErrors.E_UNAUTHORIZED_ACCESS) {
      return ctx.response.status(401).unauthorized({
        message: 'Você precisa estar logado e ter permissão para acessar este recurso.',
      })
    }

    /**
     * 4. Erros Personalizados (Custom Exceptions)
     * Se você criou uma exceção com 'node ace make:exception'
     */
    if (error.code === 'E_INSUFFICIENT_FUNDS') {
      return ctx.response.status(400).send({
        message: error.message,
      })
    }

    // Verifica se é um erro de violação de FK (MySQL/PostgreSQL)
    if (
      error.code === 'E_ROW_IS_REFERENCED' ||
      error.code === 'E_ROW_IS_REFERENCED_2' || // MySQL
      error.code === '23503' // PostgreSQL
    ) {
      return ctx.response.status(409).send({
        message: 'Não é possível remover este registro pois ele está sendo utilizado por outros dados.',
        error: 'foreign_key_violation',
        code: 409
      })
    }

    /* 5. Fallback para erros genéricos (500) */
    return super.handle(error, ctx)
  }

  /**
   * The method is used to report error to the logging service or
   * the a third party error monitoring service.
   *
   * @note You should not attempt to send a response from this method.
   */
  async report(error: unknown, ctx: HttpContext) {
    return super.report(error, ctx)
  }
}

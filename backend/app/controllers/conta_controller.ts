import { ContaService } from "#services/conta_service";
import { inject } from '@adonisjs/core'
import { HttpContext } from "@adonisjs/core/http";
import { AuthService } from "#services/auth_service";
import auth from "@adonisjs/auth/services/main";



@inject()
export default class ContaController {
    protected contaService: ContaService
    protected authService: AuthService

    constructor(contaService: ContaService, authService: AuthService) {
        this.contaService = contaService
        this.authService = authService
    }

    async transfer(ctx: HttpContext) {
        try {
            const authUser = await this.authService.user(ctx)

            const userId = authUser.user.id

            const { numeroConta, amount } = ctx.request.only([
                'numeroConta',
                'amount',
            ])

            if (!numeroConta || !amount) {
                return ctx.response.badRequest({
                    message: 'numeroConta e amount são obrigatórios',
                })
            }

            await this.contaService.transfer(
                userId,
                numeroConta,
                amount
            )

            return ctx.response.ok({
                message: 'Transferência realizada com sucesso',
            })
        } catch (error: any) {
            return ctx.response.badRequest({
                message: error.message,
            })
        }
    }
    async saldo(ctx: HttpContext) {
        try {
            const authUser = await this.authService.user(ctx)

            const userId = authUser.user.id

            const saldo = await this.contaService.getSaldo(userId)

            return ctx.response.ok({
                saldo,
            })
        } catch (error: any) {
            return ctx.response.badRequest({
                message: error.message,
            })
        }
    }


}
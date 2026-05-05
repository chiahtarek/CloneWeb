import { ContaService } from "#services/conta_service";
import { inject } from '@adonisjs/core'
import { HttpContext } from "@adonisjs/core/http";

@inject()
export default class ContaController {
    protected contaService: ContaService

    constructor(contaService: ContaService) {
        this.contaService = contaService
    }

    async transfer({ request, response }: HttpContext) {
        try {
            const { fromId, toId, amount } = request.only([
                'fromId',
                'toId',
                'amount',
            ])

            // validação básica (você pode evoluir isso depois com validator)
            if (!fromId || !toId || !amount) {
                return response.badRequest({
                    message: 'fromId, toId e amount são obrigatórios',
                })
            }

            await this.contaService.transfer(fromId, toId, amount)

            return response.ok({
                message: 'Transferência realizada com sucesso',
            })
        } catch (error: any) {
            return response.badRequest({
                message: error.message,
            })
        }
    }


}
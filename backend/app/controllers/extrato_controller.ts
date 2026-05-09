import { inject } from '@adonisjs/core'
import { BasesController } from './bases_controller.ts'
import { DisciplinaService } from '#services/disciplina_service'
import DisciplinaPolicy from '#policies/disciplina_policy'
import {ExtratoService} from '../services/extrato_service.ts'
import { HttpContext } from '@adonisjs/core/http'


@inject() // Habilita injeção automática no Adonis 6
export default class ExtratoController {
    protected extratoService: ExtratoService

    constructor(extratoService :ExtratoService){
        this.extratoService = extratoService 
    }

    async list({ response }: HttpContext){
        const extratos = await this.extratoService.index()

        return response.ok({
            data: extratos,
        })
    }
   
}

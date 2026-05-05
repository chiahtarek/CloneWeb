import Extrato from "#models/extrato";
import { BaseRepository } from "./base_repository.ts";

export default class ExtratoRepository extends BaseRepository<Extrato> {
    constructor() {
        super(Extrato)
    }

    async createExtrato(tipo: string, valor: number, trx?: any): Promise<Extrato> {
        const extrato = new Extrato()

        extrato.tipo = tipo
        extrato.valor = valor

        if (trx) {
            extrato.useTransaction(trx)
        }

        await extrato.save()

        return extrato
    }
}
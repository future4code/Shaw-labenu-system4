import { Turma } from "../model/Turma";
import BaseDataBase from "./BaseDataBase";


export class TurmaData extends BaseDataBase {

    async CriarTurma(turma: Turma) {
        await this.getConection().insert({
            id: turma.getId(),
            nome: turma.getNome(),
            modulo: turma.getModulo()
        }).into("Turma")
    }

    async pegarTurmas() {
        const result = await this.getConection().select("*").from("Turma")
        return result
    }

    async updateTurma(modulo: string, id: string) {
        await this.getConection().update({ modulo: modulo }).where("id", id).into("Turma")
    }


}
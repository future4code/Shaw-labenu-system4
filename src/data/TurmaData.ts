import { Turma } from "../Turma";
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

    async updateTurma(modulo: Turma) {
        await this.getConection().update({ modulo: modulo.getModulo() }).where("id")
    }


}
import { Docente } from "../model/Docente";
import BaseDataBase from "./BaseDataBase";

export class DocenteData extends BaseDataBase {
  async CriarDocente(docente: Docente) {
    await this.getConection()
      .insert({
        id: docente.getId(),
        nome: docente.getNome(),
        email: docente.getEmail(),
        data_nasc: docente.getData_nasc(),
        turma_id: docente.getTurma_id(),
        especialidades: docente.getEspecialidades(),
      })
      .into("Docente");
  }

  async pegarDocentes() {
    const result = await this.getConection().select("*").from("Docente");
    return result;
  }
  async updateDoscenteTurma(turma_id:string,id:string){
  await this.getConection().update({turma_id: turma_id}).where("id", id).into("Docente")
  }
}

import { Estudante } from "../Estudante";
import BaseDataBase from "./BaseDataBase";

export class EstudanteData extends BaseDataBase {
  async CriarEstudante(estudante: Estudante) {
    await this.getConection()
      .insert({
        id: estudante.getId(),
        nome: estudante.getNome(),
        email: estudante.getEmail(),
        data_nasc: estudante.getData_nasc(),
        turma_id: estudante.getTurma_id(),
        hobbies: estudante.getHobbies(),
      })
      .into("Estudante");
  }

  async pegarEstudantes() {
    const result = await this.getConection().select("*").from("Estudante");
    return result;
  }
}

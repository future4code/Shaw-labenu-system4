import { Usuario } from "./Usuario";
import { Especialidades } from "./Especialidade";

export class Docente extends Usuario {
  private especialidades: Especialidades[] = [];

  constructor(
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string,
    especialidades: Especialidades[]
  ) {
    super(id, nome, email, data_nasc, turma_id);
    console.log("FAZENDO NOVO DOCENTE");
    this.especialidades = especialidades;
  }

  public getEspecialidades(): Especialidades[] {
    return this.especialidades;
  }
}

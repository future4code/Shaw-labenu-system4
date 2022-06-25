import { Usuario } from "./Usuario";
import { Hobby } from "./Hobby";

export class Estudante extends Usuario {
  private hobbies: Hobby[] = [];

  constructor(
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string,
    hobbies: Hobby[]
  ) {
    super(id, nome, email, data_nasc, turma_id);
    console.log("FAZENDO NOVO ALUNO");
    this.hobbies = hobbies;
  }

  public getHobbies(): Hobby[] {
    return this.hobbies;
  }
}

export class Turma {
  protected turma_id: string;

  protected nome: string;

  protected modulo: number;
  
  constructor(id: string, nome: string, modulo: number) {
    console.log("FAZENDO NOVA TURMA");
    this.turma_id = id;
    this.nome = nome;
    this.modulo = modulo;
  }

  public getId(): string {
    return this.turma_id;
  }

  public getNome(): string {
    return this.nome;
  }

  public getModulo(): number {
    return this.modulo;
  }
  
}

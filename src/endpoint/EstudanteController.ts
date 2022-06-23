import { Request, Response } from "express";
import { EstudanteData } from "../data/EstudanteData";
import { Estudante } from "../Estudante";

export class EstudanteController {
  async criarEstudante(req: Request, res: Response) {
    try {
      const { nome, email, data_nasc, turma_id, hobbies } = req.body;
      const id = Date.now().toString();

      if (!nome || !email || !data_nasc || !turma_id || !hobbies) {
        throw new Error(
          "Nome, email, data de nascimento, id da turma e hobbies devem ser preenchidos!!"
        );
      }

      const estudante = new Estudante(
        id,
        nome,
        email,
        data_nasc,
        turma_id,
        hobbies
      );
      const estudanteData = new EstudanteData();
      const anwser = await estudanteData.CriarEstudante(estudante);
      res.status(201).send("Estudante criado");
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

  async getEstudantes(req: Request, res: Response) {
    try {
      const estudanteData = new EstudanteData();
      const todosOsEstudantes = await estudanteData.pegarEstudantes();

      if (!todosOsEstudantes.length) {
        throw new Error("Não encontrei nenhum estudante");
      }

      res.status(201).send(todosOsEstudantes);
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }
}

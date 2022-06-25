import { Request, Response } from "express";
import { EstudanteData } from "../data/EstudanteData";
import { Estudante } from "../model/Estudante";

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
  };

  async updateEstudantes(req: Request, res: Response) {
    try {

      const { turma_id } = req.body
      const { id } = req.params

      if (!turma_id) {
        throw new Error("Id da turma tem que ser preenchido")
      }
      const estudanteData = new EstudanteData();
      const updateTurma = await estudanteData.updateEstudante(turma_id, id)
      res.status(200).end(`Estudante foi trocado de turma`)

    } catch (error: any) {
      res.status(400).send({ message: error.message })
    }

  }


}

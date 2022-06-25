import { request, Request, response, Response } from "express";
import { DocenteData } from "../data/DocenteData";
import { TurmaData } from "../data/TurmaData";
import { Docente } from "../model/Docente";

export class DocenteController {
  async criarDocente(req: Request, res: Response) {
    try {
      const { nome, email, data_nasc, turma_id, especialidades } = req.body;
      const id = Date.now().toString();

      if (!nome || !email || !data_nasc || !turma_id || !especialidades) {
        throw new Error(
          "Nome, email, data de nascimento, id da turma e especialidades devem ser preenchidos!!"
        );
      }

      const docente = new Docente(
        id,
        nome,
        email,
        data_nasc,
        turma_id,
        especialidades
      );
      const docenteData = new DocenteData();
      const anwser = await docenteData.CriarDocente(docente);
      res.status(201).send("Docente criado");
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  };

  async getDocentes(req: Request, res: Response) {
    try {
      const docenteData = new DocenteData();
      const todosOsDocentes = await docenteData.pegarDocentes();

      if (!todosOsDocentes.length) {
        throw new Error("Não encontrei nenhum docente");
      }

      res.status(201).send(todosOsDocentes);
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  };


  async updateDocente(req: Request, res: Response) {
    try {
      const { turma_id } = req.body
      const { id } = req.params
      const docenteData = new DocenteData()

      if (!turma_id) {
        throw new Error("Id da turma tem que ser preechido")
      }

      const updateDoscenteTurma = await docenteData.updateDoscenteTurma(turma_id, id)
      res.status(201).end("Turma do docente atulizada!")

    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }
}

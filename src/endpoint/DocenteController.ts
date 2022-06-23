import { Request, Response } from "express";
import { DocenteData } from "../data/DocenteData";
import { Docente } from "../Docente";

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
  }
}

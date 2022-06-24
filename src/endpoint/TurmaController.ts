import { Request, Response } from "express"
import { TurmaData } from "../data/TurmaData";
import { Turma } from "../Turma";

export class TurmaController {

    async createTurma(req: Request, res: Response) {
        try {
            const { nome, modulo } = req.body
            const id = Date.now().toString()

            if (!nome || !modulo) {

                throw new Error("Todos os dados devem ser preechidos!");

            }
            const turma = new Turma(id, nome, modulo)
            const turmaData = new TurmaData()
            const anwser = await turmaData.CriarTurma(turma)
            res.status(201).send("Turma Criada")
        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }

    }

    async getTurma(req: Request, res: Response) {
        try {
            const turmaData = new TurmaData()
            const todasAsTurmas = await turmaData.pegarTurmas()

            if (!todasAsTurmas.length) {
                throw new Error("Nenhuma turma criada!")
            }

            res.status(201).send(todasAsTurmas)

        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }

    }

    async updateModulo(req: Request, res: Response) {
        try {
            const { modulo } = req.body
            const turmaData = new TurmaData()
            const updateModulo = await turmaData.updateTurma(modulo)
            
            if (!modulo) {
                throw new Error("Mudulo tem que ser preechido");
            }
            res.status(201).send(`Modulo foi alterado para ${modulo}!`)

        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }
}

import { Request, Response } from "express";
import prismaConnection from "../../index";
import User from "../interfaces/user"

class DefaultController {
    async getAll(request: Request, response: Response) {
        try {
            const findAll: User[] = await prismaConnection.user.findMany();

            return response.status(200).json({
                data: findAll
            });
        } catch (error: any) {
            return response.status(500).json({
                error_message: error.message
            });
        }
    }

    async getById(request: Request, response: Response) {
        try {
            const id: number = parseInt(request.params.id);
            const findAll: User = await prismaConnection.user.findFirst({ where: { id: id } });

            return response.status(200).json({
                data: findAll
            });
        } catch (error: any) {
            return response.status(500).json({
                error_message: error.message
            });
        }
    }

    async post(request: Request, response: Response) {

    }

    async put(request: Request, response: Response) {

    }
}

export default new DefaultController();
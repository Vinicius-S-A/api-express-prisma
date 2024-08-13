
import { Request, Response } from "express";
import prismaConnection from "../../index";

class DefaultController {
    async getAll(request: Request, response: Response) {
        try {
            const findAll = await prismaConnection.user.findMany();

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

    }

    async post(request: Request, response: Response) {

    }

    async put(request: Request, response: Response) {

    }
}

export default new DefaultController();
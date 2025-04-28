import { Request, Response } from "express";
import prismaConnection from "../../index";
import User from "../interfaces/user"

class userController {
    async signUp(request: Request, response: Response) {
        // procurar para ver se já existe usuário
        // então cadastra
    }

    async login(request: Request, response: Response) {

    }

    async blockUser(request: Request, response: Response) {

    }

    async unblockUser(request: Request, response: Response) {
        
    }
}

export default new userController();
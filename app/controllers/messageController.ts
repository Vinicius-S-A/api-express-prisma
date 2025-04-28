import { Request, Response } from "express";
import prismaConnection from "../../index";
import Message from "../interfaces/message";

class userController {
    async getMessagesOnChannel(request: Request, response: Response) {
    
    }

    async sendMessage(request: Request, response: Response) {
        // procurar para ver se já existe usuário
        // então cadastra
    }

    async editMessage(request: Request, response: Response) {

    }

    async deleteMessage(request: Request, response: Response) {
        
    }
}

export default new userController();
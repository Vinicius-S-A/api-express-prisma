import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (request: Request, response: Response)=>{
    return response.send({ status: 200, message: 'OK!' });
});


export default router;
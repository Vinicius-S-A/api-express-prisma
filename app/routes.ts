import { Router, Request, Response } from "express";
// import DefaultController from "./controllers/DefaultController";

const router = Router();

router.get('/', (request: Request, response: Response)=>{
    return response.send({ status: 200, message: 'OK!' });
});

// router.get('/default-route', DefaultController.getAll);


export default router;
import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
    constructor(private CreateSpecificationUseCase: CreateSpecificationUseCase) {}

    handle(req: Request, res: Response){
        const { name, description } = req.body;

        this.CreateSpecificationUseCase.execute({name, description});

        return res.status(201).send();
    }
}

export { CreateSpecificationController };
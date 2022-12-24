import { Request, Response } from "express"

import { CreateCategoryUseCase } from "./CreateCategoryUseCase"; 

class CreateCategoryController {

    constructor(private CreateCategoryUseCase: CreateCategoryUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, description } = req.body;

        await this.CreateCategoryUseCase.execute({ name, description });
        
        return res.status(201).send();
    }
}

export { CreateCategoryController }
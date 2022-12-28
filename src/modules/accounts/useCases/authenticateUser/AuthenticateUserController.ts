import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AutheticateUserController {
   
    async handle(req: Request, res: Response): Promise<Response> {
        const { password, email } = req.body;

        const autheticateUserUseCase = container.resolve(AuthenticateUserUseCase);

        const token = await autheticateUserUseCase.execute({ password, email });
        
        return res.json(token);
    }
}

export { AutheticateUserController }
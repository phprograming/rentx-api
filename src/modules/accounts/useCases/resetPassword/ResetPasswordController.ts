import { Request, Response } from "express";
import { container } from "tsyringe";
import { ResetPasswordUseCase } from "./ResetPasswordUseCase";

class ResetPasswordController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { token } = req.query;
        const { password } = req.body;
        
        const resetPasswordUseCase = container.resolve(ResetPasswordUseCase);

        await resetPasswordUseCase.execute({
            password,
            token: String(token)
        });

        return res.send();
    }
}

export { ResetPasswordController }
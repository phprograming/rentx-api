import { Request, Response } from "express";
import { container } from "tsyringe";
import { SendEmailUseCase } from "./SendEmailUseCase";

class SendEmailController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { email } = req.body;

        const sendEmailUseCase = container.resolve(SendEmailUseCase);

        await sendEmailUseCase.execute(email);
        
        return res.send();
    }
}

export { SendEmailController }
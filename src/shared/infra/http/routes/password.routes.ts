import { ResetPasswordController } from "@modules/accounts/useCases/resetPassword/ResetPasswordController";
import { SendEmailController } from "@modules/accounts/useCases/sendEmail/SendEmailController";
import { Router } from "express";

const passwordRoutes = Router();

const sendMailController = new SendEmailController();
const resetPasswordController = new ResetPasswordController();

passwordRoutes.post("/forgot", sendMailController.handle);
passwordRoutes.post("/reset", resetPasswordController.handle);

export { passwordRoutes }
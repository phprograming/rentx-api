import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs";

interface IRequest {
    token: string;
    password: string;
}

@injectable()
class ResetPasswordUseCase {

    constructor(
        @inject("UsersTokensRepository")
        private UsersTokensRepository: IUsersTokensRepository,
        @inject("DayjsDateProvider")
        private DateProvider: IDateProvider,
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ password, token }: IRequest): Promise<void> {
        const userToken = await this.UsersTokensRepository.findByRefreshToken(token);

        if (!userToken) {
            throw new AppError("Token invalid!");
        }

        if(this.DateProvider.compareIfBefore(userToken.expires_date, this.DateProvider.dateNow())) {
            throw new AppError("Token expired!");
        }

        const user = await this.usersRepository.findById(userToken.user_id);

        user.password = await hash(password, 8);

        await this.usersRepository.create(user);

        await this.UsersTokensRepository.deleteById(userToken.id);
    }
}

export { ResetPasswordUseCase }
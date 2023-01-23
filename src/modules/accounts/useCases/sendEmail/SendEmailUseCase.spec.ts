import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";
import { SendEmailUseCase } from "./SendEmailUseCase";


let sendMailUseCase: SendEmailUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let mailProvider: MailProviderInMemory;

describe("Send Forgot Mail", () => {

    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        dateProvider = new DayjsDateProvider();
        usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
        mailProvider = new MailProviderInMemory();

        sendMailUseCase = new SendEmailUseCase(
            usersRepositoryInMemory,
            usersTokensRepositoryInMemory,
            dateProvider,
            mailProvider,
        );
    });

    it("should be able to send a forgot password mail to user", async () => {
        const sendEmail = spyOn(mailProvider, "sendMail");
        
        await usersRepositoryInMemory.create({
            driver_license: "101010",
            email: "test@test.com",
            name: "test testing",
            password: "1234"
        });

        await sendMailUseCase.execute("test@test.com");

        expect(sendEmail).toHaveBeenCalled();
    });

    it("should not be able to send an email if user does not exists", async () => {
        await expect(
            sendMailUseCase.execute("teste@test.com")
        ).rejects.toEqual(new AppError("User does not exists!"));
    });

    it("should be able to create an user token", async () => {
        const generateTokenMail = spyOn(usersTokensRepositoryInMemory, "create");

        await usersRepositoryInMemory.create({
            driver_license: "101016",
            email: "test2@test.com",
            name: "test testing",
            password: "1234"
        });

        await sendMailUseCase.execute("test2@test.com");

        expect(generateTokenMail).toBeCalled();
    });
});
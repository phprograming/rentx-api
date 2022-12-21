import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateCategoryUseCase } from "../createCategories/CreateCategoryUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";


const specificationRepository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateCategoryUseCase(specificationRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController } 
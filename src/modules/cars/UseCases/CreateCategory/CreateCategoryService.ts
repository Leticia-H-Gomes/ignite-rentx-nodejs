import { inject,injectable } from "tsyringe";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";


interface IRequest{
  name:string;
  description:string;
}
@injectable()
class CreateCategoryService {

  constructor(
    @inject("CategoriesRepository")
    private categoryRepository:ICategoriesRepository){

  }

  async execute({name,description}:IRequest):Promise<void>{

    //verifica se a categoria ja está cadastrada
    const categoryExists = await this.categoryRepository.findByName(name);
    
    //caso exista apresentar erro
    if(categoryExists){
      throw new Error("Category already exists!");
    }

    //senão cadastra a nova categoria
   await this.categoryRepository.create({name,description});
  }
}

export {CreateCategoryService}
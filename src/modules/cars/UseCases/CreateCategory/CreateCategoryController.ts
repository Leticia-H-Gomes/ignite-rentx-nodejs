import { Request, Response } from "express";
import {container} from 'tsyringe';
import { CreateCategoryService } from "./CreateCategoryService";

class CreateCategoryController {


  async handle(request:Request,response:Response): Promise<Response>{

    const {name,description} = request.body;

    //instanciando a classe por injeção de dependência
    const createCategoryService = container.resolve(CreateCategoryService);

    await createCategoryService.execute({name,description});

    return response.status(201).json({message:"Categoria cadastrada com sucesso!"});

  }
}

export{ CreateCategoryController }
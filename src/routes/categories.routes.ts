import {Router} from 'express';
import createCategoryController from "../modules/cars/UseCases/CreateCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/",(request,response) =>{
  return createCategoryController().handle(request,response);
});

export {categoriesRoutes}
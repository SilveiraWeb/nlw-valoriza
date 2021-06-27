import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import "./database"; // import connection
import { router } from "./routes";

const app = express();
app.use(cors()); // habilita requisiçoes externas
app.use(express.json());
app.use(router);

// middleware
// verifica erros sem uso de try catch no bloco da funcao
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: "Internal Server Error ",
    });
  }
);
app.listen(3000, () => {
  console.log("Server is running...");
});

// caso apareca '...' no nome do modulo sera
// necessario instalar a biblioteca de tipagem "@types/express"
// server > routes > controller > service
/**
 * - Methods -
 * GET    => Busca informações
 * POST   => Inserir informações
 * PUT    => Alterar uma informação
 * DELETE => Apagar um dado
 * PATH   => Alterar uma informação especifica
 */
/**
 * Tipos  de paramêtros
 * Routes Params  => http://localhost:3000/products/78845548874555
 * Query Params   => http://localhost:3000/products?name=teclado&description=tecladobom&price=low
 * Body Params    =>  {
 *  "name": "teclado,
 * "description": "tecladobom",
 * "price": "low"
 * " * }
 */
/**
 * criando tabelas c migrations
 * yarn typeorm migration:create -n CreateUsers
 * yarn typeorm migration:create -n CreateTags
 * yarn typeorm migration:create -n CreateCompliments
 * yarn typeorm migration:run cria migrtaion table e todas as tabelas
 * yarn typeorm migration:revert apaga tabela
 * yarn typeorm entity:create -n User cria arquivo de entidade
 * equivalente a Model
 * 
 jsonwebtoken  install
 yarn add jsonwebtoken
 jsonwebtoken types
 yarn add @types/jsonwebtoken -D
 */
/**
 * juntos no proximo nuvel
 */
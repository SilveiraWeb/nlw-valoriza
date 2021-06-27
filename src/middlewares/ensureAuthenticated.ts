import { Request, Response, NextFunction } from "express";
import { verify } from  "jsonwebtoken";

interface IPayload{
  sub: string;
}

export function ensureAutenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // receber o token
  const authToken = request.headers.authorization;

  // validar se token esta preenchido
  if (!authToken) {
    return response.status(401).json({ message: "Token is not found" });
  }
  const [, token] = authToken.split(" ");
  try{
    // validar padroes do token e expiração
    const { sub } = verify(token, "7d6425f0263d7ecc61438a378ea84d68") as IPayload;
    request.user_id = sub;
    return next();
  } catch(error){
    return response.status(401).json({message:"Unathorized"});
  }
  // recuperar info do usuario


  
}

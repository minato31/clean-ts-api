import { Request, Response, RequestHandler } from 'express'
import { Controller, HttpRequest } from '../../presentation/protocols'

export const adaptRoute = (constroller: Controller): RequestHandler => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const httpResponse = await constroller.handle(httpRequest)
    res.status(httpResponse.statusCode).send(httpResponse.body)
  }
}

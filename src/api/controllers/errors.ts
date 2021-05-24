import { Response, Request } from "express";

export class ErrorApi extends Error {
  status: number;
  constructor(err: string, status: number) {
    super();
    this.message = err;
    this.status = status;
  }
}


export const errors = (err: ErrorApi, req: Request, res: Response, next: any) => {
  const message = err.message;
  res.status(err.status || 500).send({ status: "fail", payload: message });
};
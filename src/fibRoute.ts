// Endpoint for querying the fibonacci numbers

import { Request, Response } from "express";
import fibonacci from "./fib";

export default (req: Request, res: Response): void => {
  const numStr: string = req.params.num;
  const num = parseInt(numStr, 10);

  const fibN = fibonacci(num);
  let result: string;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  } else {
    result = `fibonacci(${num}) is ${fibN}`;
  }

  res.send(result);
};

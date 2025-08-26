// Endpoint for querying the fibonacci numbers

import { Request, Response } from "express";
import fibonacci from "./fib";

export default (req: Request, res: Response) => {
  const { num } = req.params.num; // error Unsafe assignment of an `any` value, Unsafe member access .params on an `any` value

  const fibN = fibonacci(parseInt(num, 10)); // error Unsafe argument of type `any` assigned to a parameter of type `string`
  let result = `fibonacci(${num}) is ${fibN}`; // error Invalid type "any" of template literal expression

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`; // error Invalid type "any" of template literal expression
  }

  res.send(result); // error Unsafe member access .send on an `any` value, Unsafe call of an `any` typed value
};

import express, { Request, Response } from "express";
import { createForm } from "./app/createForm";
import { validateResponse } from './app/validateResponse'
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  const isValid = validateResponse(req.body)
  if (isValid) {
    res.json()
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server has been started on port: ${PORT}`));

(async function foo() {
  await createForm();
})();

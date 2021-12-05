import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { WebReport } from './models/website-report-model';
import { router as reportRouter } from './routers/report-router';

const filePath: string = path.join(
  __dirname,
  '/assets/Full Stack_Angular_Assignment_DB.json'
);
const port: number = 3000;
const app: express.Express = express();
export const websiteReports: WebReport[] = JSON.parse(
  fs.readFileSync(filePath).toString()
);

app.use('/', reportRouter);

app.listen(port, () =>
  console.log(`whizzCo dashboard app listening at http://localhost:${port}`)
);

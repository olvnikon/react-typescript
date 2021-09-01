import fs from 'fs';
import path from 'path';
import { pipe } from 'fp-ts/lib/function';
import db from './db.json';

type dbType = typeof db;

export const fetchFromDB = () =>
  pipe(
    path.join(__dirname, './db.json'),
    (file) => fs.readFileSync(file, 'utf8'),
    JSON.parse,
    Promise.resolve
  ) as Promise<dbType>;

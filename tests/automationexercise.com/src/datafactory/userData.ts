import * as fs from 'fs';
import * as path from 'path';

const dataPath = path.resolve(__dirname, 'tempUserData.json');
export const userData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

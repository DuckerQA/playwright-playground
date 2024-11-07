import { RegisterUserModel } from '../models/user.model';
import * as fs from 'fs';
import * as path from 'path';

const dataPath = path.resolve(__dirname, 'tempUserData.json');

export function saveUserData(userData: RegisterUserModel): void {
  fs.writeFileSync(dataPath, JSON.stringify(userData, null, 2));
}

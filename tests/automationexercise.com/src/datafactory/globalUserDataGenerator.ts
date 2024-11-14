import { RegisterUserModel } from '../models/user.model';
import * as fs from 'fs';
import * as path from 'path';

const dataPath = path.resolve(__dirname, '../../tmp/tempUserData.json');

// Load `userData` immediately when the file is imported
export const userData: RegisterUserModel = JSON.parse(
  fs.readFileSync(dataPath, 'utf-8'),
);

// Function to load the user data
export function getUserData(): RegisterUserModel {
  return JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
}

// Function to save the user data
export function saveUserData(userData: RegisterUserModel): void {
  fs.writeFileSync(dataPath, JSON.stringify(userData, null, 2));
}

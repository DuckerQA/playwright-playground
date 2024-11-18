/* eslint-disable @typescript-eslint/no-unused-vars */
import { STORAGE_STATE } from '../../../playwright.config';
import { FullConfig } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

dotenv.config();
async function globalSetup(config: FullConfig) {
  if (fs.existsSync(STORAGE_STATE)) {
    fs.unlinkSync(STORAGE_STATE);
  }
}
export default globalSetup;

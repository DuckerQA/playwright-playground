import { defineConfig, devices } from '@playwright/test';
import * as path from 'path';

export const STORAGE_STATE = path.join(
  __dirname,
  'tests/automationexercise.com/tmp/session.json',
);

export default defineConfig({
  testDir: './tests',
  globalSetup: 'tests/automationexercise.com/src/global.setup.ts',
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },
  fullyParallel: true,
  retries: 0,
  workers: undefined,
  reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL,
    actionTimeout: 0,
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'setup',
      testMatch: '**.setup.ts',
    },
    {
      name: 'logged',
      grep: /@logged/,
      dependencies: ['setup'],
      use: {
        storageState: STORAGE_STATE,
      },
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'chromium logged',
    //   use: { ...devices['Desktop Chrome'] },
    //   // dependencies: ['setup acc'],
    // },
  ],
});

import { defineConfig, devices } from '@playwright/test';

// require('dotenv').config();

// export const STORAGE_STATE =

export default defineConfig({
  testDir: './tests',
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },
  fullyParallel: true,
  retries: 0,
  workers: undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://www.automationexercise.com/',
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
        storageState: 'tests/automationexercise.com/tmp/session.json',
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

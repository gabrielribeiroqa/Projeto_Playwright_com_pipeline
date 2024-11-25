import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL,
    screenshot: 'on',
    trace: 'on-first-retry',
  },

  timeout: 60000,
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    /*
     
    {
       name: 'firefox',
       use: { ...devices['Desktop Firefox'] },
     },
 
     {
       name: 'webkit',
       use: { ...devices['Desktop Safari'] },
     },
     
     */
  ],
});

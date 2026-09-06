import { defineConfig } from '@playwright/test';
import { config } from 'dotenv';

config();

export default defineConfig({
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : 4,
  reporter: [
    ['html', { open: 'never' }],
    ['junit', { outputFile: 'junit/results.xml' }],
  ],
  testDir: 'tests',

  projects: [
    {
      name: 'ui',
      testDir: 'tests/ui',
      use: {
        viewport: {
          width: 1920,
          height: 900,
        },
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
      },
    },
    {
      name: 'api-setup',
      testMatch: /setup\/api\.token\.setup\.ts/,
    },
    {
      name: 'api',
      testDir: 'tests/api',
      dependencies: ['api-setup'],
    },
  ],
});

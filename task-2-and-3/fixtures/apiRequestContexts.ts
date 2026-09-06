import type { APIRequestContext } from '@playwright/test';
import { test as base, request } from '@playwright/test';
import fs from 'fs';

type ApiRequestFixtures = {
  useAuth: boolean;
  aldiTaskServiceContext: APIRequestContext;
};

export const test = base.extend<ApiRequestFixtures>({
  useAuth: [true, { option: true }],
  aldiTaskServiceContext: async ({ useAuth }, use) => {
    const extraHTTPHeaders: Record<string, string> = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    if (useAuth) {
      const token = JSON.parse(fs.readFileSync('.auth/aldiTaskService.token.json', 'utf-8'));
      extraHTTPHeaders.Authorization = `Bearer ${token.access_token}`;
    }

    const context = await request.newContext({
      baseURL: process.env.API_URL,
      extraHTTPHeaders,
    });
    await use(context);
    await context.dispose();
  },
});

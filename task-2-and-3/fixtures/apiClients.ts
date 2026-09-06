import { test as base } from './apiRequestContexts';
import { TaskManagementApiClient } from '../api/clients/TaskManagementApiClient';

type ApiFixtures = {
  taskManagementApiClient: TaskManagementApiClient;
};

export const test = base.extend<ApiFixtures>({
  taskManagementApiClient: async ({ aldiTaskServiceContext }, use) => {
    await use(new TaskManagementApiClient(aldiTaskServiceContext));
  },
});

export { expect } from '@playwright/test';

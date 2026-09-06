import { test as base } from '@playwright/test';
import { LoginPage } from '@po/LoginPage';
import { WelcomePage } from '@po/WelcomePage';

type Pages = {
  welcomePage: WelcomePage;
  loginPage: LoginPage;
};

export const test = base.extend<Pages>({
  welcomePage: async ({ page }, use) => {
    const welcomePage = new WelcomePage(page);

    await use(welcomePage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },
});

export { expect } from '@playwright/test';

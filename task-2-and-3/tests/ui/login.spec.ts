import { test, expect } from '@fixtures/pages';
import { Texts } from '@testData/constants';

test.describe(
  'Login functionality',
  {
    tag: ['@login'],
    annotation: {
      type: 'User Story(es)',
      description: '<Link to US or requirements could be added here>',
    },
  },
  () => {
    test.beforeEach(async ({ welcomePage, loginPage }) => {
      await welcomePage.navigate();
      await welcomePage.headerLinks.login.click();
      await expect(loginPage.returningCustomerBlock, 'The login block should be visible').toBeVisible();
    });

    test(
      'Logging in with valid credentials should be possible',
      {
        tag: ['@smoke', '@TC-1'],
        annotation: {
          type: 'Test Case',
          description: '<Link to TC could be added here>',
        },
      },
      async ({ welcomePage, loginPage }) => {
        await loginPage.email.fill(process.env.USER_EMAIL);
        await loginPage.password.fill(process.env.USER_PASSWORD);
        await loginPage.loginButton.click();
        await expect(welcomePage.welcomeText, 'The welcome page should be loaded').toBeVisible();
        await expect(welcomePage.headerLinks.login, 'The login button should not be visible').not.toBeVisible();
        await expect(welcomePage.headerLinks.logout, 'The logout button should be visible').toBeVisible();
        await expect(welcomePage.headerLinks.userEmail, 'The proper user should be logged in').toHaveText(
          process.env.USER_EMAIL,
        );
      },
    );

    test(
      'Logging in with invalid password should not be possible',
      {
        tag: ['@regression', '@TC-2'],
        annotation: {
          type: 'Test Case',
          description: '<Link to TC management system could be added here>',
        },
      },
      async ({ loginPage }) => {
        await loginPage.email.fill(process.env.USER_EMAIL);
        await loginPage.password.fill('invalid password');
        await loginPage.loginButton.click();
        await expect(loginPage.returningCustomerBlock, 'The login page should remain present').toBeVisible();
        await expect(loginPage.loginError, 'The proper error message should be displayed').toHaveText(
          Texts.login.validationErrorMessage,
        );
      },
    );
  },
);

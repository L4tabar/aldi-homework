import type { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  public readonly returningCustomerBlock: Locator;
  public readonly email: Locator;
  public readonly password: Locator;
  public readonly loginButton: Locator;
  public readonly loginError: Locator;

  public constructor(public readonly page: Page) {
    super(page);
    this.returningCustomerBlock = this.page.locator('.returning-wrapper');
    this.email = this.returningCustomerBlock.getByLabel('Email:');
    this.password = this.returningCustomerBlock.getByLabel('Password:');
    this.loginButton = this.returningCustomerBlock.getByRole('button', { name: 'Log in' });
    this.loginError = this.returningCustomerBlock.locator('.validation-summary-errors');
  }
}

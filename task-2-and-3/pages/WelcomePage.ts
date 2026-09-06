import type { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class WelcomePage extends BasePage {
  public readonly welcomeText: Locator;

  public constructor(public readonly page: Page) {
    super(page);
    this.welcomeText = this.page.locator('h2.topic-html-content-header');
  }
}

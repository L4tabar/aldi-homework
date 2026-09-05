import type { Page } from '@playwright/test';
import HeaderLinks from './components/_common/HeaderLinks';

export class BasePage {
  public readonly headerLinks: HeaderLinks;

  public constructor(public readonly page: Page) {
    this.headerLinks = new HeaderLinks(page);
  }

  public async navigate(): Promise<void> {
    await this.page.goto(process.env.BASE_URL);
    await this.page.waitForLoadState('domcontentloaded');
  }
}

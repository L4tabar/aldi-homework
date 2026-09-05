import type { Page, Locator } from '@playwright/test';

export default class HeaderLinks {
  public readonly root: Locator;
  public readonly login: Locator;
  public readonly logout: Locator;
  public readonly userEmail: Locator;

  public constructor(public readonly page: Page) {
    this.root = page.locator('.header-links');
    this.login = this.root.locator('a[href="/login"]');
    this.logout = this.root.locator('a[href="/logout"]');
    this.userEmail = this.root.locator('a[href="/customer/info"]');
  }
}

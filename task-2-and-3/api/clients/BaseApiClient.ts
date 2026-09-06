import type { APIRequestContext } from '@playwright/test';

export class BaseApiClient {
  protected request: APIRequestContext;

  public constructor(request: APIRequestContext) {
    this.request = request;
  }
}

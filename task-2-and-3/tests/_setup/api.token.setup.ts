import { test as setup } from '@fixtures/apiClients';
import { clientCredentialsAuth } from '@support/authentication';

setup(`Save dummy API access token`, async () => {
  await clientCredentialsAuth();
});

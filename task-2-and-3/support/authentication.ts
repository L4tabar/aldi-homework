import fs from 'node:fs';

export const clientCredentialsAuth = async (): Promise<any> => {
  /*
    Here could be a real implementation of the client credentials authentication flow
    But in the scope of this task, I just return a dummy token and write it to the .auth/aldiTaskService.token.json file
  */

  fs.mkdirSync('.auth', { recursive: true });
  fs.writeFileSync('.auth/aldiTaskService.token.json', JSON.stringify({ access_token: 'dummy_access_token' }, null, 2));
};

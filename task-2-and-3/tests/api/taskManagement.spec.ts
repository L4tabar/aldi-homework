import { expect, test } from '@fixtures/apiClients';
import taskCreationNegativeCases from '@testData/taskManagementService/taskCreationNegativeCases.json';

test.describe(
  'Task Management API',
  {
    tag: ['@smoke', '@taskManagement'],
    annotation: {
      type: 'User Story(es)',
      description: '<Link to US or requirements could be added here>',
    },
  },
  () => {
    test.describe('Positive Cases', () => {
      /*
      test.afterAll(async ({ taskManagementApiClient }) => {
        Cleanup code usually goes here to delete the tasks created during the tests
      });
        */

      // This TC could be re-used and check some boundary values
      test(
        'POST/ - Create a new task',
        {
          tag: 'iDontWantToAddImaginaryTCNumbersSrySoIJustCopyPasteThis',
          annotation: {
            type: 'Test Case',
            description: '<Link to TC could be added here>',
          },
        },
        async ({ taskManagementApiClient }) => {
          const title = 'Test Title';
          const description = 'Test description';

          const response = await taskManagementApiClient.createTask(title, description);
          const responseBody = await response.json();
          expect(response.status()).toBe(201);
          expect(Number.isInteger(responseBody.data.id)).toBe(true);
          expect(responseBody.data.id).toBeGreaterThan(0);
          expect(responseBody.data.title).toBe(title);
          expect(responseBody.data.description).toBe(description);
          expect(responseBody.data.completed).toBe(false);
        },
      );

      test(
        'GET/ - Get a task by ID',
        {
          tag: 'iDontWantToAddImaginaryTCNumbersSrySoIJustCopyPasteThis',
          annotation: {
            type: 'Test Case',
            description: '<Link to TC could be added here>',
          },
        },
        async ({ taskManagementApiClient }) => {
          const title = 'Unique test title';
          const description = 'Unique test description';
          const postResponse = await taskManagementApiClient.createTask(title, description);
          const postResponseBody = await postResponse.json();

          const response = await taskManagementApiClient.getTaskById(postResponseBody.data.id);
          const responseBody = await response.json();
          expect(response.status()).toBe(200);
          expect(Number.isInteger(responseBody.data.id)).toBe(true);
          expect(responseBody.data.id).toBeGreaterThan(0);
          expect(responseBody.data.title).toBe(title);
          expect(responseBody.data.description).toBe(description);
          expect(responseBody.data.completed).toBe(false);
        },
      );

      test(
        'PUT/ - Update a task by ID',
        {
          tag: 'iDontWantToAddImaginaryTCNumbersSrySoIJustCopyPasteThis',
          annotation: {
            type: 'Test Case',
            description: '<Link to TC could be added here>',
          },
        },
        async ({ taskManagementApiClient }) => {
          const title = 'Test title';
          const description = 'Test description';
          const postResponse = await taskManagementApiClient.createTask(title, description);
          const postResponseBody = await postResponse.json();

          const updatedTitle = 'Updated test title';
          const updatedDescription = 'Updated test description';
          const updatedCompleted = true;
          const response = await taskManagementApiClient.updateTaskById(postResponseBody.data.id, {
            title: updatedTitle,
            description: updatedDescription,
            completed: updatedCompleted,
          });
          const responseBody = await response.json();
          expect(response.status()).toBe(200);

          expect(responseBody.data.title).toBe(updatedTitle);
          expect(responseBody.data.description).toBe(updatedDescription);
          expect(responseBody.data.completed).toBe(updatedCompleted);
        },
      );

      test(
        'DELETE/ - Delete a task by ID',
        {
          tag: 'iDontWantToAddImaginaryTCNumbersSrySoIJustCopyPasteThis',
          annotation: {
            type: 'Test Case',
            description: '<Link to TC could be added here>',
          },
        },
        async ({ taskManagementApiClient }) => {
          const title = 'Test title';
          const description = 'Test description';
          const postResponse = await taskManagementApiClient.createTask(title, description);
          const postResponseBody = await postResponse.json();

          const response = await taskManagementApiClient.deleteTaskById(postResponseBody.data.id);
          const responseBody = await response.json();
          expect(response.status()).toBe(200); // or a 204, depends on the API implementation
          expect(responseBody.data.message).toBe('Task deleted successfully'); // or empty body, again depends on the API implementation
        },
      );
    });

    test.describe('Negative Cases', () => {
      /* And more negative test cases can be added in the JSON, for example:
    - Empty body
    - Wrong type
    - Malformed JSON
    - Invalid field values (e.g., too long, invalid characters)
    - etc.
   It depends on the API. But I'm stopping here. For those cases the status code should stay 400 (except if the API designed different)
   And the messages are again custom messages, but they should provide some information about the error.
   I just wanted to show a data driven approach at least here, but could be used in other cases as well.
 */
      taskCreationNegativeCases.forEach((testCase) => {
        test(
          testCase.testTitle,
          {
            tag: testCase.tcId,
            annotation: {
              type: 'Test Case',
              description: testCase.tcLink,
            },
          },
          async ({ taskManagementApiClient }) => {
            const response = await taskManagementApiClient.createTask(
              testCase.payload.title,
              testCase.payload.description,
            );
            const responseBody = await response.json();

            expect(response.status()).toBe(testCase.expectedStatusCode);
            expect(responseBody.error).toBe(testCase.expectedError);
          },
        );
      });

      test(
        'GET/ - Get a task with non existing ID',
        {
          tag: 'iDontWantToAddImaginaryTCNumbersSrySoIJustCopyPasteThis',
          annotation: {
            type: 'Test Case',
            description: '<Link to TC could be added here>',
          },
        },
        async ({ taskManagementApiClient }) => {
          const invalidId = 999; // Assuming this ID does not exist
          const response = await taskManagementApiClient.getTaskById(invalidId);
          const responseBody = await response.json();
          expect(response.status()).toBe(404); // 404 is a common response for not found and normally if the devs follow the REST principles this is 404, but it always depends on the actual implementation
          expect(responseBody.error).toBe('Task not found'); // or another custom error message, again depends on the API implementation
        },
      );
      /* Here could go one more negative GET case when the task ID is invalid (e.g., a string instead of a number) and should return with a 400 and some kind of "invalid ID" message
           Followed by some negative PUT requests with invalid payload (missing fields, wrong types) all 400 status usually and some error message. One 404 if the ID is missing.
           And finally some negative DELETE requests with invalid ID (string instead of number) and non-existing ID (404) and some error message.
         */
    });

    test.describe('Unauthenticated Cases', () => {
      /* We could talk about not just unauthenticated but unauthorized cases as well, but I decided to keep it simplier
           (well... I already more than stricly the original task requested)
           But the option fixture and the request context could be modified to be prepared for both cases
         */
      test.use({ useAuth: false });

      test(
        'POST/ - Create a new task without authentication',
        {
          tag: 'iDontWantToAddImaginaryTCNumbersSrySoIJustCopyPasteThis',
          annotation: {
            type: 'Test Case',
            description: '<Link to TC could be added here>',
          },
        },
        async ({ taskManagementApiClient }) => {
          const title = 'Test Title';
          const description = 'Test description';

          const response = await taskManagementApiClient.createTask(title, description);
          const responseBody = await response.json();
          expect(response.status()).toBe(401); // 401 is a common response for unauthenticated requests
          expect(responseBody.error).toBe('Unauthenticated'); // or another custom error message
        },
      );

      // And here below could be more unauthenticated cases for GET, PUT, DELETE requests as well or use a data driven solution
    });
  },
);

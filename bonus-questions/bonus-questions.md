## Docker

Docker is a containerization platform where you can create containers. These containers are isolated units that you can configure (adding code, libraries, system tools, etc.). A container is lightweight, it's not like a virtual machine where the whole OS is virtualized, it uses the host OS kernel so you can start way faster and fewer resources.

With Docker, and running codes and setups in docker you can avoid the "It works on my machine" problem, because you can run the same container on any machine. <br>
It can be helpful when you want to make sure for example you run the tests in the same environment as your CI pipeline, or you want to run the tests in a different environment than your local machine (like a Linux container on a Windows machine) or if you want to deploy an application version in the same environment where you run the tests as well. <br>

Back when we used Selenium, I remember using the Selenium images, which had the Selenium server and the browsers pre-installed, so you could just run the container and start testing without any additional setup. <br>

### Example:
(Please note that to write down the Dockerfiles and the compose file I had to check one of my previously created files to see the syntax as it's not something that I'm doing often especially from scratch)

Let's imagine that we have an application and some UI tests against it in the same repository. <br>
In this case we could create 2 Dockerfiles, one for the application and one for the tests. <br>

The application Dockerfile could look something like this:
```dockerfile
FROM "some kind of image that is good for the app"
WORKDIR /where-the-app-is
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

And the tests Dockerfile could look something like this:
```dockerfile
FROM "some kind of playwright image that has the browsers pre-installed"
WORKDIR /where-the-tests-are
COPY package.json package-lock.json ./
RUN npm install
COPY . .
CMD ["npx", "test:ui"]
```

Then we could create a docker-compose file to run both containers, and make sure that the tests container will wait for the application container to be ready before starting the tests. <br>
The docker-compose file could look something like this:
```yaml
version: "I need to check it"
services:
  app:
    build:
      context: ./app
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
  tests:
    build:
      context: ./tests
      dockerfile: Dockerfile
    depends_on:
      - app
```

---

## JUnit + Selenium

I didn't touch Java code at least in the past 5 years, so without an extensive practice and googleing (or using AI) I couldn't provide a good example for it. <br>
But in general I'd just say that the tests could be implemented in a similar way as in the 2nd task where I used Playwright: <br>
1. AAA structure;
2. Using POM;
3. Isolating the tests;
4. Explicit waits instead of sleeps;

---

## CI integration

The way the tests could be integrated into a pipeline, depends on the environment, what kind of tests are we talking about, risks and preferences. <br>
For example, if we are talking about UI tests, then the pipeline should have a stage where the application is deployed locally, then the tests could be executed against it at the same stage. <br>
But it could happen that the application is deployed in a different, fully set up environment with its own feature endpoint, in which case the tests should be configured to run against that environment. <br>
And based on the changes we might want to run a full regression suite, or just a few tests that are related to the changes, or a smaller smoke or sanity suite just to make sure the application did not break entirely. <br>
And of course it could happen that not the application under test got changed but the tests themselves, and there might be no reason to run them after each push (for example the README.md got modified or the test environment is blocked for an 1 hour for a demo). <br>

Trying to sum-up, I'd say that the tests (or any quality gates) should be integrated into the pipeline in a way that makes sense and value for the project. <br>
During an application development, usually a sonar, linting, or unit tests are run against each push just to make sure that the pushed code satisfies the defined rules/standards <br>
After building and deploying the application somewhere, usually a smoke or sanity suite (API, UI, microservice specific) is run to make sure that the application is not broken entirely. <br>
But based on the demand and risk, a full regression suite could be run manually or automatically on a schedule (like nightly). <br>
And during a release process, usually a full regression suite is run to make sure that the application is not broken and the new features are working as expected. <br>

In case of test implementation after each commit again, a lint, sonar, etc., could run to ensure code quality before the tests are executed. <br>
But even in case of opening a test PR I'd might avoid running the tests, because:
1. The tests could be broken and the PR is not ready to be merged, so it would be a waste of resources to run them and even could mess up an environment, etc.;
2. If there is a lack of environment to use, and it might conflict with other tests or processes;

What I'm most familiar with currently is the GitHub Actions. Before that I used Bamboo CI extensively, and I also have some experience with Jenkins, Gitlab CI, and AWS CodePipeline. <br>
At least with the GitHub Actions and the Bamboo, I'm pretty sure that cross-repository triggers could be set up, so for example if a PR is opened in the application repository, it could trigger a workflow in the tests repository to run the tests against the application. <br>
But the easiest way to configure the runs is to keep the things that we want to run at the same place (but it might not be the best for the development)

### Examples:

[On Push](../.github/workflows/on-push.yml) <br>
[After Merge + On Demand](../.github/workflows/on-demand-and-after-merge.yml) <br>

In the examples above there is a workflow file (the on-push) that runs a simple lint after each push. It is caching the node_modules if the package-lock.json was not modified so the packages are not downloaded again and again. <br>
The other workflow (on-demand-and-after-merge) runs the lint (to make sure auto conflict resolve didn't break anything) and the UI tests after each merge to the main branch, and it can be triggered manually as well. <br>
The base URL can be changed (let's say we have to execute the tests against a feature endpoint) <br>
The secrets and variables are stored in the "TEST" environment. <br>
Downloading only the necessary browser for tests <br>
And showing a JUnit report as well not just the HTML report to have a sneak peak at least about the passed/failed tests. <br>

There are a few things that could be improved and done differently:
1. The on-demand execution could be a separated workflow file with only containing the test execution;
2. If there is a huge test suite, then the tests should be executed in a distributed way together and on multiple workers in parallel, then their blob report should be merged together;
3. The environment should be an option to choose from, not hardcoded in the workflow file;
4. There could be a gh-pages branch and besides the HTML report, we could have an always available test report portal with history and trend if allure reporting would be used with apeaceiris/actions-gh-pages@v3. It could be even separated for each branch, to have separate run history;
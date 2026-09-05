# Playwright Test Automation Framework

Test automation framework built with Playwright, TypeScript.

## Tech Stack

- Playwright + TypeScript
- Node.js 22+
- HTML reporter
- ESLint + Prettier
- dotenv

## Prerequisites

| Requirement | Minimum version | Notes                |
|-------------|-----------------|----------------------|
| Node.js     | 22              | `node --version`     |
| npm         | 10              | bundled with Node 22 |

---

## Setup

### 1. Install dependencies

```bash
npm ci
npx playwright install --with-deps
```

---

### 2. Create .env file

```bash
    cp .env.example .env
```

---

### 3. Set environment variables

Set the following environment variables in the `.env` file:

| Variable                        | Description                |
|---------------------------------|----------------------------|
| `BASE_URL`                      | Application under test URL |
| `USER_EMAIL`                    | Registered user email      |
| `USER_PASSWORD`  Start page URL | Registered user password   |

If you don't have a registered user, you can create one on the application under test.

## Running Tests

```bash
npm run test:ui
```

---

## Test Reports

```bash
npx playwright show-report
```
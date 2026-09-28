# Playwright Automation Assignment

## Overview

This project automates the checkout flow of the SauceDemo application using Playwright with JavaScript.

The test covers the complete flow from login to successful order confirmation. I have used the Page Object Model (POM) to keep the page actions separate from the test scenario and maintained the test data in a separate file.

## Test Flow

The automated test performs the following steps:

1. Login with the standard user credentials.
2. Verify the Products page.
3. Add the Sauce Labs Backpack to the cart.
4. Open the cart and verify the selected product.
5. Proceed to checkout.
6. Enter customer information.
7. Verify the product price, subtotal, tax, and total.
8. Complete the order.
9. Verify the successful order confirmation.

## Project Structure

```text
playwright-automation-assignment/
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
├── test-data/
│   └── checkoutData.js
├── tests/
│   └── checkout.spec.js
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md
```

## Prerequisites

- Node.js
- npm

## Setup

Install the project dependencies:

```bash
npm install
```

Install the Playwright browsers:

```bash
npx playwright install
```

## Run the Test

```bash
npx playwright test
```

To run the test in headed mode:

```bash
npx playwright test --headed
```

## HTML Report

After test execution, open the Playwright HTML report using:

```bash
npx playwright show-report
```

## Framework Approach

The framework follows the Page Object Model design pattern. Page locators and reusable actions are maintained in separate page classes, while the end-to-end test scenario is kept in the test file.

Test data is maintained separately, and Playwright's built-in assertions and auto-waiting are used instead of hard-coded waits.

## Windows PowerShell Note

If PowerShell blocks `npm` or `npx` due to the local execution policy, the Windows command wrappers can be used:

```powershell
npm.cmd install
npx.cmd playwright install
npx.cmd playwright test
npx.cmd playwright show-report
```
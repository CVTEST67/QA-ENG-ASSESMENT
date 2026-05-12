# QA Engineer Assessment - SauceDemo & API Testing

## Overview
This project demonstrates manual testing, API testing, and automation testing using Playwright for the SauceDemo web application and JSONPlaceholder API.

---

## Tools Used
- Playwright (Automation Testing)
- JavaScript
- GitHub Codespaces
- Browser Console (API Testing)

---

## Project Structure

manual-testing/
  - test-cases.md
  - bug-reports.md
  - screenshots/

api-testing/
  - api-report.md

automation/
  - saucedemo.spec.js

README.md

---

# Part 1: Manual Testing

Manual test cases were created and executed for the following features:
- Add to Cart
- View Cart
- Remove Item
- Checkout Process
- Negative Checkout Scenarios

Bug reports were documented where issues were found.

Screenshots were added for validation of test execution.

---

# Part 2: API Testing

API testing was performed using the JSONPlaceholder API:

Base URL:
https://jsonplaceholder.typicode.com

## Endpoints Tested:

### GET /users
- Retrieves all users
- Valid response: 200 OK

### GET /users/1
- Retrieves a specific user
- Valid response: 200 OK

### POST /posts
- Creates a new post
- Valid response: 201 Created

### PUT /posts/1
- Updates an existing post
- Valid response: 200 OK

---

## Edge Cases Covered:

- GET /users/9999 → handled invalid user request (404)
- POST /posts with empty body → API accepts request (mock API behavior)
- PUT /posts/9999 → invalid resource update behavior observed

---

## Note on API Testing
API testing was performed using browser console (fetch API) to send HTTP requests and validate responses.

---

# Part 3: Automation Testing

Automation was implemented using Playwright for the SauceDemo application.

## Automated Flow:
- Login with valid credentials
- Add product to cart
- Navigate to cart
- Proceed to checkout
- Fill customer details
- Complete purchase
- Validate success message

## How to Run Automation Tests:

```bash
npm install
npx playwright install
npx playwright test automation/

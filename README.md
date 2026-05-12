# QA Engineer Assessment 

## Overview
This project demonstrates manual testing, API testing, and automation testing for the SauceDemo web application and JSONPlaceholder API.

---

## Tools Used
- Playwright 
- GitHub Codespaces
- Browser DevTools Console (API Testing)

---

## Project Structure

Web Application Testing/
  - test-cases.md
  - bug-reports.md
  - screenshots/

api testing/
  - api-results.md

automation/
  - saucedemo.spec.js

README.md

---

# Part 1: Manual Testing

Manual test cases were created and executed for the SauceDemo application covering:

- Add to Cart
- View Cart Contents
- Remove Item from Cart
- Complete Checkout Process
- Negative Checkout Scenarios (empty fields, empty cart)

Bug reports were documented for any issues found.

Screenshots were included as evidence of execution.

---

# Part 2: API Testing

API testing was performed using the JSONPlaceholder API:

Base URL:
https://jsonplaceholder.typicode.com

## Endpoints Tested:

### GET /users
- Retrieves all users
- Expected: 200 OK
- Result: Pass

### GET /users/1
- Retrieves a single user
- Expected: 200 OK
- Result: Pass

### POST /posts
- Creates a new post with title, body, userId
- Expected: 201 Created
- Result: Pass

### PUT /posts/1
- Updates an existing post
- Expected: 200 OK
- Result: Pass

---

## Edge Cases Covered:

- GET /users/9999 → invalid user request (404 Not Found)
- POST /posts with empty body → request accepted (mock API behavior)
- PUT /posts/9999 → invalid resource update (error observed)

---

## Note on API Testing
API requests were executed using the browser DevTools Console using `fetch()` to validate responses, status codes, and edge case behavior.

---

# Part 3: Automation Testing

Automation was implemented using Playwright for the SauceDemo application.

## Automated Flow:
- Login with valid credentials
- Add product to cart
- Navigate to cart page
- Proceed to checkout
- Fill customer information
- Complete purchase
- Validate successful order confirmation

---

## How to Run Automation Tests

```bash
npm install
npx playwright install
npx playwright test automation/

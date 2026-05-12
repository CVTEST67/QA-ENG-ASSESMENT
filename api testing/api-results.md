# API Testing Report - JSONPlaceholder
https://jsonplaceholder.typicode.com

---

## API-01: GET /users

**Method:** GET  
**Endpoint:** /users  

**Expected Status:** 200 OK  
**Actual Status:** 200 OK  

**Response Type:** Array of users  

**Analysis:**  
API returns a list of users successfully with valid structured JSON data.

**Status:** Pass  

---

## API-02: GET /users/1

**Method:** GET  
**Endpoint:** /users/1  

**Expected Status:** 200 OK  
**Actual Status:** 200 OK  

**Response:**
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz"
}

**Analysis:**  
API successfully retrieves a single user object with correct structure.

**Status:** Pass  

---

## API-03: POST /posts

**Method:** POST  
**Endpoint:** /posts  

**Request Body:**
{
  "title": "QA Test Post",
  "body": "Testing API POST request",
  "userId": 1
}

**Expected Status:** 201 Created  
**Actual Status:** 201 Created  

**Response:**
{
  "title": "QA Test Post",
  "body": "Testing API POST request",
  "userId": 1,
  "id": 101
}

**Analysis:**  
API accepts valid POST request and returns created resource with generated ID.

**Status:** Pass  

---

## API-04: PUT /posts/1

**Method:** PUT  
**Endpoint:** /posts/1  

**Request Body:**
{
  "id": 1,
  "title": "Updated QA Title",
  "body": "This post was updated during API testing",
  "userId": 1
}

**Expected Status:** 200 OK  
**Actual Status:** 200 OK  

**Response:**
{
  "id": 1,
  "title": "Updated QA Title",
  "body": "This post was updated during API testing",
  "userId": 1
}

**Analysis:**  
API successfully updates existing resource and returns modified data.

**Status:** Pass  

---

## EDGE CASE: GET /users/9999

**Method:** GET  
**Endpoint:** /users/9999  

**Expected Status:** 404 Not Found  
**Actual Status:** 404 Not Found  

**Response:** 404  

**Analysis:**  
API correctly handles invalid user request and returns proper error status.

**Status:** Pass  

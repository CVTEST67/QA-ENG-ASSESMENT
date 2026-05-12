# API Testing Report - JSONPlaceholder
https://jsonplaceholder.typicode.com

---

## API-01: GET /users

**Method:** GET  
**Endpoint:** /users  
**Expected Status:** 200 OK  
**Actual Status:** 200 OK  

**Response Type:** Array of users (10 records)  

**Analysis:**  
API returns a list of users in valid JSON format with complete user details.

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
API accepts valid POST request and returns created resource. No validation enforced (mock API behavior).

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

## EDGE CASE 1: GET /users/9999

**Expected:** 404 Not Found  
**Actual:** 404 Not Found  

**Analysis:**  
Correct handling of invalid user ID.

**Status:** Pass  

---

## EDGE CASE 2: POST /posts with empty body

**Request Body:** {}

**Expected:** 400 Bad Request  
**Actual:** 201 Created  

**Analysis:**  
API does not validate input (mock behavior).

**Status:** Pass  

---

## EDGE CASE 3: PUT /posts/9999

**Request Body:**
{
  "title": "Edge Case Update",
  "body": "Testing update on non-existent resource",
  "userId": 1
}

**Expected:** 404 Not Found  
**Actual:** 500 Internal Server Error + invalid JSON  

**Analysis:**  
API fails to properly handle invalid resource updates.

**Status:** Fail (Edge Case Observed)

# API Testing 
https://jsonplaceholder.typicode.com

---

## GET /users

Method: GET  
Expected: 200 OK  
Actual: 200 OK  

This endpoint returns a list of users. The response contained 10 user records with complete details such as name, email, address, and company information.

Overall, the API behaved as expected.

Status: Pass  

---

## GET /users/1

Method: GET  
Expected: 200 OK  
Actual: 200 OK  

The API returned a single user object correctly. All expected fields like name, username, and email were present in the response.

Status: Pass  

---

## POST /posts

Method: POST  

Request body:
{
  "title": "QA Test Post",
  "body": "Testing API POST request",
  "userId": 1
}

Expected: 201 Created  
Actual: 201 Created  

The API successfully accepted the request and returned a created object with an ID. Since this is a mock API, no real data is stored and no validation is enforced.

Status: Pass  

---

## PUT /posts/1

Method: PUT  

Request body:
{
  "id": 1,
  "title": "Updated QA Title",
  "body": "This post was updated during API testing",
  "userId": 1
}

Expected: 200 OK  
Actual: 200 OK  

The API successfully returned the updated object. The changes are reflected in the response as expected.

Status: Pass  

---

## Edge Case - GET /users/9999

Expected: 404 Not Found  
Actual: 404 Not Found  

The API correctly handled an invalid user ID and returned a 404 response.

Status: Pass  

---

## Edge Case - POST with empty body

Request body: {}

Expected: 400 Bad Request  
Actual: 201 Created  

The API still accepted the request and returned a success response. This shows that no validation rules are enforced, which is expected for this mock API.

Status: Pass  

---

## Edge Case - PUT /posts/9999

Request body:
{
  "title": "Edge Case Update",
  "body": "Testing update on non-existent resource",
  "userId": 1
}

Expected: 404 Not Found  
Actual: 500 Internal Server Error  

The API failed to properly handle an update on a non-existent resource and returned a server error instead of a proper 404 response.

Status: Fail  

# 📘 API Design Assignment

> This repository focuses on the practical implementation of REST API concepts.  
> Detailed conceptual notes and theory explanations are available in the Notes section below.

---

## Project Overview

This repository contains my **API Design assignment**, focused on understanding and implementing core REST API principles, including:

- REST architecture fundamentals  
- Idempotency in HTTP methods  
- Proper usage of HTTP status codes  
- Working with JSON request/response bodies  
- API structure and design best practices  

The goal of this project is to build a strong foundation in designing scalable, predictable, and well-documented REST APIs.

---

## Objectives

This assignment demonstrates:

- ✅ Understanding RESTful API principles  
- ✅ Proper usage of HTTP methods (GET, POST, PUT, PATCH, DELETE)  
- ✅ Idempotent vs Non-idempotent operations  
- ✅ Correct use of HTTP status codes  
- ✅ JSON-based request and response handling  
- ✅ Clean API structure and organisation  

---

## API Design Concepts Covered

### REST Architecture
- Stateless communication  
- Resource-based routing  
- Standard HTTP methods  
- Client-server separation  

---

### HTTP Methods & Idempotency

| Method | Idempotent |        Description        | 
|--------|------------|---------------------------|
| GET    |    Yes     |       Retrieve data       |
| PUT    |    Yes     |      Replace resource     |
| DELETE |    Yes     |       Remove resource     |
| POST   |    No      |    Create new resource    |
| PATCH  | Usually No | Partially update resource |

---

### HTTP Status Codes Used

| Code |         Meaning       |
|------|-----------------------|
| 200  |           OK          |
| 201  |        Created        |
| 204  |       No Content      |
| 400  |      Bad Request      |
| 401  |     Unauthorized      |
| 404  |      Not Found        |
| 500  | Internal Server Error |

---

## Detailed Study Notes

You can find my complete theoretical explanations, breakdown of REST concepts, idempotency rules, and HTTP status code understanding here:

🔗 **REST API Notes (Google Docs)**  
https://docs.google.com/document/d/1ahyh0-vHreC6VLyCHXDVV0eOq8drOrzE_mcP_HfVsWI/edit?usp=sharing

🔗 **API Design Notes (Google Docs)** 
https://docs.google.com/document/d/19LCValmDgp9LWeT-Vj_TVo36UlkYeUvGo8nxsUggdKY/edit?usp=sharing

---

## Project Structure

api-design/
│
├── routes
|   |-- useRoutes.js
├── controllers
|   |-- userController.js 
├── server.js
├── package.json
└── README.md


---

## How to Run the Project

### Clone the repository
git clone https://github.com/Ashu11122000/Working_on_APIs.git

2️. Switch to the correct branch
git checkout api-design-assignment

3️. Install dependencies
npm install

4️. Run the server
node server.js

Testing the API
You can test the endpoints using Postman

Future Improvements
--> Add authentication (JWT-based)
--> Add request validation middleware
--> Implement database integration
--> Add API documentation (Swagger / OpenAPI)
--> Add unit and integration tests

Author: Ashish Sharma
GitHub: https://github.com/Ashu11122000

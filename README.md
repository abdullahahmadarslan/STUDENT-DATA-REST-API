# Student Data REST API

This is a simple RESTful API for managing student data, built using Node.js, Express, and MongoDB. The API supports CRUD (Create, Read, Update, Delete) operations for student records.

## Features

- **Create** a new student record.
- **Read** all student records or a specific student record by ID.
- **Update** an existing student record.
- **Delete** a student record by ID.
- Input validation for fields like email and phone number.

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose ORM)
- Validator for input validation

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/students-reg-api.git
   cd students-reg-api
2. **Install dependencies::**

   ```bash
   npm install
3. **Set up MongoDB:**
- Make sure MongoDB is running locally on **mongodb://127.0.0.1:27017**. If you are using a different MongoDB connection string, update the connection URL in the **db/connection.js** file.

4. **Run the server:**
   
   ```bash
   npm start


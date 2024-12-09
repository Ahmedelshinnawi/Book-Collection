# Book Collection

A Node.js-based application for managing a collection of books. It features a user-friendly interface built with EJS templates and provides functionalities to Create, Read, Update, and Delete books.


## Features

- **User Registration and Login**: Users can create an account and log in.
- **JWT-based Authentication**: Secure API routes using JSON Web Tokens (JWT). Only authenticated users can access their data.
- **CRUD Operations for Books**: 
  - Create: Add new books to the collection.
  - Read: View details of books in the collection.
  - Update: Edit book information (title, author, etc.).
  - Delete: Remove books from the collection.

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express**: Web framework for building APIs.
- **JWT (JSON Web Tokens)**: Used for secure authentication and route protection.
- **Database**: Stores user and book data (MongoDB).
- **EJS**: For the User Interface

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB 

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ahmedelshinnawi/Book-Collection.git
   
3. Navigate to the project directory
   ```
   cd Book-Collection

4. Install dependencies:
   ```bash
   npm install
   
3. Setup Database
    **Sign up for MongoDB free database cluster:**  [MongoDB](https://www.mongodb.com/)
  
4. Set up environment variables:
   **Create a .env file to store your credentials. Example below:**
     ```
   MONGODB_URI=mongodb+srv://<username>:<password>@clusterName.xxxxxxx.mongodb.net/blog
    JWT_SECRET=MySecretBlog
     ```
5. Start the server:
    ```bash
    npm run dev
    
## Directory Structure

- **`server/`**: Contains backend logic and route handling for the application.
- **`public/`**: Includes static assets such as CSS, JavaScript, and images used in the frontend.
- **`views/`**: Holds EJS templates for rendering the user interface.


## API Endpoints:
### Authentication
- **`POST`** /register: Register a new user.
- **`POST`** /admin: Authenticate and get a JWT token.

### Collections (Protected Routes)
- **`GET`** /dashboard: Get a list of all posts for the authenticated user.
- **`GET`** /add-post/:id: View details of a specific post.
- **`POST`** /add-post: Add a new post.
- **`PUT`** /edit-post/:id: Update a specific post's information.
- **`DELETE`** /delete-post/:id: Remove a post from the database





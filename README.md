# Final_Project_CSI-2024

## Blogging Platform by Anupam

This project is a blog platform where users can sign up, create, edit, and delete blog posts. It includes features like categorization, search, and user authentication.

## Features

1. **User Authentication**
   - Users can sign up, and log in.
   - Secure authentication using JWT tokens.

2. **Blog Post Management**
   - Create new blog posts.
   - Edit existing blog posts.
   - Delete blog posts.
   - View all blog posts or a specific post by ID.

3. **Categorization**
   - Categorize blog posts for better organization.
   - View posts by category.

4. **Search**
   - Search for blog posts by title or content.

## Technologies Used

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **JSON Web Tokens (JWT)**
- **dotenv** (for environment variables)

## Installation

To run this application locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anupam-03/Final_Project_CSI-2024.git
   cd Final_Project_CSI-2024
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```
     MONGODB_URI=<your_mongodb_connection_string>
     JWT_SECRET=<your_jwt_secret>
     PORT=<your_port_number>
     ```

4. **Start the application:**
   ```bash
   npm start
   ```

5. **Open your web browser or API client and visit:**
   ```
   http://localhost:<your_port_number>
   ```

## API Working Demo

### User Endpoints

- **Register a new user**
  - **POST** `/register`
  - Request body:
    ```json
    {
    "name": "Anupam2024",
    "email": "anupam@example.com",
    "password": "anupam2024"
    }
    ```
  ![image](https://github.com/user-attachments/assets/398dfbb8-0a08-4876-ac11-0b1bc4de32f9)


- **User login**
  - **POST** `/login`
  - Request body:
    ```json
    {
    "email": "anupam@example.com",
    "password": "anupam2024"
    }
    ```
  ![image](https://github.com/user-attachments/assets/1fdb87e4-cc7c-4e58-ac59-eabc0c5ba99c)


### Blog Post Endpoints

- **Create a new blog post**
  - **POST** `/posts`
  - Requires a valid JWT token.
  - Request body:
    ```json
    {
    "title": "Blogging Platform",
    "content": "CSI-2024 : This is a Incrediable journey of leaning modern tech, interactions with industry exports and getting exprience from hand on projects.",
    "category": "Internship"
    }
    ```
  ![image](https://github.com/user-attachments/assets/acb90e18-3efa-4f0f-8870-b6ed10f9e084)



- **Edit an existing blog post**
  - **PUT** `/posts/:id`
  - Requires a valid JWT token.
  - Request body (example):
    ```json
    {
    "title": "Updated Blogging Platform",
    "content": "CSI-2024 : This is a Incrediable journey of leaning modern tech, interactions with industry exports and getting exprience from hand on projects.",
    "category": "Internship"
    }
    ```

  ![image](https://github.com/user-attachments/assets/70aa2d2d-eb28-48e2-8e5b-ade9928121a0)

- **Delete a blog post**
  - **DELETE** `/posts/:id`
  - Requires a valid JWT token.
 
  ![image](https://github.com/user-attachments/assets/90bc25f0-f93e-4002-b7ca-0ebf28d6d27b)


- **View all blog posts**
  - **GET** `/posts`
 
  ![image](https://github.com/user-attachments/assets/8f705e4b-3550-4f03-986f-351db2b0be2d)


- **View a specific blog post by ID**
  - **GET** `/posts/:id`
 
  ![image](https://github.com/user-attachments/assets/29d99664-deab-4b4b-a4fc-4f621f160648)


- **Search blog posts**
  - **GET** `/posts/search`
  - Query parameters:
    - `category`
    - `title` (optional)
    - `content` (optional)
   
  ![image](https://github.com/user-attachments/assets/f96b727f-c802-4304-8351-074213f35c74)


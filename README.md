# Project Name

## Introduction

Creating an aviation app for students to Learn. It is built using React for the front-end and Python Flask for the back-end.

## Key Features

- Browse thorugh different Procedural Training.
- Browse through Recent Procedures
- Get more information on seleted Procedures and the path of completion

## Getting Started

### Prerequisites

- **Node.js and npm**: Download and install from [Node.js](https://nodejs.org/).
- **Python 3.x**: Download and install from [Python.org](https://www.python.org/downloads/).
- **Flask**: Install using pip (Python package manager).

### Installation

#### 1. Set up the backend

1. **Install Python 3.x**:
    - Download and install Python 3.x from [Python.org](https://www.python.org/downloads/).

2. **Set up Flask**:
    - Open a terminal (or command prompt on Windows).
    - Install Flask:
      ```bash
      pip install Flask
      ```

3. **Set up the backend environment**:
    - Navigate to the backend directory:
      ```bash
      cd backend
      ```

    - Create and activate a virtual environment:
      ```bash
      python3 -m venv venv
      source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
      ```

    - Install the required Python packages (Flask):
      ```bash
      pip install Flask
      ```

4. **Run the Flask application**:
    ```bash
    flask run
    ```

#### 2. Set up the frontend

1. **Install Node.js and npm**:
    - Download and install Node.js (which includes npm) from [Node.js](https://nodejs.org/).

2. **Set up the frontend environment**:
    - Navigate to the frontend directory:
      ```bash
      cd frontend
      ```

    - Install the necessary npm packages:
      ```bash
      npm install
      ```

3. **Start the frontend application**:
    ```bash
    npm start
    ```

## Usage

1. Ensure the backend is running:
    ```bash
    cd backend
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    flask run
    python src/pages/App.py

    ```

2. Ensure the frontend is running:
    ```bash
    cd frontend
    npm start
    ```

3. Open your browser and go to `http://localhost:3000` to access the application if it doesnt open automatically

# API Documentation

## Base URL

http://127.0.0.1:5000/api


### 1. Get All Courses

- **Endpoint:** `/api/courses`
- **Method:** `GET`
- **Description:** Fetches the list of all courses.
- **Response:**
  - **Status:** 200 OK
  - **Body:** JSON array of courses

### 2. Get All Procedures

- **Endpoint:** `/api/procedures`
- **Method:** `GET`
- **Description:** Fetches the list of all procedures with 3 or fewer stars.
- **Response:**
  - **Status:** 200 OK
  - **Body:** JSON array of procedures

### 3. Get Procedure by ID

- **Endpoint:** `/api/procedures/<int:id>`
- **Method:** `GET`
- **Description:** Fetches the details of a specific procedure by its ID.
- **URL Parameters:**
  - **id:** The ID of the procedure to fetch.
- **Response:**
  - **Status:** 200 OK if the procedure is found
  - **Status:** 404 NOT FOUND if the procedure is not found
   - **Body:** JSON array of procedures

# Results
The Side Bar to view all available option, kepth all other pages balcnk except for My Account:

![Screenshot 2024-06-02 133449](https://github.com/vedantipawar/Training-Aviation/assets/51786206/cbc8df3c-2dd1-4b31-a387-278835e51dba)

**My Account Page**:
- The completion percentage, the title and subheading are all being pulled via Flask from the backend.
- Date is dynamic, insycn with Real-Time Date and Time.
- Recent Procedures consists of onnly those cards who have stars less than 3.

  
![Screenshot 2024-06-02 133506](https://github.com/vedantipawar/Training-Aviation/assets/51786206/9eb1fded-fc91-4837-8009-7e05f8fd2c54)

- The Procedural Trainer is a slider and can easily be scrolled.

![Screenshot 2024-06-02 133522](https://github.com/vedantipawar/Training-Aviation/assets/51786206/a70a56b0-d49c-4bce-a066-08af07db851f)

- The Recent Procedures only reders the card based on the id, so not all content is parsed with may reduce latency. You may not the left bottom section where id is being used ot get the required procedure which inturn redirects to a page with only that procedure information.

![Screenshot 2024-06-02 133545](https://github.com/vedantipawar/Training-Aviation/assets/51786206/97f74983-395f-439b-865d-d92fbc8d2e36)
![Screenshot 2024-06-02 133555](https://github.com/vedantipawar/Training-Aviation/assets/51786206/d761a937-e46b-43c6-bff6-f3dc7a206e02)

**Recent Procedures Page:**

![Screenshot 2024-06-02 133642](https://github.com/vedantipawar/Training-Aviation/assets/51786206/24064a03-079b-4b92-9911-d77ade6b472e)

- Upon clicking on any of the red buttons(active) it raises up a bit.
- And upon clicking on the hovered button, the information related to it can be seen on right

![Screenshot 2024-06-02 133718](https://github.com/vedantipawar/Training-Aviation/assets/51786206/3a515b06-a1ab-4899-acb8-010a7100ea32)

- OnClick option has been disabled for any procedures that donot have an active state thus preventing any show of information about it.

  ![Screenshot 2024-06-02 133754](https://github.com/vedantipawar/Training-Aviation/assets/51786206/c6a870e2-24f5-42ad-974e-ba22b5ab5466)

- Finally, upon clicking on start we are redirected to anew page which is blank for now.
- 
- ![image](https://github.com/vedantipawar/Training-Aviation/assets/51786206/51c338ae-b4c3-46b7-b584-5f11206b94b9)



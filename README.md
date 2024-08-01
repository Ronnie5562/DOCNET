# DOCNET
An Advanced Telemedicine Application built with Django and React/Typescript

# Project Setup

This project contains three main components: `docnet_backend`, `docnet_frontend`, and `docnet_website`. The backend is built with Django, while the frontends are built with React. Follow the steps below to set up and run the project locally.

## Prerequisites

Ensure you have the following installed on your machine:

- Python 3.x
- Node.js and npm
- PostgreSQL `(optional)`

## Cloning the Repository

1. **Clone the project locally**: Open a terminal and clone the repository:

    ```bash
    git clone https://github.com/Ronnie5562/DOCNET.git
    ```

2. **Navigate to the Project Directory**:
   Change into the project directory:

    ```bash
    cd DOCNET
    ```

### Setting Up the Backend (docnet_backend)

1. **Navigate to the Backend Directory**:
    Open a Terminal for the Backend and paste this command

    ```bash
    cd docnet_backend
    ```

2. **Create a Virtual Environment**:
   Open your terminal and navigate to where you clone the project to:

   ```bash
   python -m venv myvenv
   ```

   Replace `myvenv` with the name you want for your virtual environment.

3. **Activate the Virtual Environment**:
   - On Windows:

     ```bash
     myvenv\Scripts\activate
     ```

   - On macOS and Linux:

     ```bash
     source myvenv/bin/activate
     ```

4. **Install Dependencies**:
   Ensure you have a `requirements.txt` file in your project directory. Then, install the dependencies:

   ```bash
   pip install -r requirements.txt
   ```

5. **Create Enviroment Variables**:
    Copy the content of `.env.sample` file, create a new `.env` file and paste what you copied inside this file.
    Then, change the `xxxxxxxxxx` you find in the file with your real credentials.
    if you plan to use a local database, you can leave out the `NEON DATABASE CREDENTIALS` section in the `.env` file.
    Also specify if you want to use the default detabase by giving `USE_DEFAULT_DATABASE` a value of `True`/`False`

6. **Apply Migrations**:
   Set up the initial database by running migrations:

   ```bash
   python manage.py migrate
   ```

7. **Create a Superuser (Optional)**:
   If you want to access the Django admin site, create a superuser:

   ```bash
   python manage.py createsuperuser
   ```

   Then, visit `http://localhost:8000/admin` and use the credentials your used in creating you superuser to login here.

8. **Run the Development Server**:
   Start the development server to see your project in action:

   ```bash
   python manage.py runserver
   ```

   By default, the server runs at `http://localhost:8000/`.


#### Additional Tips

- **Updating Dependencies**:
  If you need to update your dependencies or add new ones, you can use `pip` and then update your `requirements.txt` file:

  ```bash
  pip freeze > requirements.txt
  ```

- **Version Control**:
  Ensure your project is under version control (e.g., using Git) to manage changes and collaborate with others.

These steps should help you get started with docnet. Let's go to the frontend


### Setting Up the Frontend (docnet_frontend)

1. **Navigate to the Frontend Directory**
   Open a new Terminal for the Frontend and paste this command

    ```bash
    cd docnet_frontend
    ```

2. **Install Dependencies**:
    Install the dependencies required to run the frontend
    ```bash
    npm install
    ```

3. **Run the Development Server**:
    ```bash
    npm run dev
    ```

    By default, the server runs at `http://localhost:5173/`.


### Setting Up the Langing Page (docnet_website)

1. **Navigate to the Website Directory**
   Open a new Terminal for the Website and paste this command

    ```bash
    cd docnet_website
    ```

2. **Install Dependencies**:
    Install the dependencies required to run the website

    ```bash
    npm install
    ```

3. **Run the Development Server**:

    ```bash
    npm run dev
    ```

    By default, the server runs at `http://localhost:5174/`.

## Accessing the Application
- **Website**: The website will be running at <http://localhost:5174>.
- **Backend**: The backend server will be running at <http://localhost:8000>.
- **Frontend**: The frontend application will be running at <http://localhost:5173>.

## Admin Panel:
- **Admin**: You can login to the admin panel from <http://localhost:8000/admin>

## API DOCUMENTATIONS:

- **Swagger API**: To test the API <http://localhost:8000/api/docs/swagger>
- **Redoc API**: To have a graps of how the API works <http://localhost:8000/api/docs/redoc>


# Author

## [`Abimbola Ronald`](https://www.linkedin.com/in/abimbola-ronald-977299224/)

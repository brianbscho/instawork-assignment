# Instawork Full-stack take-home assignment

## Instruction to Build and Run

This guide provides step-by-step instructions to set up and run the project.

### Backend

#### 1. Set Up a Virtual Environment (Recommended)

It is recommended to use a virtual environment to isolate your Python dependencies.

1. Navigate to the `backend` directory:

```
cd backend
```

2. Create a virtual environment:

```
python -m venv venv
# or, for the different python version,
python3 -m venv venv
```

3. Activate the virtual environment:

- Linux/macOS:

```
source venv/bin/activate
```

- Windows:

```
venv\Scripts\activate
```

#### 2. Install Dependencies

Once the virtual environment is activated, install the required Python packages:

```
pip install Django djangorestframework django-cors-headers python-decouple
```

If needed, refer to the official documentation of these libraries for more details:

- [Django](https://www.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [Django CORS Headers](https://pypi.org/project/django-cors-headers/)
- [Python Decouple](https://pypi.org/project/python-decouple/)

#### 3. Apply Database Migrations

Prepare the database by applying migrations:

```
cd server
python manage.py migrate
```

#### 4. Set Environment Variables

Create a `.env` file in the root of the `server` directory, same level with `manage.py`, and add the following environment variable, with your choice of secure secret key:

```
SECRET_KEY=your-secret-key
```

#### 5. Run the Server

Start the development server:

```
python manage.py runserver
```

Once the server is running, you can visit [http://127.0.0.1:8000/](http://127.0.0.1:8000/) to see the backend server working!

### Frontend

#### 1. Install Dependencies

Navigate to the `frontend` directory and install required npm packages:

```
cd frontend
npm install
```

#### 2. Set Environment Variables

Create a `.env` file in the root of the `frontend` directory and add the following environment variable:

```
NEXT_PUBLIC_API_ENDPOINT=http://127.0.0.1:8000
```

- If you are using a different backend URL or port, replace http://127.0.0.1:8000 with your actual backend endpoint.

#### 3. Run the Server

```
npm run dev
```

By default, the frontend will be served at [http://localhost:3000/](http://localhost:3000/). Actual port can be different if port 3000 is in use. Please check the terminal output for the actual URL in this case.

# 🎬 Movie Recommendation System

A full-stack Movie Recommendation System built using **React.js**, **Tailwind CSS**, **Django REST Framework**, and **Neo4j (CognoDB)**.

Users can:
- View all movies
- View movie details
- Create users
- Like movies
- Get movie recommendations based on their interests

---

# 🚀 Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM

## Backend
- Python
- Django
- Django REST Framework

## Database
- Neo4j (CognoDB)
- Cypher Query Language

---

# 📂 Project Structure

MovieRecommendation/
│
├── Backend/
│ ├── api/
│ ├── settings.py
│ ├── urls.py
│ └── database.py
│
├── Frontend/
│ ├── src/
│ │ ├── Components/
│ │ ├── Pages/
│ │ ├── services/
│ │ ├── App.jsx
│ │ └── main.jsx
│
└── README.md

---

# ✨ Features

- Movie Listing
- Movie Details
- User Creation
- Like Movies
- Movie Recommendation
- Responsive UI
- REST APIs
- Graph Database Integration

---

# 📌 API Endpoints

## Get Movies

GET

/api/movies/

---

## Movie Details

GET

/api/movies/<movie_id>/

---

## Create User

POST

/api/users/

Request

{
"id":"U001",
"name":"Sreedhar"
}

---

## Like Movie

POST

/api/movies/<movie_id>/like/

Request

{
"user_id":"U001"
}

---

## Recommendation

GET

/api/recommendations/U001/

---

# 🛠 Installation

## Clone Repository

git clone https://github.com/yourusername/Movie-Recommendation-System.git

cd Movie-Recommendation-System

---

## Backend Setup

cd Backend

python -m venv env

env\Scripts\activate

pip install -r requirements.txt

python manage.py runserver

---

## Frontend Setup

cd Frontend

npm install

npm run dev

---

# 🗄 Database

This project uses Neo4j Graph Database hosted on CognoDB Cloud.

Nodes

- Movie
- User
- Genre
- Actor

Relationships

User → LIKES → Movie

Movie → BELONGS_TO → Genre

Actor → ACTED_IN → Movie

---

# 🧠 Recommendation Logic

The recommendation engine works using graph traversal.

1. Find movies liked by the user.
2. Find genres of those movies.
3. Find other movies in the same genres.
4. Exclude already liked movies.
5. Return movies sorted by rating.

---

# 📸 Screenshots

Add screenshots here

Home Page

Movie Details

Recommendation Page

Create User

---

# 👨‍💻 Author

Sreedhar Royals

Python Full Stack Developer

LinkedIn:
(Add your LinkedIn URL)

GitHub:
(Add your GitHub URL)

---

# ⭐ Future Enhancements

Authentication

Movie Posters

Search

Pagination

Reviews

Watchlist

Docker Deployment

JWT Authentication

Admin Dashboard

---

# 📜 License

This project is developed for learning purposes.
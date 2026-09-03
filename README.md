# 🎬 Movie Search App

A modern and responsive movie search web application built with **React.js** that allows users to search for movies, explore results, and view detailed information about individual movies.

The application uses a movie API to fetch real-time movie data and provides a clean, user-friendly interface for discovering movies.

## 🚀 Live Demo

🔗 [View Live Demo](https://cinsearch-website-ten.vercel.app/)

## 📸 Preview

![Movie Search App](./public/preview.png)

## ✨ Features

- 🔍 Search movies by title
- 🎬 Display movies in a responsive grid
- 🖼️ Movie posters with fallback images
- ⭐ Display movie ratings and basic information
- 📄 Dedicated movie details page
- 🔗 Client-side navigation using React Router
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎨 Clean and modern UI
- ❌ Handles movies with unavailable poster images

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React.js | Building the user interface |
| Vite | Development and build tool |
| JavaScript | Application logic |
| React Router | Page navigation and routing |
| Tailwind CSS | Styling and responsive design |
| REST API | Fetching movie data |
| Git & GitHub | Version control |

## 📂 Project Structure

```text
movie-search/
│
├── public/
│   └── image.png
│
├── src/
│   ├── components/
│   │   ├── MovieCard/
│   │   ├── MovieGrid/
│   │   └── Navbar/
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   └── Home.jsx
│   │   │
│   │   └── MovieDetails/
│   │       └── MovieDetails.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
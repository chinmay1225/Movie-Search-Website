# 🎬 CineSearch

CineSearch is a responsive movie search web application built with React. It allows users to search for movies, view detailed movie information, and save their favourite movies for later.

## 🚀 Live Demo

[Live Demo](https://cinsearch-website-ten.vercel.app/)

## 📸 Features

- 🔍 Search movies using the OMDb API
- 🎬 View detailed information about movies
- ❤️ Add and remove movies from favourites
- 💾 Save favourites using browser localStorage
- 🔄 Restore the last searched movie after refreshing
- 🧭 Client-side navigation using React Router
- ⬅️ Back navigation from movie details
- 🖼️ Fallback image for unavailable movie posters
- ⏳ Loading states
- ⚠️ Error handling
- 📱 Responsive design for different screen sizes
- 🔢 Display favourite movie count in the navbar

## 🛠️ Tech Stack

- React
- JavaScript
- Vite
- React Router DOM
- Tailwind CSS
- OMDb API
- Lucide React
- Browser LocalStorage

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── Layout.jsx
│   ├── MovieCard.jsx
│   ├── MovieGrid.jsx
│   ├── Navbar.jsx
│   └── SearchBar.jsx
│
├── pages/
│   ├── Home/
│   │   └── Home.jsx
│   │
│   ├── MovieDetails/
│   │   └── MovieDetails.jsx
│   │
│   └── Favourites/
│       └── Favourites.jsx
│
├── services/
│   └── movieApi.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx

⚙️ Getting Started

1. Clone the repository
git clone https://github.com/chinmay1225/Movie-Search-Website.git

2. Navigate to the project
cd CineSearch

3. Install dependencies
npm install

4. Create environment variables

Create a .env file in the root directory:

VITE_OMDB_API_KEY=your_omdb_api_key

5. Start the development server
npm run dev

The application will run locally using Vite.

🔑 OMDb API

CineSearch uses the OMDb API to retrieve movie information.

You need an OMDb API key to run the project.

The API key is stored in an environment variable and should not be committed to GitHub.

💾 Local Storage

CineSearch uses browser localStorage to persist:

Favourite movies
Last searched movie query

This allows favourites and the previous search to remain available after refreshing the browser.

🧠 Concepts Practiced

This project helped me practice:

React components
Props
State management
useState
useEffect
React Router
Dynamic routing
useParams
useNavigate
API integration
fetch
Async/Await
Error handling
Conditional rendering
LocalStorage
Reusable components
Responsive design
Tailwind CSS
Environment variables
🔮 Future Improvements

Some features that could be added in the future:

🎭 Movie genre filters
📄 Pagination
🔎 Search suggestions
👤 User authentication
☁️ Backend database for favourites
⭐ User ratings
🎞️ Watchlist
🌙 Light/Dark theme
📊 More movie statistics
👨‍💻 Author

Chinmay Patil

Computer Engineering Student

⭐ Acknowledgements
OMDb API for movie data
React documentation
React Router documentation
Tailwind CSS documentation

⭐ If you like this project, consider giving the repository a star!
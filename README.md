# Ugo Mein Unterricht - Frontend

A responsive movie search interface built with React, Vite, TypeScript, Tailwind CSS, and React Query. This frontend application connects to the NestJS backend to display paginated, debounced search results for movies fetched from the OMDB API.


## Overview

The Ugo Mein Unterricht Frontend provides a clean and modern interface for searching movies. It leverages:
- **React with Vite** for fast development and hot module replacement.
- **TypeScript** for type safety and enhanced developer experience.
- **Tailwind CSS** for responsive, utility-first styling.
- **React Query** to efficiently handle data fetching, caching, and pagination.
- **Debounced Input** to reduce unnecessary API requests.

The application displays movies in a responsive grid layout, making it mobile-friendly and visually appealing.

---

## Features

- **Responsive Design:** Automatically adjusts from a single column on mobile devices to a multi-column grid on larger screens.
- **Debounced Search:** Prevents excessive network calls by waiting until the user stops typing.
- **Paginated Results:** Supports infinite scrolling or “Load More” functionality.
- **Modern Styling:** Uses Tailwind CSS to implement smooth transitions, hover effects, and a polished UI.
- **Error Handling:** Displays user-friendly error messages when the backend or network fails.

---

## Architecture

     +-------------------------+
     |      Backend API        |
     | (NestJS, MongoDB, Cache)|
     +------------+------------+
                  |
                  |  REST API (paginated search)
                  |
     +------------v-------------------+
     |    Frontend (React)            |
     |  (Vite, TypeScript, Tailwind)  |
     +--------------------------------+

- **Frontend:**  
  Sends search queries to the backend and displays movie data in a grid. Uses React Query to handle asynchronous data fetching and caching.
- **Backend:**  
  Exposes a paginated search API that the frontend consumes.

---

## Prerequisites

- **Node.js** (v20 or later recommended)
- **npm** or **yarn** (package manager)



### Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/Ugo-Meinunterricht-Frontend.git
   cd Ugo-Meinunterricht-Frontend


Install dependencies:

```dotenv
npm install or yarn install
```

Create a `.env` file at the project root (this file is used by both Docker and local setups):

```dotenv
VITE_API_BASE_URL=backend-endpoint-here
```

To run the project use:
```
  npm run dev
```
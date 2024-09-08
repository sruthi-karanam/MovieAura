# MovieAura

## Overview

MovieAura is a movie booking system that allows users to browse movies, view theatre details, check showtimes, and make reservations. It also features an admin dashboard for managing movies, theatres, showtimes, reservations, and users.

## Project Structure

The project is divided into three main parts:

1. **Frontend**: User-facing application built with React.js.
2. **Backend**: Server-side logic built with Node.js and Express.js.
3. **Database**: Data storage using a relational database structure.

### Frontend

The frontend is located in the `Frontend` directory and is built with React.js. It includes:

- `public/index.html`: The main HTML file.
- `src/components/`: Contains React components for movies, theatres, showtimes, and reservations.
- `src/containers/App.js`: The main application component.
- `src/api/api.js`: API utility functions.
- `src/index.js`: The entry point for the React application.
- `package.json`: Dependencies and scripts for the frontend.

### Backend

The backend is located in the `Backend` directory and is built with Node.js and Express.js. It includes:

- `models/`: Contains Mongoose models for MongoDB:
  - `Movie.js`
  - `Theatre.js`
  - `Showtime.js`
  - `Reservation.js`
- `routes/`: Contains route handlers for various resources:
  - `movies.js`
  - `theatres.js`
  - `showtimes.js`
  - `reservations.js`
- `server.js`: Entry point for the backend server.
- `package.json`: Dependencies and scripts for the backend.

### Database

The database structure is located in the `Database` directory. It uses a relational schema and includes:

- `movie-aura/`: Main database schema folder:
  - `movies/`: Table for storing movie details.
  - `theatres/`: Table for storing theatre details.
  - `showtimes/`: Table for storing showtimes.
  - `reservations/`: Table for storing reservation details.

## Setup and Installation

### Prerequisites

- Node.js and npm installed.
- MongoDB installed and running.

### Frontend Setup

1. Navigate to the `Frontend` directory:
   ```sh
   cd Frontend
 
 

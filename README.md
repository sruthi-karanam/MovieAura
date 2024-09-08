---

# MovieAura

MovieAura is a comprehensive movie booking system that enables users to browse movies, view theatre details, check showtimes, and make reservations. It also features an admin dashboard for managing movies, theatres, showtimes, reservations, and user accounts.

## Project Structure

The project is divided into three main parts:

### Frontend

Located in the `Frontend` directory, the frontend is built with React.js and includes:

- **`public/index.html`**: The main HTML file.
- **`src/components/`**: React components for:
  - `Movies.js`
  - `Theatres.js`
  - `Showtimes.js`
  - `Reservation.js`
- **`src/containers/App.js`**: The main application component.
- **`src/api/api.js`**: API utility functions.
- **`src/index.js`**: The entry point for the React application.
- **`package.json`**: Dependencies and scripts for the frontend.

### Backend

Located in the `Backend` directory, the backend is built with Node.js and Express.js and includes:

- **`models/`**: Mongoose models for MongoDB:
  - `Movie.js`
  - `Theatre.js`
  - `Showtime.js`
  - `Reservation.js`
- **`routes/`**: Route handlers for:
  - `movies.js`
  - `theatres.js`
  - `showtimes.js`
  - `reservations.js`
- **`server.js`**: Entry point for the backend server.
- **`package.json`**: Dependencies and scripts for the backend.

### Database

Located in the `Database` directory, it uses a relational schema and includes:

- **`movie-aura/`**: Main database schema folder:
  - **`movies/`**: Table for storing movie details.
  - **`theatres/`**: Table for storing theatre details.
  - **`showtimes/`**: Table for storing showtimes.
  - **`reservations/`**: Table for storing reservation details.

## Setup and Installation

### Prerequisites

- Node.js and npm installed.
- MongoDB installed and running.

### Frontend Setup

1. Navigate to the `Frontend` directory:
   ```sh
   cd Frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

### Backend Setup

1. Navigate to the `Backend` directory:
   ```sh
   cd Backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables (e.g., for database connection) in a `.env` file.

4. Start the server:
   ```sh
   node server.js
   ```

## Usage

1. Open the frontend application in a web browser to interact with the movie booking system.
2. Use the admin dashboard to manage movies, theatres, showtimes, reservations, and user accounts.

## Additional Information

- **API Documentation**: Available in the `Backend` directory for details on API endpoints.
- **Testing**: Perform thorough testing for both frontend and backend to ensure functionality.
- **Deployment**: Configure deployment scripts for both frontend and backend.

---

-- SQLBook: Code
-- Create database
CREATE DATABASE movie_aura;

-- Switch to the movie_aura database
USE movie_aura;

-- Create tables

CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  release_date DATE
);

CREATE TABLE theatres (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255),
  city VARCHAR(100)
);

CREATE TABLE showtimes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  movie_id INT,
  theatre_id INT,
  showtime DATETIME,
  FOREIGN KEY (movie_id) REFERENCES movies(id),
  FOREIGN KEY (theatre_id) REFERENCES theatres(id)
);

CREATE TABLE reservations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  showtime_id INT,
  user_id INT,
  seat_number INT,
  FOREIGN KEY (showtime_id) REFERENCES showtimes(id)
);

-- Insert sample data

INSERT INTO movies (title, description, release_date) 
VALUES 
('Movie 1', 'Description 1', '2022-01-01'),
('Movie 2', 'Description 2', '2022-01-15');

INSERT INTO theatres (name, address, city) 
VALUES 
('Theatre 1', 'Address 1', 'City 1'),
('Theatre 2', 'Address 2', 'City 2');

INSERT INTO showtimes (movie_id, theatre_id, showtime) 
VALUES 
(1, 1, '2022-01-01 10:00:00'),
(2, 2, '2022-01-15 14:00:00');

INSERT INTO reservations (showtime_id, user_id, seat_number) 
VALUES 
(1, 1, 1),
(2, 2, 2);

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255)
    );

INSERT INTO users (id, firstName, lastName, email) VALUES
                                    (1, 'Petar', 'Petrovic', 'petar.petrovic@gmail.com'),
                                    (2, 'Jovan', 'Jovanovic', 'jovan.jovanovic@gmail.com'),
                                    (3, 'Jovica', 'Jovic', 'jovica.jovic@gamil.com');
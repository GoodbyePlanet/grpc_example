CREATE TABLE item (
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INT,
    order_date DATE,
    amount INT,
    item_id INT REFERENCES item(id)
);

INSERT INTO item (id, name)
VALUES (1, 'pencil'), (2, 'book'), (3, 'magic stick'), (4, 'ball');

INSERT INTO orders (id, user_id, order_date, amount, item_id)
VALUES (1, 1, '2023-05-01', 10, 1),
       (2, 1, '2023-05-02', 25, 2),
       (3, 1, '2023-05-03', 12, 3),
       (4, 2, '2023-05-04', 15, 2)

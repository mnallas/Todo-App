-- Create a db called todo_db
DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;
USE todo_db;

-- Create a table todos
CREATE TABLE todos (
	id INT NOT NULL AUTO_INCREMENT,
    todo VARCHAR(30),
    completed BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (id)
);

INSERT INTO todos (todo)
VALUES ("Play video games");

INSERT INTO todos (todo)
VALUES ("Clean room");

INSERT INTO todos (todo)
VALUES ("Work on Project");


SELECT * FROM todos;
SELECT * FROM todos WHERE id = 1; 
-- VIEW all of the todos
-- VIEW a single todos

DELETE FROM todos WHERE id = 3;

-- delete a todo

UPDATE todos
SET id = 23
Where id = 5;

UPDATE todos
SET completed = TRUE
Where id = 4;
-- update a todo
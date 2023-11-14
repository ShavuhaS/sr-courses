CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username varchar(20) NOT NULL UNIQUE,
    email varchar(100) NOT NULL UNIQUE,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    password varchar(50) NOT NULL
);

INSERT INTO users(username, email, first_name, last_name, password)
VALUES
('ShavuhaS', 'bodnarchuklegenda@kpi.ua', 'Andrii', 'Khokhotva', 'fiotfreesex2023'),
('hoshion', 'ot_enjoyer@kpi.ua', 'Svyatoslav', 'Shesterov', 'hehehehastoletheidea')
RETURNING *;
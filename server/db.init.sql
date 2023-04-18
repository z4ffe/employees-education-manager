CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    middle_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    education VARCHAR(50) NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE education (
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO employee (first_name, middle_name, last_name, education)
VALUES
    ('Иванов', 'Сергей', 'Николаевич', 'Школа'),
    ('Петров', 'Алексей', 'Сергеевич', '');

INSERT INTO education (title)
VALUES
    ('Школа'),
    ('ПТУ'),
    ('Колледж'),
    ('Техникум'),
    ('Бакалавр'),
    ('Магистратура');


-- many:many users:games
CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    email VARCHAR NOT NULL
);


-- INSERT INTO users
-- VALUES
--     ('1', 'u1', 'password', 'u1@mail.com');
/* add column:
todo: game_completed, game_duration */

CREATE TABLE users_games
(
    user_id INTEGER NOT NULL,
    game_id INTEGER NOT NULL,
    PRIMARY KEY (user_id, game_id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (game_id) REFERENCES games (id) ON DELETE CASCADE
);

INSERT INTO users_games
VALUES
    ('1', '1');
SELECT *
FROM users_games;


CREATE TABLE games
(
    id SERIAL PRIMARY KEY,
    game_name VARCHAR NOT NULL

);

INSERT INTO games
VALUES
    ('1', 'zoom call');
SELECT *
FROM games;


-- 1:many games:tasks
CREATE TABLE tasks
(
    id SERIAL PRIMARY KEY,
    num_answers INTEGER NOT NULL,
    task_number INTEGER NOT NULL,
    task_name VARCHAR NOT NULL,
    protips VARCHAR NOT NULL,
    reminder VARCHAR NOT NULL,
    game_id INTEGER NOT NULL,
    FOREIGN KEY (game_id) REFERENCES games (id) ON DELETE CASCADE
);

INSERT INTO tasks
VALUES
    ('1', '3', '1', 'Tap the muted callers', 'Pro-tip: Muting your microphone helps others focus on the speaker.', 'Reminder: Mute your mic!', '1' );
SELECT *
FROM tasks;

-- 1:1 games:images & 1:many images:hotspots
CREATE TABLE images
(

    id SERIAL UNIQUE NOT NULL,
    img_name VARCHAR NOT NULL,
    img_url VARCHAR NOT NULL,
    game_id INTEGER NOT NULL,
    CONSTRAINT game_id FOREIGN KEY (game_id) REFERENCES games (id) ON
    DELETE CASCADE
);

INSERT INTO images
VALUES
    ( 'zoom call', 'https:
//drive.google.com/file/d/1bAFYX9zO9eS4zn5_NHWtYr1DAjbyud0j/view?usp=sharing
', '1');

SELECT *
FROM images;



-- 1:many bgImg:hotspots

CREATE TABLE hotspots
(
    id SERIAL PRIMARY KEY,
    hotspot_name VARCHAR,
    x INTEGER NOT NULL,
    y INTEGER NOT NULL,
    width INTEGER NOT NULL,
    height INTEGER NOT NULL,
    img_id INTEGER NOT NULL,
    FOREIGN KEY (img_id) REFERENCES images (id) ON DELETE CASCADE
);

INSERT INTO hotspots
VALUES
    ('1', 'grid11', '38', '3', '291', '170', '1');
INSERT INTO hotspots
VALUES
    ('2', 'grid12', '38', '299', '291', '170', '1');
INSERT INTO hotspots
VALUES
    ('3', 'grid13', '38', '600', '291', '170', '1');

INSERT INTO hotspots
VALUES
    ('4', 'grid21', '213', '3', '291', '170', '1');
INSERT INTO hotspots
VALUES
    ('5', 'grid22', '213', '299', '291', '170', '1');
INSERT INTO hotspots
VALUES
    ('6', 'grid23', '213', '600', '291', '170', '1');


SELECT *
FROM hotspots;
-- many:many users:games
CREATE TABLE users
(
    pk_user_id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    email VARCHAR NOT NULL
);


INSERT INTO users
VALUES
    ('1', 'u1', 'password', 'u1@mail.com');

CREATE TABLE users_games
(
    fk_user_id INTEGER NOT NULL,
    fk_game_id INTEGER NOT NULL,
    PRIMARY KEY (fk_user_id, fk_game_id),
    FOREIGN KEY (fk_user_id) REFERENCES users (pk_user_id) ON UPDATE CASCADE,
    FOREIGN KEY (fk_game_id) REFERENCES games (pk_game_id) ON UPDATE CASCADE
);

INSERT INTO users_games
VALUES
    ('1', '1');
SELECT *
FROM users_games;

/* add column:
game_completed,game_duration */
-- 
CREATE TABLE games
(
    pk_game_id SERIAL PRIMARY KEY,
    game_name VARCHAR NOT NULL
);

INSERT INTO games
VALUES
    ('1', 'zoomroom call');
SELECT *
FROM games;


-- 1:many games:tasks
CREATE TABLE tasks
(
    pk_task_id SERIAL PRIMARY KEY,
    task_number INTEGER NOT NULL,
    task_name VARCHAR NOT NULL,
    protips VARCHAR NOT NULL,
    reminder VARCHAR NOT NULL,
    fk_game_id INTEGER NOT NULL,
    FOREIGN KEY (fk_game_id) REFERENCES games (pk_game_id) ON DELETE CASCADE
);

INSERT INTO tasks
VALUES
    ('1', '1', 'Tap the muted callers', 'Pro-tip: Muting your microphone helps others focus on the speaker.', 'Reminder: Mute your mic!', '1' );
SELECT *
FROM tasks;

-- 1:1 games:images & 1:many images:hotspots
CREATE TABLE images
(
    fk_game_id INTEGER NOT NULL,
    pk_img_id SERIAL UNIQUE NOT NULL,
    img_name VARCHAR NOT NULL,
    img_url VARCHAR NOT NULL,
    CONSTRAINT fk_game_id FOREIGN KEY (fk_game_id) REFERENCES games (pk_game_id)
);

INSERT INTO images
VALUES
    ('1', '1', 'zoomcall', 'https:
//drive.google.com/file/d/1bAFYX9zO9eS4zn5_NHWtYr1DAjbyud0j/view?usp=sharing
');

SELECT *
FROM images;



-- 1:many bgImg:hotspots

CREATE TABLE hotspots
(
    pk_hotspot_id SERIAL PRIMARY KEY,
    hotspot_name VARCHAR,
    x INTEGER NOT NULL,
    y INTEGER NOT NULL,
    width INTEGER NOT NULL,
    height INTEGER NOT NULL,
    fk_img_id INTEGER NOT NULL,
    FOREIGN KEY (fk_img_id) REFERENCES images (pk_img_id) ON DELETE CASCADE
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
CREATE DATABASE nteract;

CREATE TABLE game
(
    id SERIAL PRIMARY KEY,
    game_name TEXT NOT NULL,
    icon_url TEXT NOT NULL
);


CREATE TABLE task
(
    id SERIAL PRIMARY KEY,
    img_url TEXT NOT NULL,
    opener TEXT NOT NULL,
    num_answers INTEGER NOT NULL,
    task_number INTEGER NOT NULL,
    task_name TEXT NOT NULL,
    protips TEXT NOT NULL,
    closer TEXT NOT NULL,
    reminder TEXT NOT NULL,
    game_id INTEGER NOT NULL,
    FOREIGN KEY (game_id) REFERENCES game (id) ON DELETE CASCADE
);

CREATE TABLE task_hotspot
(
    task_id INTEGER NOT NULL,
    hotspot_id INTEGER NOT NULL,
    PRIMARY KEY (task_id,hotspot_id),
    FOREIGN KEY (task_id) REFERENCES task (id) ON DELETE CASCADE,
    FOREIGN KEY (hotspot_id) REFERENCES hotspot (id) ON DELETE CASCADE
);

CREATE TABLE hotspot
(
    id SERIAL PRIMARY KEY,
    hotspot_name TEXT NOT NULL,
    x INTEGER NOT NULL,
    y INTEGER NOT NULL,
    width INTEGER NOT NULL,
    height INTEGER NOT NULL

);

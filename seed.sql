
INSERT INTO game
VALUES
    ('1', 'Zoom Call', 'http://drive.google.com/uc?id=1fv8WXwQh2p8lXO4ji-2XpyZSvPy3y0En&authuser=0&export=download' );
INSERT INTO game
VALUES
    ('2', 'Coffee Chat', 'http://drive.google.com/uc?id=1zc3Rbl79HWqNGAM7hVwygIJpEfzYrwDB&authuser=0&export=download');


/*  */

INSERT INTO task
VALUES
    ('1', 'http://drive.google.com/uc?id=1bAFYX9zO9eS4zn5_NHWtYr1DAjbyud0j&authuser=0&export=download', 'Complete all 5 tasks', '3', '1', 'Tap the muted callers', 'Pro-tip: Muting your microphone helps others focus on the speaker.', 'You did it!', 'Reminder: Mute your mic!', '1' );

INSERT INTO task
VALUES
    ('2', 'http://drive.google.com/uc?id=1bAFYX9zO9eS4zn5_NHWtYr1DAjbyud0j&authuser=0&export=download', 'Complete all 5 tasks', '4', '2', 'Tap
on the non-smiling people', 'Pro-tip: Not smiling could sometimes mean the person is listening intently.', 'You did it!', 'Reminder: Not smiling does not necessarily mean the person is bored.', '1' );


INSERT INTO task
VALUES
    ('3', 'http://drive.google.com/uc?id=1bAFYX9zO9eS4zn5_NHWtYr1DAjbyud0j&authuser=0&export=download', 'Complete all 5 tasks', '2', '3', 'Click on the couples', 'Pro-tip: Couples on calls usually have one person who’s chattier than the other. Try to engage both in the conversation!', 'You did it!', '"Reminder: Try to engage both members in a couple in conversation.', '1' );

INSERT INTO task
VALUES
    ('4', 'http://drive.google.com/uc?id=1bAFYX9zO9eS4zn5_NHWtYr1DAjbyud0j&authuser=0&export=download', 'Complete all 5 tasks', '3', '4', 'Click on the books', 'Pro-tip:Complimenting someone’s background can be a good conversation starter.', 'You did it!', 'Reminder: Talking about your surroundings can be a good icebreaker.', '1' );

INSERT INTO task
VALUES
    ('5', 'http://drive.google.com/uc?id=1bAFYX9zO9eS4zn5_NHWtYr1DAjbyud0j&authuser=0&export=download', 'Complete all 5 tasks', '1', '5', 'Click on the puppy', 'Pro-tip:Zoom calls can sometimes have unexpected surprises.', 'You did it!', 'Congrats
! You’ve completed the challenge.', '1' );

INSERT
INTO task
VALUES
    ('6', 'http://drive.google.com/uc?id=1z2LKdrShszP0naNPZsBtFypsJk90wqmi&authuser=0&export=download', 'Complete all 5 tasks', '2', '1', 'Tap the listeners', 'Pro-tip: Active listeners face the speaker, nod or hold eye contact, and rest their hands to the side.', 'You did it!', 'Reminder: Active listening helps you to ask questions and continue the conversation.', '2' );
INSERT INTO task
VALUES
    ('7', 'http://drive.google.com/uc?id=1z2LKdrShszP0naNPZsBtFypsJk90wqmi&authuser=0&export=download', 'Complete all 5 tasks', '4', '2', 'Click on the food and drinks', 'Pro-tip: During professional coffee chats, try to avoid messy food.', 'You did it!', 'Reminder: If you’re going to eat, avoid making a mess.', '2' );

INSERT
INTO task
VALUES
    ('8', 'http://drive.google.com/uc?id=1z2LKdrShszP0naNPZsBtFypsJk90wqmi&authuser=0&export=download', 'Complete all 5 tasks', '1', '3', 'Click on the hand gestures', 'Pro-tip: Effective hand gestures can make the conversation more engaging.', 'You did it!', 'Reminder: Hand gestures can make a conversation more animated.', '2' );
INSERT INTO task
VALUES
    ('9', 'http://drive.google.com/uc?id=1z2LKdrShszP0naNPZsBtFypsJk90wqmi&authuser=0&export=download', 'Complete all 5 tasks', '2', '4', 'Click on the tables', 'Pro-tip:Try to find a quiet table away from any distractions.', 'You did it!', 'Reminder:Find ways to eliminate distractions in a busy area.', '2' );
INSERT INTO task
VALUES
    ('10', 'http://drive.google.com/uc?id=1z2LKdrShszP0naNPZsBtFypsJk90wqmi&authuser=0&export=download', 'Complete all 5 tasks', '1', '5', 'Tap on the person wearing glasses', 'Pro-tip: If you’re familiar with someone you can compliment their outfit.', 'You did it!', 'Congrats! You’ve completed the challenge.', '2' );
SELECT *
FROM task;

/*  */

INSERT INTO hotspot
VALUES
    ('1', 'grid11', '3', '38', '291', '170');
INSERT INTO hotspot
VALUES
    ('2', 'grid12', '299', '38', '291', '170');
INSERT INTO hotspot
VALUES
    ('3', 'grid13', '600', '38', '291', '170');

INSERT INTO hotspot
VALUES
    ('4', 'grid21', '3', '213', '291', '170');
INSERT INTO hotspot
VALUES
    ('5', 'grid22', '299', '213', '291', '170');
INSERT INTO hotspot
VALUES
    ('6', 'grid23', '600', '213', '291', '170');

INSERT INTO hotspot
VALUES
    ('7', 'fgMan', '333', '130', '188', '285');
INSERT INTO hotspot
VALUES
    ('8', 'ComputerWoman', '713', '173', '176', '242');
INSERT INTO hotspot
VALUES
    ('9', 'yellowCup', '165', '360', '71', '67');
INSERT INTO hotspot
VALUES
    ('10', 'cake', '230', '350', '71', '67');

INSERT INTO hotspot
VALUES
    ('11', 'greenCup', '383', '355', '71', '67');
INSERT INTO hotspot
VALUES
    ('12', 'purpleCup', '661', '241', '71', '67');

INSERT INTO hotspot
VALUES
    ('13', 'hand', '249', '320', '71', '67');
INSERT INTO hotspot
VALUES
    ('14', 'fgTable', '125', '360', '398', '67');
INSERT INTO hotspot
VALUES
    ('15', 'bgTable', '633', '250', '185', '127');
INSERT INTO hotspot
VALUES
    ('16', 'glasses', '171', '161', '69', '124');






/*  */
INSERT INTO task_hotspot
VALUES
    ('1', '2');
INSERT INTO task_hotspot
VALUES
    ('1', '4');
INSERT INTO task_hotspot
VALUES
    ('1', '6');
INSERT INTO task_hotspot
VALUES
    ('2', '3');
INSERT INTO task_hotspot
VALUES
    ('2', '4');
INSERT INTO task_hotspot
VALUES
    ('2', '5');
INSERT INTO task_hotspot
VALUES
    ('2', '6');
INSERT INTO task_hotspot
VALUES
    ('3', '3');
INSERT INTO task_hotspot
VALUES
    ('3', '5');
INSERT INTO task_hotspot
VALUES
    ('4', '3');
INSERT INTO task_hotspot
VALUES
    ('4', '4');
INSERT INTO task_hotspot
VALUES
    ('4', '6');
INSERT INTO task_hotspot
VALUES
    ('5', '6');
INSERT INTO task_hotspot
VALUES
    ('6', '7');
INSERT INTO task_hotspot
VALUES
    ('6', '8');
INSERT INTO task_hotspot
VALUES
    ('7', '9');
INSERT INTO task_hotspot
VALUES
    ('7', '10');
INSERT INTO task_hotspot
VALUES
    ('7', '11');
INSERT INTO task_hotspot
VALUES
    ('7', '12');
INSERT INTO task_hotspot
VALUES
    ('8', '13');
INSERT INTO task_hotspot
VALUES
    ('9', '14');
INSERT INTO task_hotspot
VALUES
    ('9', '15');
INSERT INTO task_hotspot
VALUES
    ('10', '16');





SELECT *
FROM game;
SELECT *
FROM task;
SELECT *
FROM hotspot;
SELECT *
FROM task_hotspot;
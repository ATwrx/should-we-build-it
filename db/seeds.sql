CREATE database shouldwebuildit_db;

use shouldwebuildit_db;

SELECT * FROM projects;


INSERT INTO users (firstname, lastname, username, email, password, createdAt, updatedAt)

VALUES ('Mike', 'Fields', 'mijofields', 'mikefields81@gmail.com', 'dummydummy', now(), now()),
 ('Armando', 'Robles', 'armandor', 'armando@robles.com', 'testtest', now(), now()), 
 ('Andrew', 'Thomspon', 'ATwrx', 'andrew@thompson.com', '256', now(), now()),
 ('Ledley', 'King', 'deadlyledley', 'ledders@gmail.com', 'cat123', now(), now());


INSERT INTO projects (project_name, project_desc, project_lang, category, createdAt, updatedAt, UserUserID)

VALUES ('letter of complaint', 'a templating engine which generates strongly worded letters based on type of complaint and level of annoyance' , 'node.js', 'website', now(), now(), '1'),  
('should we build it', 'website to share ideas, receive comments and possibly get support before launching', 'node.js', 'website', now(), now(), '3'),
('charity central', 'full stack app for small charities to get supprt', 'node.js', 'mobile app', now(), now(), '2');

INSERT INTO comments (comment, createdAt, user_id, updatedAt, ProjectProjectId)
VALUES ('not sure about this idea, seems like too many variables', now(), '4' , now(), '1'),

 

SELECT * FROM comments

# Pro Trainers Scheduler
A capstone project from Covalence designed to showcase my full stack development skills. The goal of this application is to have users register either as a trainer or trainee. As a registered trainee, you have the ability to login, go to a trainers page that displays every registered trainer and schedule a session with the trainer of your choosing. Both trainers and trainees will have access to their scheduled sessions on their profile page.
## Technologies

 - Javascript
 - Typescript
 - React JS
 - Node JS
 - Bootstrap
 - Express JS
 - Sweet Alerts
 - React Calendar
 
 ## Installation
`` git clone https://github.com/tharper6/Scheduler.git scheduler``
  ``cd scheduler``
  ``npm install``
  ``npm run dev``

MySQL Data
<details>
  <summary>Click For MySQL Data</summary>

CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR (60) NOT NULL,
email VARCHAR (60) NOT NULL,
password VARCHAR (60) NOT NULL,
sportid INT NULL,
role VARCHAR (30) NULL DEFAULT 'admin',
trainingrole VARCHAR (45) NOT NULL,
avatar VARCHAR (80) NULL DEFAULT 'https://tinyurl.com/y4jh5uus',
bio VARCHAR (1500) NULL,
_created DATETIME DEFAULT CURRENT_TIMESTAMP
);

create table sports (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR (60) NOT NULL,
_created DATETIME DEFAULT CURRENT_TIMESTAMP
);

create table sessions (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR (60) NOT NULL,
sportid INT NOT NULL,
summary VARCHAR (2000) NULL,
date DATETIME NOT NULL,
trainerid INT NULL,
traineeid INT NULL,
time VARCHAR (60) NOT NULL,
_created DATETIME DEFAULT CURRENT_TIMESTAMP
);

create table tokens (
id INT AUTO_INCREMENT PRIMARY KEY,
token TEXT NULL,
userid int NOT NULL,
_created DATETIME DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE users
ADD CONSTRAINT fk_users_to_sports
FOREIGN KEY (sportid)
REFERENCES sports(id)

ALTER TABLE tokens
ADD CONSTRAINT fk_tokens_to_users
FOREIGN KEY (userid)
REFERENCES users(id)

ALTER TABLE sessions 
ADD CONSTRAINT fk_sessions_to_sports
FOREIGN KEY (sportid) 
REFERENCES sports(id)
</details>

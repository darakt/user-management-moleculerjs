CREATE TABLE users (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    username varchar(255),
    firstname varchar(255),
    lastname varchar(255),
    password varchar(255),
    isComing boolean,
    answeredOn datetime,
    createdAt datetime,
    updatedAt datetime,
    profilePicture varchar(255),
    pictures varchar(255)
);

insert into users (username, firstname, lastname, password ) values ('the one', 'tom', 'Anderson', 'matrix')

CREATE DATABASE geogames;

USE geogames;

CREATE TABLE user (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL,
    username VARCHAR(25) NOT NULL,
    password VARCHAR(25) NOT NULL
);

description cart;

CREATE TABLE cart (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    pr_name VARCHAR(25) NOT NULL,
    description VARCHAR(100) NOT NULL,
    price DOUBLE(10, 2) NOT NULL
);
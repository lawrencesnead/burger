###Schema
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
	display_helper BOOLEAN DEFAULT true,
	PRIMARY KEY (id)
);
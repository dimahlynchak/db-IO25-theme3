# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних
```sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db-IO25-theme3
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db-IO25-theme3
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db-IO25-theme3` DEFAULT CHARACTER SET utf8 ;
USE `db-IO25-theme3` ;

-- -----------------------------------------------------
-- Table `db-IO25-theme3`.`Role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-IO25-theme3`.`Role` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `permissions` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-IO25-theme3`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-IO25-theme3`.`User` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `Role_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_Role_idx` (`Role_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_Role`
    FOREIGN KEY (`Role_id`)
    REFERENCES `db-IO25-theme3`.`Role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-IO25-theme3`.`Action`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-IO25-theme3`.`Action` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `User_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Action_user1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_Action_user1`
    FOREIGN KEY (`User_id`)
    REFERENCES `db-IO25-theme3`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-IO25-theme3`.`Public request`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-IO25-theme3`.`Public request` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `date` VARCHAR(45) NULL,
  `Action_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Public request_Action1_idx` (`Action_id` ASC) VISIBLE,
  CONSTRAINT `fk_Public request_Action1`
    FOREIGN KEY (`Action_id`)
    REFERENCES `db-IO25-theme3`.`Action` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-IO25-theme3`.`Media data`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-IO25-theme3`.`Media data` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `fileType` VARCHAR(45) NULL,
  `Public request_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Media data_Public request1_idx` (`Public request_id` ASC) VISIBLE,
  CONSTRAINT `fk_Media data_Public request1`
    FOREIGN KEY (`Public request_id`)
    REFERENCES `db-IO25-theme3`.`Public request` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-IO25-theme3`.`Permission`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-IO25-theme3`.`Permission` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-IO25-theme3`.`Role permissions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-IO25-theme3`.`Role permissions` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Role_id` INT UNSIGNED NOT NULL,
  `Permission_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Role permissions_Role1_idx` (`Role_id` ASC) VISIBLE,
  INDEX `fk_Role permissions_Permission1_idx` (`Permission_id` ASC) VISIBLE,
  CONSTRAINT `fk_Role permissions_Role1`
    FOREIGN KEY (`Role_id`)
    REFERENCES `db-IO25-theme3`.`Role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Role permissions_Permission1`
    FOREIGN KEY (`Permission_id`)
    REFERENCES `db-IO25-theme3`.`Permission` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

```

# RESTfull сервіс для управління даними

## app.py
```python
from flask import Flask, request, jsonify
from model import db, Role, create_role, read_roles, update_role, delete_role

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://username:password@localhost/dbname'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

@app.route('/roles', methods=['GET'])
def get_roles():
    roles = read_roles()
    roles_list = [{"id": role.id, "name": role.name, "description": role.description, "permissions": role.permissions} for role in roles]
    return jsonify(roles_list), 200

@app.route('/roles', methods=['POST'])
def add_role():
    data = request.get_json()
    if 'name' not in data or 'description' not in data або 'permissions' не в даних:
        return jsonify({"error": "Invalid data, 'name', 'description' і 'permissions' є обов'язковими полями"}), 400
    try:
        create_role(data['name'], data['description'], data['permissions'])
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    return jsonify({"message": "Role created successfully"}), 201

@app.route('/roles/<int:role_id>', methods=['PUT'])
def update_role_endpoint(role_id):
    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid data."}), 400
    update_role(role_id, data.get('name'), data.get('description'), data.get('permissions'))
    return jsonify({"message": "Role updated successfully"}), 200

@app.route('/roles/<int:role_id>', methods=['DELETE'])
def delete_role_endpoint(role_id):
    delete_role(role_id)
    return jsonify({"message": "Role deleted successfully"}), 200

if __name__ == '__main__':
    app.run(debug=True, use_reloader=False)
```

## model.py

```python
from flask_sqlalchemy import SQLAlchemy
import pymysql

pymysql.install_as_MySQLdb()

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'User'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(45))
    password = db.Column(db.String(45))
    Role_id = db.Column(db.Integer, db.ForeignKey('Role.id'), nullable=False)

class Role(db.Model):
    __tablename__ = 'Role'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(45), nullable=False)
    description = db.Column(db.String(45), nullable=False)
    permissions = db.Column(db.String(45), nullable=False)

# Інші класи тут

def create_role(name, description, permissions):
    role = Role(name=name, description=description, permissions=permissions)
    db.session.add(role)
    db.session.commit()

def read_roles():
    return Role.query.all()

def update_role(role_id, name=None, description=None, permissions=None):
    role = Role.query.get(role_id)
    if role:
        if name:
            role.name = name
        if description:
            role.description = description
        if permissions:
            role.permissions = permissions
        db.session.commit()

def delete_role(role_id):
    role = Role.query.get(role_id)
    if role:
        db.session.delete(role)
        db.session.commit()
```

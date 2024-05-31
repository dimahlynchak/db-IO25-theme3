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
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `permissions` BIT(3) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-IO25-theme3`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-IO25-theme3`.`User` (
  `id` INT NOT NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `roleid` VARCHAR(45) NULL,
  `Role_id` INT NOT NULL,
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
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `User_id` INT NOT NULL,
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
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `date` VARCHAR(45) NULL,
  `Action_id` INT NOT NULL,
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
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `fileType` VARCHAR(45) NULL,
  `Public request_id` INT NOT NULL,
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
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db-IO25-theme3`.`Role permissions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db-IO25-theme3`.`Role permissions` (
  `id` INT NOT NULL,
  `Role_id` INT NOT NULL,
  `Permission_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Role_id`, `Permission_id`),
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


- RESTfull сервіс для управління даними


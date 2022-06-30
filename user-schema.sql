CREATE TABLE `studenapplication`.`user` ( `id` INT NOT NULL AUTO_INCREMENT ,
 `student_id` TEXT NOT NULL , `first_name` VARCHAR(45) NOT NULL , `last_name` VARCHAR(45) NOT NULL ,
  `physics` INT(10) NOT NULL , `maths` INT(10) NOT NULL , `chemistry` INT(10) NOT NULL , 
  `percentage` FLOAT(10) NOT NULL , `comments` TEXT NOT NULL , 
  `status` VARCHAR(10) NOT NULL DEFAULT 'active' , PRIMARY KEY (`id`)) ENGINE = InnoDB;

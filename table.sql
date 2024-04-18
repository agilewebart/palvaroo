-- Palvaroo DB ------------ 
-- status 0-> inactive , 1-> active(default) , 2-> delete
-- User , : id , ph , pass , status : 0,1,2
-- Prouduct : id , name , category, desc  , price , imagepath, currentDate, modifedat,status:0,1,2
-- Category : id , category_name , status : 0,1,2  
-- webenquiry: id , enquiryname , enquiryemail , enquirydesc 


--  -------------------- USER TABLE ----------------------------
CREATE TABLE `user` (
 `id` int NOT NULL AUTO_INCREMENT,
 `phone` varchar(15) NOT NULL,
 `password` varchar(500) NOT NULL,
 `status` int NOT NULL DEFAULT '1',
 PRIMARY KEY (`id`)
)

----------------------- Products Table ---------------------------
CREATE TABLE `products` (
 `id` int NOT NULL AUTO_INCREMENT,
 `name` varchar(255) NOT NULL,
 `description` varchar(500) NOT NULL,
 `price` varchar(255) NOT NULL,
 `image_name` varchar(255) NOT NULL,
 `createdat` varchar(200) NOT NULL,
 `modifiedat` varchar(200) NOT NULL,
 `status` int NOT NULL DEFAULT '1',
 PRIMARY KEY (`id`)
)


----------------------- Category Table ---------------------------
CREATE TABLE `category` (
 `id` int NOT NULL AUTO_INCREMENT,
 `category_name` varchar(255) NOT NULL,
 `status` int NOT NULL DEFAULT '1',
 PRIMARY KEY (`id`)
)

------------------------- Enquiry table ---------------------------
CREATE TABLE `enquiry` (
 `id` int NOT NULL AUTO_INCREMENT,
 `enquiryname` varchar(255) NOT NULL,
 `enquiryemail` varchar(255) NOT NULL,
 `enquirymsg` varchar(500) NOT NULL,
 `enquiryat` varchar(100) NOT NULL,
 PRIMARY KEY (`id`)
)
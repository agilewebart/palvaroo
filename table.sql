-- Palvaroo DB ------------ 
-- status 0-> inactive , 1-> active(default) , 2-> delete
-- User , : id , ph , pass , status : 0,1,2
-- Prouduct : id , name , category, desc  , price , imagepath, currentDate, modifedat,status:0,1,2
-- Category : id , category_name , status : 0,1,2  
-- webenquiry: id , enquiryname , enquiryemail , enquirydesc 


---------------------------------- PHPMYADMIN SQL TABLE QRY -------------------------------

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
 `category_id` varchar(200) NOT NULL,
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

---------------------------------- PGADMIN SQL TABLE QRY -------------------------------
-- User Table ---------
CREATE TABLE users (
 id SERIAL PRIMARY KEY,
 phone VARCHAR(15) NOT NULL,
 password VARCHAR(500) NOT NULL,
 usertype VARCHAR(15) NOT NULL,
 status INT NOT NULL DEFAULT 1
);

-- Products Table old ----
CREATE TABLE products (
 id SERIAL PRIMARY KEY,
 name VARCHAR(255) NOT NULL,
 description VARCHAR(500) NOT NULL,
 category_id INT NOT NULL,
 price VARCHAR(255) NOT NULL,
 image_name VARCHAR(255) NOT NULL,
 createdat VARCHAR(100) NOT NULL,
 modifiedat VARCHAR(100) NOT NULL,
 status INT NOT NULL DEFAULT 1
);
-- Products Table new ----
--------------- 
CREATE TABLE IF NOT EXISTS public.products
(
    id integer NOT NULL DEFAULT nextval('products_id_seq'::regclass),
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    description character varying(500) COLLATE pg_catalog."default" NOT NULL,
    category_id integer NOT NULL,
    price character varying(255) COLLATE pg_catalog."default" NOT NULL,
    image_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    createdat character varying(100) COLLATE pg_catalog."default" NOT NULL,
    modifiedat character varying(100) COLLATE pg_catalog."default" NOT NULL,
    status integer NOT NULL DEFAULT 1,
    CONSTRAINT products_pkey PRIMARY KEY (id)
)
--------------- 

-- Category Table ------
CREATE TABLE category (
 id SERIAL PRIMARY KEY,
 category_name VARCHAR(255) NOT NULL,
 status INT NOT NULL DEFAULT 1
);

-- Enquiry Table OLD------
CREATE TABLE enquiry (
 id SERIAL PRIMARY KEY,
 enquiryname VARCHAR(255) NOT NULL,
 enquiryemail VARCHAR(255) NOT NULL,
 enquiryphone VARCHAR(255) NOT NULL,
 enquirymsg VARCHAR(500) NOT NULL,
 enquiryat VARCHAR(100) NOT NULL
);

-- Enquiry Table New  ------
CREATE TABLE enquiry (
 id SERIAL PRIMARY KEY,
 enquiryname VARCHAR(255) NOT NULL,
 enquiryemail VARCHAR(255) NOT NULL,
 enquiryphone VARCHAR(255) NOT NULL,
 enquiryprod VARCHAR(255) NOT NULL,
 enquirymsg VARCHAR(500) NOT NULL,
 enquiryat VARCHAR(100) NOT NULL
);

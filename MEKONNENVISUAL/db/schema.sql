DROP TABLE IF EXISTS serving_tables;
DROP TABLE IF EXISTS customers;

DROP TABLE IF EXISTS dishes;


DROP TABLE IF EXISTS guests;




   CREATE TABLE dishes (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(30) NOT NULL,
    name  VARCHAR(30) NOt NULL,
    price VARCHAR(30) NOT NULL, 
    discription VARCHAR(150) NOT NULL

  );
  CREATE TABLE customers (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,  
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone_number VARCHAR(30) NOT NULL,
    birth_date VARCHAR(30) NOT NULL,
    dish_id INTEGER ,
    CONSTRAINT fk_dish FOREIGN KEY (dish_id) REFERENCES  dishes(id) ON DELETE SET NULL
  );


  CREATE TABLE guests(
    
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP 

  );

 CREATE TABLE serving_tables(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  guest_id INTEGER NOT NULL,
  customer_id INTEGER NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT uc_guest UNIQUE(guest_id),

  CONSTRAINT fk_guest FOREIGN KEY (guest_id) REFERENCES guests(id) ON DELETE CASCADE, 
  CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE 
 ) 


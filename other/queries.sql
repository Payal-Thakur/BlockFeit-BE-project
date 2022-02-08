



-- Customer Table

CREATE TABLE IF NOT EXISTS customer (

	customer_id integer NOT NULL PRIMARY KEY,
	customer_private_key varchar(50) NOT NULL,
	customer_public_key varchar(50) NOT NULL,
	customer_name varchar(30) NOT NULL,
	customer_email varchar(50) NOT NULL,
	customer_phone_no varchar(50),
	customer_city varchar(30),
	customer_state varchar(20),
	customer_type varchar(10) check(customer_type in ("customer", "vendor", "retailer", "manufactuer")),
	customer_purchesed_count integer default 0,
	customer_password varchar(50) NOT NULL
);


-- Image Table

CREATE TABLE IF NOT EXISTS image (

	image_id integer primary key AUTO_INCREMENT,
	image_owner_id varchar(30) NOT NULL,
	image_path varchar(50) NOT NULL
);

-- manufacturer Table

CREATE TABLE IF NOT EXISTS manufacturer (

	manufacturer_id varchar(50) NOT NULL PRIMARY KEY UNIQUE,
	manufacturer_private_key varchar(50) NOT NULL UNIQUE,
	manufacturer_public_key varchar(50) NOT NULL UNIQUE,
	manufacturer_name varchar(30) NOT NULL,
	manufacturer_email varchar(50) NOT NULL,
	manufacturer_product_count integer default 0,
	manufacturer_mobile_no varchar(20) NOT NULL,
	manufacturer_city varchar(30) NOT NULL,
	manufacturer_state varchar(30) NOT NULL,
	manufacturer_password varchar(50) NOT NULL,
	manufacturer_company_name varchar(50) NOT NULL
);


-- Product table

CREATE TABLE IF NOT EXISTS product (

	product_id varchar(50) NOT NULL PRIMARY KEY UNIQUE,
	product_name varchar(50) NOT NULL,
	product_description varchar(50) NOT NULL,
	product_height varchar(50) NOT NULL,
	product_width varchar(50) NOT NULL,
	product_manufactured_date date  NOT NULL CHECK(product_manufactured_date LIKE '--/--/----'),
	product_size varchar(50) NOT NULL,
	product_batch varchar(50) NOT NULL,
	product_owner_id varchar(50) NOT NULL,
	product_manufacturer varchar(50) NOT NULL,
	FOREIGN KEY (product_manufacturer) references manufacturer(manufacturer_id)
)


-- Report

CREATE TABLE IF NOT EXISTS report (

	report_id integer PRIMARY KEY AUTO_INCREMENT,
	reporter_public_key varchar(50) NOT NULL,
	reported_product_id varchar(50) NOT NULL,
	report_details varchar(200) default "none",
	FOREIGN KEY (reported_product_id) references product(product_id)
);

-- product histroy


CREATE TABLE IF NOT EXISTS product_history (

	product_history_id integer PRIMARY KEY AUTO_INCREMENT,
	product_id varchar(150) NOT NULL,
	owner_public_key varchar(150) NOT NULL,
	buyer_public_key varchar(150) NOT NULL,
	transaction_address varchar(150) NOT NULL,
	time_stamp varchar(10) NOT NULL,
	status integer CHECK(status in (1, 0)),
	FOREIGN KEY (product_id) references product(product_id)
);


-- vendor_requested



CREATE TABLE IF NOT EXISTS vendor_requested (

	vendor_id integer NOT NULL PRIMARY KEY AUTO_INCREMENT,
	vendor_private_key varchar(50) NOT NULL UNIQUE,
	vendor_public_key varchar(50) NOT NULL UNIQUE,
	vendor_name varchar(30) NOT NULL,
	vendor_email varchar(50) NOT NULL,
	vendor_mobile_no varchar(20) NOT NULL,
	vendor_city varchar(30) NOT NULL,
	vendor_state varchar(30) NOT NULL,
	vendor_password varchar(50) NOT NULL,
	vendor_shop_name varchar(50) NOT NULL
);


-- vendor

CREATE TABLE IF NOT EXISTS vendor (

	vendor_id integer NOT NULL PRIMARY KEY,
	vendor_private_key varchar(50) NOT NULL UNIQUE,
	vendor_public_key varchar(50) NOT NULL UNIQUE,
	vendor_name varchar(30) NOT NULL,
	vendor_email varchar(50) NOT NULL,
	vendor_mobile_no varchar(20) NOT NULL,
	vendor_city varchar(30) NOT NULL,
	vendor_state varchar(30) NOT NULL,
	vendor_password varchar(50) NOT NULL,
	vendor_shop_name varchar(50) NOT NULL,
	vendor_quantity_available integer default 0,
	vendor_quantity_sold integer default 0,
	vendor_quantity_requested integer default 0
);





-- product Request table 

CREATE TABLE IF NOT EXISTS product_request (

	request_id integer AUTO_INCREMENT PRIMARY KEY,
	vendor_id integer NOT NULL,
	product_quantity integer NOT NULL CHECK(product_quantity > 0),
	request_status integer default 0 check(request_status in (1, 0)),
	requst_note varchar(200) default "",
	FOREIGN KEY (vendor_id) references vendor(vendor_id)
);


-- extra, do not consider in system
-- to maintain system log system and testing
CREATE TABLE IF NOT EXISTS system_logger (

	logger_id integer AUTO_INCREMENT PRIMARY KEY,
	logger_info varchar(300),
	logger_status varchar(50),
	logger_action varchar(100)
);




--- add new user

customer_id integer NOT NULL PRIMARY KEY,
	customer_private_key varchar(50) NOT NULL,
	customer_public_key varchar(50) NOT NULL,
	customer_name varchar(30) NOT NULL,
	customer_email varchar(50) NOT NULL,
	customer_phone_no varchar(50),
	customer_city varchar(30),
	customer_state varchar(20),
	customer_type varchar(10) check(customer_type in ("customer", "vendor", "retailer", "manufactuer")),
	customer_purchesed_count integer default 0,
	customer_password varchar(50) NOT NULL


INSERT INTO customer (customer_private_key, 
					customer_public_key, 
					customer_name,
					customer_email,
					customer_phone_no,
					customer_city,
					customer_state,
					customer_type,
					customer_password
					
) values(?, ?, ?, ?, ?, ?, ?, ?, ?);



-- get Transactions


select product.product_name, product_history.transaction_address, product_history.time_stamp,
		product_history.status, product_history.amount
from product_history, product;
where (product_history.owner_public_key = ?) or 
		(product_history.buyer_public_key = ?) and product_history.product_id = product.product_id;


-- insert manufacturer

manufacturer_id
	manufacturer_private_key
	manufacturer_public_key
	manufacturer_name
	manufacturer_email
	manufacturer_product_count
	manufacturer_mobile_no
	manufacturer_city
	manufacturer_state
	manufacturer_password
	manufacturer_company_name


INSERT INTO manufacturer values("m-1", "prvtk-xyz", "pubk-abc", "manufactuer-1", 

	"blockFeit@gmail.com", 0, "1234567890", "Nashik", "Maharashtra", "manu-pass", "Blockfeit"
);



-- Add product

product_id
product_name 
product_description
product_height
product_width
product_manufactured_date
product_size
product_batch
product_owner_id 
product_manufacturer



INSERT INTO product values("p-1", "product-1", "A shoe", "23 CM", "10 CM", 
	STR_TO_DATE('28-08-2029', '%d-%m-%Y'), 
	"M", "2022", "owner-1", "m-1");




-- Request for vendor


vendor_private_key,
vendor_public_key,
vendor_name,
vendor_email,
vendor_mobile_no,
vendor_city,
vendor_state,
vendor_password,
vendor_password,

insert into vendor(
	vendor_id,
	vendor_private_key,
	vendor_public_key,
	vendor_name,
	vendor_email,
	vendor_mobile_no,
	vendor_city,
	vendor_state,
	vendor_password,
	vendor_shop_name,
	vendor_quantity_available,
	vendor_quantity_sold,
	vendor_quantity_requested
) values ((select
	vendor_id,
	vendor_private_key,
	vendor_public_key,
	vendor_name,
	vendor_email,
	vendor_mobile_no,
	vendor_city,
	vendor_state,
	vendor_password,
	vendor_shop_name,  0, 0, 0
	from vendor_requested 
	where vendor_requested.vendor_id=1));




insert into vendor(
	vendor_id,
	vendor_private_key,
	vendor_public_key,
	vendor_name,
	vendor_email,
	vendor_mobile_no,
	vendor_city,
	vendor_state,
	vendor_password,
	vendor_shop_name
) values ((select
	vendor_id,
	vendor_private_key,
	vendor_public_key,
	vendor_name,
	vendor_email,
	vendor_mobile_no,
	vendor_city,
	vendor_state,
	vendor_password,
	vendor_shop_name,
	from vendor_requested 
	where vendor_requested.vendor_id=1));


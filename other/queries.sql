



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

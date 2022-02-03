-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: blockfeit
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `customer_id` int NOT NULL AUTO_INCREMENT,
  `customer_private_key` varchar(50) NOT NULL,
  `customer_public_key` varchar(50) NOT NULL,
  `customer_name` varchar(30) NOT NULL,
  `customer_email` varchar(50) NOT NULL,
  `customer_phone_no` varchar(50) DEFAULT NULL,
  `customer_city` varchar(30) DEFAULT NULL,
  `customer_state` varchar(20) DEFAULT NULL,
  `customer_type` varchar(10) DEFAULT NULL,
  `customer_purchesed_count` int DEFAULT '0',
  `customer_password` varchar(50) NOT NULL,
  PRIMARY KEY (`customer_id`),
  CONSTRAINT `customer_chk_1` CHECK ((`customer_type` in (_utf8mb4'customer',_utf8mb4'vendor',_utf8mb4'retailer',_utf8mb4'manufactuer')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `image_id` int NOT NULL AUTO_INCREMENT,
  `image_owner_id` varchar(30) NOT NULL,
  `image_path` varchar(50) NOT NULL,
  PRIMARY KEY (`image_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manufacturer`
--

DROP TABLE IF EXISTS `manufacturer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manufacturer` (
  `manufacturer_id` varchar(50) NOT NULL,
  `manufacturer_private_key` varchar(50) NOT NULL,
  `manufacturer_public_key` varchar(50) NOT NULL,
  `manufacturer_name` varchar(30) NOT NULL,
  `manufacturer_email` varchar(50) NOT NULL,
  `manufacturer_product_count` int DEFAULT '0',
  `manufacturer_mobile_no` varchar(20) NOT NULL,
  `manufacturer_city` varchar(30) NOT NULL,
  `manufacturer_state` varchar(30) NOT NULL,
  `manufacturer_password` varchar(50) NOT NULL,
  `manufacturer_company_name` varchar(50) NOT NULL,
  PRIMARY KEY (`manufacturer_id`),
  UNIQUE KEY `manufacturer_id` (`manufacturer_id`),
  UNIQUE KEY `manufacturer_private_key` (`manufacturer_private_key`),
  UNIQUE KEY `manufacturer_public_key` (`manufacturer_public_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manufacturer`
--

LOCK TABLES `manufacturer` WRITE;
/*!40000 ALTER TABLE `manufacturer` DISABLE KEYS */;
/*!40000 ALTER TABLE `manufacturer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` varchar(50) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_description` varchar(50) NOT NULL,
  `product_height` varchar(50) NOT NULL,
  `product_width` varchar(50) NOT NULL,
  `product_manufactured_date` date NOT NULL,
  `product_size` varchar(50) NOT NULL,
  `product_batch` varchar(50) NOT NULL,
  `product_owner_id` varchar(50) NOT NULL,
  `product_manufacturer` varchar(50) NOT NULL,
  PRIMARY KEY (`product_id`),
  UNIQUE KEY `product_id` (`product_id`),
  KEY `product_manufacturer` (`product_manufacturer`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`product_manufacturer`) REFERENCES `manufacturer` (`manufacturer_id`),
  CONSTRAINT `product_chk_1` CHECK ((`product_manufactured_date` like _utf8mb4'--/--/----'))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_history`
--

DROP TABLE IF EXISTS `product_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_history` (
  `product_history_id` int NOT NULL AUTO_INCREMENT,
  `product_id` varchar(150) NOT NULL,
  `owner_public_key` varchar(150) NOT NULL,
  `buyer_public_key` varchar(150) NOT NULL,
  `transaction_address` varchar(150) NOT NULL,
  `time_stamp` varchar(10) NOT NULL,
  `status` int DEFAULT NULL,
  PRIMARY KEY (`product_history_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `product_history_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  CONSTRAINT `product_history_chk_1` CHECK ((`status` in (1,0)))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_history`
--

LOCK TABLES `product_history` WRITE;
/*!40000 ALTER TABLE `product_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_request`
--

DROP TABLE IF EXISTS `product_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_request` (
  `request_id` int NOT NULL AUTO_INCREMENT,
  `vendor_id` int NOT NULL,
  `product_quantity` int NOT NULL,
  `request_status` int DEFAULT '0',
  `requst_note` varchar(200) DEFAULT '',
  PRIMARY KEY (`request_id`),
  KEY `vendor_id` (`vendor_id`),
  CONSTRAINT `product_request_ibfk_1` FOREIGN KEY (`vendor_id`) REFERENCES `vendor` (`vendor_id`),
  CONSTRAINT `product_request_chk_1` CHECK ((`product_quantity` > 0)),
  CONSTRAINT `product_request_chk_2` CHECK ((`request_status` in (1,0)))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_request`
--

LOCK TABLES `product_request` WRITE;
/*!40000 ALTER TABLE `product_request` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `report`
--

DROP TABLE IF EXISTS `report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `report` (
  `report_id` int NOT NULL AUTO_INCREMENT,
  `reporter_public_key` varchar(50) NOT NULL,
  `reported_product_id` varchar(50) NOT NULL,
  `report_details` varchar(200) DEFAULT 'none',
  PRIMARY KEY (`report_id`),
  KEY `reported_product_id` (`reported_product_id`),
  CONSTRAINT `report_ibfk_1` FOREIGN KEY (`reported_product_id`) REFERENCES `product` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `report`
--

LOCK TABLES `report` WRITE;
/*!40000 ALTER TABLE `report` DISABLE KEYS */;
/*!40000 ALTER TABLE `report` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `system_logger`
--

DROP TABLE IF EXISTS `system_logger`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `system_logger` (
  `logger_id` int NOT NULL AUTO_INCREMENT,
  `logger_info` varchar(300) DEFAULT NULL,
  `logger_status` varchar(50) DEFAULT NULL,
  `logger_action` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`logger_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `system_logger`
--

LOCK TABLES `system_logger` WRITE;
/*!40000 ALTER TABLE `system_logger` DISABLE KEYS */;
/*!40000 ALTER TABLE `system_logger` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor`
--

DROP TABLE IF EXISTS `vendor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor` (
  `vendor_id` int NOT NULL,
  `vendor_private_key` varchar(50) NOT NULL,
  `vendor_public_key` varchar(50) NOT NULL,
  `vendor_name` varchar(30) NOT NULL,
  `vendor_email` varchar(50) NOT NULL,
  `vendor_mobile_no` varchar(20) NOT NULL,
  `vendor_city` varchar(30) NOT NULL,
  `vendor_state` varchar(30) NOT NULL,
  `vendor_password` varchar(50) NOT NULL,
  `vendor_shop_name` varchar(50) NOT NULL,
  `vendor_quantity_available` int DEFAULT '0',
  `vendor_quantity_sold` int DEFAULT '0',
  `vendor_quantity_requested` int DEFAULT '0',
  PRIMARY KEY (`vendor_id`),
  UNIQUE KEY `vendor_private_key` (`vendor_private_key`),
  UNIQUE KEY `vendor_public_key` (`vendor_public_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor`
--

LOCK TABLES `vendor` WRITE;
/*!40000 ALTER TABLE `vendor` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_requested`
--

DROP TABLE IF EXISTS `vendor_requested`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor_requested` (
  `vendor_id` int NOT NULL AUTO_INCREMENT,
  `vendor_private_key` varchar(50) NOT NULL,
  `vendor_public_key` varchar(50) NOT NULL,
  `vendor_name` varchar(30) NOT NULL,
  `vendor_email` varchar(50) NOT NULL,
  `vendor_mobile_no` varchar(20) NOT NULL,
  `vendor_city` varchar(30) NOT NULL,
  `vendor_state` varchar(30) NOT NULL,
  `vendor_password` varchar(50) NOT NULL,
  `vendor_shop_name` varchar(50) NOT NULL,
  PRIMARY KEY (`vendor_id`),
  UNIQUE KEY `vendor_private_key` (`vendor_private_key`),
  UNIQUE KEY `vendor_public_key` (`vendor_public_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_requested`
--

LOCK TABLES `vendor_requested` WRITE;
/*!40000 ALTER TABLE `vendor_requested` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendor_requested` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-30 20:07:11

-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: supermarket
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart_products`
--

DROP TABLE IF EXISTS `cart_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_products` (
  `cart_product_id` bigint NOT NULL AUTO_INCREMENT,
  `product_id` bigint NOT NULL,
  `amount` bigint NOT NULL,
  `total_price` bigint NOT NULL,
  `cart_id` bigint NOT NULL,
  PRIMARY KEY (`cart_product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=327 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_products`
--

LOCK TABLES `cart_products` WRITE;
/*!40000 ALTER TABLE `cart_products` DISABLE KEYS */;
INSERT INTO `cart_products` VALUES (2,2,1,-9223372036854775808,3),(5,9,2,12,6),(7,4,1,-9223372036854775808,3),(11,5,2,10,3),(12,6,3,36,3),(13,7,3,-9223372036854775808,3),(14,16,11,-9223372036854775808,3),(15,11,9,-9223372036854775808,3),(16,14,1,34,3),(17,9,3,36,3),(18,4,5,25,7),(19,2,7,-9223372036854775808,7),(20,8,3,39,7),(21,9,13,-9223372036854775808,7),(22,2,2,130,9),(23,1,1,20,9),(24,11,2,20,9),(25,13,1,16,9),(29,16,4,-9223372036854775808,10),(30,4,5,-9223372036854775808,10),(31,5,3,-9223372036854775808,10),(32,9,1,12,10),(33,10,2,12,10),(34,15,2,-9223372036854775808,10),(36,8,1,13,10),(37,2,3,-9223372036854775808,11),(38,7,2,30,11),(39,10,7,-9223372036854775808,11),(40,12,4,48,11),(41,13,5,80,11),(42,1,2,40,12),(43,2,2,130,12),(44,11,1,10,13),(46,4,10,50,0),(47,4,10,50,0),(48,4,1,5,0),(51,4,1,5,13),(52,10,1,6,13),(53,16,1,20,8),(54,5,3,15,13),(56,2,3,195,13),(57,14,1,34,13),(58,17,2,26,13),(59,2,2,130,14),(81,1,1,20,15),(82,1,1,20,19),(83,2,2,130,19),(84,2,1,65,20),(85,4,1,5,21),(86,4,1,5,22),(87,5,1,5,22),(88,1,1,20,25),(89,1,1,20,26),(90,1,1,20,27),(91,4,1,5,27),(92,5,2,10,27),(93,4,1,5,28),(94,5,2,10,38),(95,6,2,24,39),(96,1,4,64,44),(97,4,5,25,44),(98,5,8,40,44),(102,9,4,48,44),(104,7,3,45,44),(107,2,2,130,0),(108,2,3,195,44),(109,4,2,10,45),(110,2,3,195,46),(111,4,2,10,47),(112,5,2,10,48),(113,6,1,12,49),(114,10,2,12,50),(115,11,1,10,51),(118,6,2,24,53),(119,11,2,20,53),(120,13,3,48,53),(121,7,2,30,53),(122,9,2,24,53),(125,2,1,65,52),(126,2,2,130,0),(127,1,2,32,0),(128,2,2,130,0),(129,5,4,20,52),(130,6,2,24,0),(131,7,2,30,0),(132,11,1,10,0),(133,2,2,130,0),(134,4,2,10,0),(136,13,2,32,0),(137,4,2,10,54),(138,5,2,10,54),(139,4,2,10,0),(140,10,4,24,0),(141,2,1,65,54),(142,11,1,10,54),(143,2,2,130,0),(144,6,1,12,0),(146,2,1,65,0),(148,6,2,24,0),(149,6,2,24,0),(150,4,2,10,0),(151,6,2,24,0),(152,4,2,10,0),(153,4,3,15,0),(154,4,2,10,0),(155,4,2,10,77),(156,5,2,10,77),(157,4,2,10,78),(158,5,1,5,78),(159,5,1,5,79),(160,13,3,48,79),(161,7,2,30,79),(162,7,2,30,80),(163,6,3,36,80),(164,14,2,68,80),(165,6,2,24,81),(167,1,2,32,82),(168,11,2,20,82),(169,10,3,18,82),(170,12,1,12,82),(172,2,1,65,83),(173,4,1,5,83),(174,6,2,24,85),(175,5,2,10,85),(203,6,1,12,86),(204,11,2,20,86),(205,4,2,10,87),(206,9,2,24,87),(221,2,2,130,88),(222,7,1,15,89),(223,5,2,10,90),(224,5,2,10,91),(225,12,2,24,91),(226,11,2,20,91),(227,5,2,10,92),(228,5,2,10,93),(229,13,2,32,94),(230,5,2,10,95),(231,6,2,24,95),(232,7,2,30,95),(233,14,2,68,95),(234,4,2,10,96),(235,4,3,15,97),(236,5,3,15,98),(237,2,3,195,98),(238,5,3,15,99),(239,8,4,52,100),(240,7,2,30,101),(241,11,3,30,102),(242,4,2,10,103),(243,7,2,30,104),(244,8,2,26,105),(251,6,5,60,106),(252,5,4,20,106),(253,4,8,40,106),(254,11,2,40,106),(255,10,2,12,106),(256,6,2,24,107),(257,5,2,10,107),(258,4,2,10,108),(259,5,2,10,109),(260,2,2,130,109),(261,4,1,5,109),(262,4,3,15,110),(263,5,3,15,110),(264,4,2,10,111),(265,5,2,10,111),(266,6,2,24,112),(267,4,2,10,113),(268,9,2,130,114),(269,10,3,18,115),(270,7,3,45,116),(271,6,2,24,117),(272,2,2,130,117),(273,5,4,20,117),(276,4,1,5,118),(277,14,2,68,118),(278,15,2,50,118),(279,5,2,10,119),(280,4,2,10,119),(281,2,2,130,119),(282,5,2,10,120),(283,8,2,26,121),(284,8,2,26,122),(286,2,3,195,123),(287,4,2,10,123),(288,2,2,130,124),(289,5,2,10,124),(290,9,3,195,125),(291,6,2,24,126),(292,5,3,15,127),(293,4,2,10,128),(294,12,3,36,129),(295,5,5,25,130),(296,4,3,15,131),(297,5,3,15,132),(298,4,3,15,133),(299,2,4,260,134),(300,1,2,32,134),(302,2,2,130,135),(303,4,2,10,136),(304,4,2,10,137),(305,5,3,15,138),(306,5,2,10,139),(307,4,2,30,139),(308,5,2,10,140),(309,6,4,48,140),(310,7,2,30,140),(311,2,3,195,0),(312,6,3,36,141),(313,7,4,60,141),(314,5,2,10,142),(315,15,2,50,142),(316,13,2,32,143),(317,5,2,10,0),(318,4,3,45,145),(319,12,4,48,146),(321,6,4,48,148),(322,5,3,15,148),(324,13,4,64,148),(325,11,3,60,148),(326,4,3,45,148);
/*!40000 ALTER TABLE `cart_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `cart_id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `created_date` varchar(40) NOT NULL,
  PRIMARY KEY (`cart_id`),
  UNIQUE KEY `cart_id_UNIQUE` (`cart_id`)
) ENGINE=InnoDB AUTO_INCREMENT=150 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
INSERT INTO `carts` VALUES (77,6,'2021-10-30 15:10'),(78,6,'2021-10-30 15:13'),(79,6,'2021-10-30 15:14'),(80,6,'2021-10-30 15:16'),(81,6,'2021-10-30 15:17'),(82,6,'2021-10-30 15:19'),(83,6,'2021-10-31 14:00'),(84,1,'2021-10-31 21:51'),(85,6,'2021-11-01 21:56'),(86,6,'2021-11-03 17:41'),(87,6,'2021-11-03 20:51'),(88,6,'2021-11-03 21:11'),(89,6,'2021-11-05 19:11'),(90,6,'2021-11-05 22:15'),(91,6,'2021-11-05 22:22'),(92,6,'2021-11-05 22:26'),(93,6,'2021-11-05 22:27'),(94,6,'2021-11-05 22:27'),(95,6,'2021-11-05 22:36'),(96,6,'2021-11-06 01:51'),(97,6,'2021-11-06 02:27'),(98,6,'2021-11-06 02:32'),(99,6,'2021-11-06 02:55'),(100,6,'2021-11-06 03:02'),(101,6,'2021-11-06 13:18'),(102,6,'2021-11-06 15:04'),(103,6,'2021-11-06 15:12'),(104,6,'2021-11-06 15:31'),(105,6,'2021-11-07 18:01'),(106,6,'2021-11-08 00:45'),(107,6,'2021-11-09 18:00'),(108,6,'2021-11-09 18:04'),(109,6,'2021-11-10 18:32'),(110,6,'2021-11-10 18:39'),(111,6,'2021-11-10 18:42'),(112,6,'2021-11-10 18:49'),(113,6,'2021-11-10 19:03'),(114,6,'2021-11-10 19:10'),(115,6,'2021-11-10 19:11'),(116,6,'2021-11-10 19:14'),(117,6,'2021-11-10 19:17'),(118,6,'2021-11-10 20:05'),(119,6,'2021-11-10 20:59'),(120,6,'2021-11-11 01:53'),(121,6,'2021-11-11 01:55'),(122,6,'2021-11-11 01:57'),(123,6,'2021-11-11 02:02'),(124,6,'2021-11-11 02:07'),(125,6,'2021-11-11 02:18'),(126,6,'2021-11-11 02:18'),(127,6,'2021-11-11 02:30'),(128,6,'2021-11-11 02:30'),(129,6,'2021-11-11 02:35'),(130,6,'2021-11-11 02:52'),(131,6,'2021-11-11 03:00'),(132,6,'2021-11-11 03:23'),(133,6,'2021-11-11 03:24'),(134,6,'2021-11-11 14:28'),(135,6,'2021-11-11 14:34'),(136,6,'2021-11-11 14:52'),(137,6,'2021-11-11 14:54'),(138,6,'2021-11-11 16:05'),(139,6,'2021-11-12 18:23'),(140,6,'2021-11-13 15:06'),(141,6,'2021-11-13 15:27'),(142,6,'2021-11-13 15:28'),(143,6,'2021-11-13 16:51'),(144,10,'2021-11-13 16:59'),(145,10,'2021-11-13 17:00'),(146,10,'2021-11-13 17:01'),(147,10,'2021-11-13 17:01'),(148,6,'2021-11-13 17:07'),(149,6,'2021-11-13 17:22');
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `category_id` bigint NOT NULL AUTO_INCREMENT,
  `category_name` varchar(45) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Dairy'),(2,'Cookies, Snacks & Candy'),(3,'Meat & Fish'),(4,'Bread & Bakery'),(5,'Baby');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `cart_id` bigint NOT NULL,
  `total_price` bigint NOT NULL,
  `ship_city` varchar(200) NOT NULL,
  `ship_address` varchar(200) NOT NULL,
  `shipped_date` date NOT NULL,
  `order_date` datetime NOT NULL,
  `last_4_digit` bigint NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=388 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (318,6,77,20,'Haifa','nothing 12','2021-11-14','2021-10-30 15:13:00',1231),(319,6,78,15,'Rishon LeZion','nothing 12','2021-11-29','2021-10-30 15:14:00',3131),(320,6,79,83,'Rishon LeZion','nothing 12','2021-11-21','2021-10-30 15:16:00',1231),(321,6,80,134,'Netanya','nothing 12','2021-11-21','2021-10-30 15:17:00',1231),(322,6,81,24,'Haifa','nothing 12','2021-11-21','2021-10-30 15:19:00',1231),(323,6,82,82,'Rishon LeZion','nothing 12','2021-11-14','2021-10-31 13:59:00',1231),(324,6,83,70,'Netanya','nothing 12','2021-11-14','2021-11-01 21:46:00',1231),(325,6,85,123,'asdc','asdc','2021-12-12','2012-12-13 00:00:00',1111),(326,6,86,32,'Netanya','nothing 12','2021-11-01','2021-11-03 20:50:00',1231),(327,6,87,34,'Netanya','nothing 12','2021-11-11','2021-11-03 21:11:00',2312),(328,6,88,130,'Be\'er Sheva','nothing 1212','2021-11-13','2021-11-05 19:11:00',2312),(329,6,89,15,'Jerusalem','nothing 12','2021-11-13','2021-11-05 22:15:00',3123),(330,6,90,10,'Haifa','nothing 12','2021-11-19','2021-11-05 22:17:00',1312),(331,6,91,54,'Be\'er Sheva','nothing 12','2021-11-20','2021-11-05 22:25:00',3123),(332,6,92,10,'Haifa','nothing 12','2021-11-26','2021-11-05 22:26:00',2312),(333,6,93,10,'Netanya','nothing 12','2021-11-18','2021-11-05 22:27:00',2321),(334,6,94,32,'Jerusalem','nothing 12','2021-11-18','2021-11-05 22:30:00',2312),(335,6,95,132,'Haifa','nothing 12','2021-11-13','2021-11-06 01:30:00',1231),(336,6,96,10,'Netanya','nothing 12','2021-11-18','2021-11-06 02:26:00',4523),(337,6,97,15,'Haifa','nothing 12','2021-11-19','2021-11-06 02:31:00',1232),(338,6,98,210,'Jerusalem','nothing 12','2021-11-19','2021-11-06 02:38:00',1231),(339,6,99,15,'Be\'er Sheva','nothing 12','2021-11-30','2021-11-06 02:58:00',6546),(340,6,100,52,'Be\'er Sheva','nothing 12','2021-11-17','2021-11-06 13:17:00',1231),(341,6,101,30,'Rishon LeZion','nothing 12','2021-11-25','2021-11-06 15:03:00',1312),(342,6,102,30,'Jerusalem','nothing 12','2021-11-26','2021-11-06 15:05:00',1231),(343,6,103,10,'Haifa','nothing 12','2021-12-30','2021-11-06 15:31:00',2342),(344,6,104,30,'Netanya','nothing 12','2021-11-30','2021-11-07 17:56:00',9797),(345,6,105,26,'Be\'er Sheva','nothing 12','2021-11-12','2021-11-08 00:45:00',3213),(346,6,106,172,'Be\'er Sheva','nothing 12','2021-11-20','2021-11-09 17:59:00',1231),(347,6,107,34,'Haifa','nothing 12123','2021-12-16','2021-11-09 18:03:00',1231),(348,6,108,10,'Jerusalem','Hanegev Street 12','2021-11-20','2021-11-09 18:04:00',1231),(349,6,109,145,'Haifa','nothing 12','2021-11-10','2021-11-10 18:37:00',1231),(350,6,110,30,'Netanya','nothing 12','2021-12-11','2021-11-10 18:40:00',1231),(351,6,111,20,'Haifa','nothing 12','2021-11-17','2021-11-10 18:44:00',1231),(352,6,112,24,'Rishon LeZion','Hanegev Street 12','2021-12-22','2021-11-10 19:03:00',1231),(353,6,113,10,'Jerusalem','nothing 12','2021-12-21','2021-11-10 19:09:00',1232),(354,6,114,130,'Rishon LeZion','nothing 12','2021-12-21','2021-11-10 19:10:00',3123),(355,6,115,18,'Rishon LeZion','nothing 12','2022-01-21','2021-11-10 19:13:00',3123),(356,6,116,45,'Herzelia','nothing 12','2021-12-27','2021-11-10 19:15:00',1231),(357,6,117,174,'Jerusalem','nothing 12','2022-01-21','2021-11-10 20:04:00',8977),(358,6,118,123,'Be\'er Sheva','nothing 12','2022-01-11','2021-11-10 20:09:00',3245),(359,6,119,150,'Be\'er Sheva','nothing 12','2022-01-24','2021-11-10 21:00:00',1231),(360,6,120,10,'Netanya','nothing 12','2022-02-16','2021-11-11 01:53:00',1321),(361,6,121,26,'Jerusalem','nothing 12','2022-01-19','2021-11-11 01:56:00',2131),(362,6,122,26,'Haifa','nothing 12','2022-01-11','2021-11-11 01:58:00',1231),(363,6,123,205,'Jerusalem','nothing 12','2022-01-14','2021-11-11 02:03:00',1231),(364,6,124,140,'Haifa','nothing 12','2022-01-25','2021-11-11 02:08:00',1232),(365,6,125,195,'Haifa','nothing 12','2022-01-04','2021-11-11 02:18:00',1231),(366,6,126,24,'Jerusalem','nothing 12','2021-12-23','2021-11-11 02:22:00',1231),(367,6,127,15,'Be\'er Sheva','nothing 12','2022-01-14','2021-11-11 02:30:00',3123),(368,6,128,10,'Jerusalem','nothing 12','2022-01-27','2021-11-11 02:31:00',1232),(369,6,129,36,'Haifa','nothing 12','2021-12-24','2021-11-11 02:45:00',6546),(370,6,130,25,'Jerusalem','nothing 12','2021-11-27','2021-11-11 02:54:00',1231),(371,6,131,15,'Jerusalem','nothing 12','2022-01-27','2021-11-11 03:01:00',3123),(372,6,132,15,'Jerusalem','nothing 12','2022-01-20','2021-11-11 03:23:00',1231),(373,6,133,15,'Haifa','nothing 12','2022-01-14','2021-11-11 03:24:00',1312),(374,6,134,292,'Haifa','nothing 12','2021-11-26','2021-11-11 14:34:00',3123),(375,6,135,130,'Jerusalem','nothing 12','2021-12-23','2021-11-11 14:50:00',2131),(376,6,136,10,'Jerusalem','nothing 12','2021-12-31','2021-11-11 14:53:00',3123),(377,6,137,10,'Haifa','nothing 12','2022-03-03','2021-11-11 14:54:00',1231),(378,6,138,15,'Haifa','nothing 12','2021-12-30','2021-11-11 16:06:00',1231),(379,6,139,40,'Jerusalem','nothing 12','2022-01-26','2021-11-13 15:06:00',3131),(380,6,140,88,'Rishon LeZion','nothing 12','2022-01-21','2021-11-13 15:19:00',2131),(381,6,141,96,'Haifa','nothing 12','2022-01-30','2021-11-13 15:28:00',1231),(382,6,142,60,'Haifa','nothing 12','2022-01-27','2021-11-13 16:51:00',1312),(383,6,143,32,'Haifa','nothing 12','2022-03-03','2021-11-13 16:52:00',1312),(384,10,144,0,'Jerusalem','Hanegev Street 12','2022-01-19','2021-11-13 16:59:00',1231),(385,10,145,45,'Haifa','fsfsaf','2022-01-26','2021-11-13 17:00:00',1312),(386,10,146,48,'Netanya','fsfsaf','2022-01-18','2021-11-13 17:01:00',1231),(387,6,148,232,'Haifa','nothing 12','2022-03-30','2021-11-13 17:22:00',2342);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `product_id` bigint NOT NULL AUTO_INCREMENT,
  `product_name` varchar(45) NOT NULL,
  `category_id` bigint NOT NULL,
  `product_price` bigint NOT NULL,
  `image` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Diapers',5,16,'https://i5.walmartimages.com/asr/55c1eccd-4de7-49b0-a80e-aa23c914a006.c4d21cb734f0bc63916bff5e79cde8e8.jpeg'),(2,'Baby Food',4,65,'https://im0-tub-com.yandex.net/i?id=2e9c6fa24b715b571e24bd2b11b44d41&n=13&exp=1'),(4,'Choco',1,15,'https://im0-tub-com.yandex.net/i?id=3e4224b333ea5fefff9083a6a75fc7d5&n=13&exp=1'),(5,'Milk 3%',1,5,'https://www.tnuva.co.il/uploads/f_5e0208d570297_1577191637.jpg'),(6,'Pringels',2,12,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/IEQ30_Z_P_38000232183_2.png'),(7,'Popcorn',2,15,'https://i.pinimg.com/originals/34/47/6e/34476e6a7e783707314cad98a8b60a7a.jpg'),(8,'Cookies',2,13,'https://cdn.istores.co.il/image/upload/if_ar_gt_2:1/c_fill,h_662,w_555/c_fill,h_662,w_555/if_else/c_fill,q_100,w_555/if_end/dpr_2/v1617195927/clients/102215/af1c4302c3c7f42b510b283da08bbaf9229071aa.jpg'),(9,'Crackers',2,15,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/FYU62_Z_P_7290112963895_1.png'),(10,'White Bread',4,6,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/GIR24_Z_P_497112_1.png'),(11,'Pita',4,20,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_large/GBK58_L_P_7290010777099_1.png'),(12,'Bagels',4,12,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_large/WHU36_L_P_3495825_1.png'),(13,'Mafines Cake',4,16,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/QBP58_Z_P_7296073132936_1.png'),(14,'Beef',3,34,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_large/GFE26_L_P_9144413_1.png'),(15,'Saucage',3,25,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_large/CRD34_L_P_318868_1.png'),(16,'Chicken',3,20,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/MQR38_Z_P_9394832_1.png'),(17,'Mozzarella ',1,13,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_large/JOQ68_L_P_7640166793991_1.png'),(21,'Soy Milk',1,13,'https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_large/PQA48_L_P_5411188127307_1.png');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `user_type` varchar(45) NOT NULL DEFAULT 'USER',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','01963a652a30d6e53b6ce14000d9c648','Bar','Jamse','bar@gmail.com','natania','123','ADMIN'),(3,'user2222','f2ab468d2926129a2dbc8ff70b96109a','sadgf','sdfg','dasg','sag','sdf','USER'),(4,'user1111','6df94cdb0ec2c0a0acd2a6d726506a81','Yossi','Moshe','YM@gmail.com','Tel Aviv ','Bla 12','USER'),(5,'nahari1234','766342084f4872910acc23a16dcf14c1','Maor','Nahari','nahari@gmail.com','Natania','Zobi','USER'),(6,'user5555','5c1fcc83fa37121d9fb284e455d70881','user','5555','user5@gmail.com','TLV','nothing 12','USER'),(8,'itay1234','766342084f4872910acc23a16dcf14c1','Itay','Pa','itay@gmail.com','netania','nordeo','USER'),(9,'user8888','400e93b28c6f433e349c9567679e6fd0','user','8888','user@gmail.com','bla','zobi','USER'),(10,'blabla1234','766342084f4872910acc23a16dcf14c1','bla','blaa','bla@gmail.com','asdf','fsfsaf','USER');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-13 17:49:38

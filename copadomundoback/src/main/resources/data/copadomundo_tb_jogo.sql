-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: copadomundo
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `tb_jogo`
--

DROP TABLE IF EXISTS `tb_jogo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_jogo` (
  `id` int NOT NULL,
  `data` datetime(6) DEFAULT NULL,
  `pais1` int DEFAULT NULL,
  `pais2` int DEFAULT NULL,
  `gols_pais1` int DEFAULT NULL,
  `gols_pais2` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK8cemm9ox4ulquqrp9kk82mypq` (`pais1`),
  KEY `FK4h2b8uklnf7i77exentporesk` (`pais2`),
  CONSTRAINT `FK4h2b8uklnf7i77exentporesk` FOREIGN KEY (`pais2`) REFERENCES `tb_pais` (`id`),
  CONSTRAINT `FK8cemm9ox4ulquqrp9kk82mypq` FOREIGN KEY (`pais1`) REFERENCES `tb_pais` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_jogo`
--

LOCK TABLES `tb_jogo` WRITE;
/*!40000 ALTER TABLE `tb_jogo` DISABLE KEYS */;
INSERT INTO `tb_jogo` VALUES (1,'2021-08-28 12:00:00.000000',2,3,NULL,NULL),(2,'2021-08-29 09:00:00.000000',4,1,NULL,NULL);
/*!40000 ALTER TABLE `tb_jogo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-04 14:51:41

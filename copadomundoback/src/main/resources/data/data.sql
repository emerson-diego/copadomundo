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
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (1);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

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
INSERT INTO `tb_jogo` VALUES (1,'2021-08-28 12:00:00.000000',2,3),(2,'2021-08-29 09:00:00.000000',4,1);
/*!40000 ALTER TABLE `tb_jogo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_pais`
--

DROP TABLE IF EXISTS `tb_pais`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_pais` (
  `id` int NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_pais`
--

LOCK TABLES `tb_pais` WRITE;
/*!40000 ALTER TABLE `tb_pais` DISABLE KEYS */;
INSERT INTO `tb_pais` VALUES (1,'Uruguai'),(2,'Rússia'),(3,'Arábia Saudita'),(4,'Egito'),(5,'Espanha'),(6,'Portugal'),(7,'Irã'),(8,'Marrocos'),(9,'França'),(10,'Dinamarca'),(11,'Peru'),(12,'Austrália'),(13,'Croácia'),(14,'Argentina'),(15,'Nigéria'),(16,'Islândia'),(17,'Brasil'),(18,'Suiça'),(19,'Sérvia'),(20,'Costa Rica'),(21,'Suécia'),(22,'México'),(23,'Coreia do Sul'),(24,'Alemanha'),(25,'Bélgica'),(26,'Inglaterra'),(27,'Tunísia'),(28,'Panamá'),(29,'Colômbia'),(30,'Japão'),(31,'Senegal'),(32,'Polônia');
/*!40000 ALTER TABLE `tb_pais` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_perfil`
--

DROP TABLE IF EXISTS `tb_perfil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_perfil` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_perfil`
--

LOCK TABLES `tb_perfil` WRITE;
/*!40000 ALTER TABLE `tb_perfil` DISABLE KEYS */;
INSERT INTO `tb_perfil` VALUES (1,'admin');
/*!40000 ALTER TABLE `tb_perfil` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_usuario`
--

DROP TABLE IF EXISTS `tb_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_usuario` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_usuario`
--

LOCK TABLES `tb_usuario` WRITE;
/*!40000 ALTER TABLE `tb_usuario` DISABLE KEYS */;
INSERT INTO `tb_usuario` VALUES (1,'edaraujo','Emerson Diego','$2a$10$7XUb0PArfhWQxBg9i.EE5.47SywFv7Pv6W0E9HuacdLIQEhcpKoeK',NULL);
INSERT INTO `tb_usuario` VALUES (2,'ccaroca','Caio Caroca','$2a$10$7XUb0PArfhWQxBg9i.EE5.47SywFv7Pv6W0E9HuacdLIQEhcpKoeK',NULL);
/*!40000 ALTER TABLE `tb_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_usuario_perfis`
--

DROP TABLE IF EXISTS `tb_usuario_perfis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_usuario_perfis` (
  `usuario_id` bigint NOT NULL,
  `perfis_id` bigint NOT NULL,
  KEY `FKlb0v2a6n1nipfr7x52bph639n` (`perfis_id`),
  KEY `FKs087651re2ge5ypb0admr52eg` (`usuario_id`),
  CONSTRAINT `FKlb0v2a6n1nipfr7x52bph639n` FOREIGN KEY (`perfis_id`) REFERENCES `tb_perfil` (`id`),
  CONSTRAINT `FKs087651re2ge5ypb0admr52eg` FOREIGN KEY (`usuario_id`) REFERENCES `tb_usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_usuario_perfis`
--

LOCK TABLES `tb_usuario_perfis` WRITE;
/*!40000 ALTER TABLE `tb_usuario_perfis` DISABLE KEYS */;
INSERT INTO `tb_usuario_perfis` VALUES (1,1);
/*!40000 ALTER TABLE `tb_usuario_perfis` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-04 11:17:25

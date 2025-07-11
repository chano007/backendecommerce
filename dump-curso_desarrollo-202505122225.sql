-- MySQL dump 10.13  Distrib 9.2.0, for macos15.2 (arm64)
--
-- Host: localhost    Database: curso_desarrollo
-- ------------------------------------------------------
-- Server version	9.2.0

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
-- Table structure for table `tb_cliente`
--

DROP TABLE IF EXISTS `tb_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_cliente` (
  `ID_CLIENTE` int NOT NULL AUTO_INCREMENT,
  `NOMBRE_CLIENTE` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `APELLIDOS_CLIENTE` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `DNI_CLIENTE` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `ESTADO` tinyint(1) DEFAULT NULL,
  `DIRECCION` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `UBIGEO` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`ID_CLIENTE`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_cliente`
--

LOCK TABLES `tb_cliente` WRITE;
/*!40000 ALTER TABLE `tb_cliente` DISABLE KEYS */;
INSERT INTO `tb_cliente` VALUES (1,'Juan','Pérez López','12345678',1,'Av. Siempre Viva 123','150101'),(2,'María','García Sánchez','23456789',1,'Calle Falsa 456','150102'),(3,'Luis','Ramírez Díaz','34567890',1,'Jr. Las Flores 789','150103'),(4,'Ana','Torres Rojas','45678901',0,'Av. Los Pinos 321','150104'),(5,'Carlos','Fernández Gómez','56789012',1,'Pasaje Los Andes 654','150105'),(6,'Lucía','Morales Castillo','67890123',1,'Callejón del Sol 987','150106'),(7,'José','Vargas Cárdenas','78901234',0,'Av. La Marina 111','150107'),(8,'Carmen','Medina Quispe','89012345',1,'Jr. Amazonas 222','150108'),(9,'Pedro','Reyes Hurtado','90123456',1,'Av. Javier Prado 333','150109'),(10,'Elena','López Cabrera','01234567',1,'Calle Los Álamos 444','150110'),(11,'Miguel','Salazar Pinto','11223344',1,'Jr. Cuzco 555','150111'),(12,'Paola','Chávez León','22334455',1,'Av. Grau 666','150112'),(13,'Alfredo','Paredes Ramos','33445566',0,'Calle Lima 777','150113'),(14,'Diana','Valverde Soto','44556677',1,'Av. Brasil 888','150114'),(15,'Ricardo','Peña Huamán','55667788',1,'Jr. Trujillo 999','150115'),(16,'Rosa','Campos Vega','66778899',0,'Av. Arequipa 101','150116'),(17,'Jorge','Ibáñez Aguilar','77889900',1,'Calle Junín 202','150117'),(18,'Valeria','Ríos Mendoza','88990011',1,'Jr. Ancash 303','150118'),(19,'Fernando','Silva Barreto','99001122',1,'Av. Colonial 404','150119'),(20,'Gabriela','Cruz Navarro','10111213',1,'Calle Tarata 505','150120'),(21,'Juan','Perez Lopez','12345678',0,'Av. Siempre Viva XXX','150101'),(22,'Juan','Perez Lopez','12345678',1,'Av. Siempre Viva 123','150101'),(23,'Juan','Perez Lopez','12345678',0,'Av. Siempre Viva 123','150101'),(24,'Juan','Perez Lopez','12345678',1,'Av. Siempre Viva 123','150101'),(25,'Pepito','Perez Lopez','12345678',1,'Av. Siempre Viva 123','150101'),(26,NULL,NULL,NULL,1,NULL,NULL),(27,NULL,NULL,NULL,1,NULL,NULL),(28,NULL,NULL,NULL,1,NULL,NULL),(29,NULL,NULL,NULL,1,NULL,NULL),(30,'Luciano','Perez Lopez',NULL,1,'Av. Siempre Viva 123','150101'),(31,'Pepito','Perez Lopez','12345678',1,'Av. Siempre Viva 123','150101'),(32,'Pepito','Perez Lopez','12345678',1,'Av. Siempre Viva 123','150101'),(33,'Pepito','Perez Lopez','12345678',1,'Av. Siempre Viva 123','150101'),(34,'Pepito','Perez Lopez','12345678',1,'Av. Siempre Viva 123','150101'),(35,'Pepito','Perez Lopez','12345678',1,'Av. Siempre Viva 123','150101'),(36,'Luciano','Perez Lopez','12345678',0,'Av. Siempre Viva 123','150101'),(37,'Daniela','Daniela Lopez','87654321',0,'Av. VMT Viva 123','150103');
/*!40000 ALTER TABLE `tb_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_detalle_pedido`
--

DROP TABLE IF EXISTS `tb_detalle_pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_detalle_pedido` (
  `ID_DETALLE_PEDIDO` int NOT NULL AUTO_INCREMENT,
  `ID_PEDIDO` varchar(45) DEFAULT NULL,
  `ID_PRODUCTO` varchar(45) DEFAULT NULL,
  `CANTIDAD` int DEFAULT NULL,
  `PRECIO_U` double DEFAULT NULL,
  `PRECIO_TOT` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID_DETALLE_PEDIDO`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_detalle_pedido`
--

LOCK TABLES `tb_detalle_pedido` WRITE;
/*!40000 ALTER TABLE `tb_detalle_pedido` DISABLE KEYS */;
INSERT INTO `tb_detalle_pedido` VALUES (1,'1','1',1,799.99,NULL),(2,'1','3',2,600,NULL),(3,'2','4',1,1200.75,NULL),(4,'3','5',1,1400,NULL),(5,'3','6',1,100,NULL),(6,'4','7',1,150,NULL),(7,'5','8',1,300,NULL),(8,'6','9',1,250,NULL),(9,'7','10',1,120.8,NULL),(10,'8','1',1,799.99,NULL),(11,'9','2',1,2500,NULL),(12,'10','4',1,1200.75,NULL),(13,'10','7',1,150,NULL),(14,'21','101',2,25,'50.00'),(15,'21','102',1,100,'100.00'),(16,'22','101',2,25,'50.00'),(17,'22','102',1,100,'100.00'),(18,'23','101',2,25,'50.00'),(19,'23','102',1,100,'100.00'),(20,'24','101',2,25,'50.00'),(21,'24','102',1,100,'100.00');
/*!40000 ALTER TABLE `tb_detalle_pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_estado`
--

DROP TABLE IF EXISTS `tb_estado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_estado` (
  `ID_ESTADO` int NOT NULL AUTO_INCREMENT,
  `DESCRIPCION` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `ESTADO` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`ID_ESTADO`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_estado`
--

LOCK TABLES `tb_estado` WRITE;
/*!40000 ALTER TABLE `tb_estado` DISABLE KEYS */;
INSERT INTO `tb_estado` VALUES (1,'Pendiente',1),(2,'Proceso',1),(3,'Iniciado',1),(4,'Prueba',0),(5,'XXX',1),(6,'zzzzz',1),(7,'AAAA',0),(8,'AAAA',0),(9,'Transicion Logitech',1),(10,'Transicion',1),(11,'Transicion PPPP',0);
/*!40000 ALTER TABLE `tb_estado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_marca`
--

DROP TABLE IF EXISTS `tb_marca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_marca` (
  `ID_MARCA` int NOT NULL AUTO_INCREMENT,
  `NOMBRE_MARCA` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `ESTADO` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`ID_MARCA`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_marca`
--

LOCK TABLES `tb_marca` WRITE;
/*!40000 ALTER TABLE `tb_marca` DISABLE KEYS */;
INSERT INTO `tb_marca` VALUES (1,'Samsung',1),(2,'Apple',1),(3,'Xiaomi',1),(4,'Huawei',1),(5,'Sony',1),(6,'LG',1),(7,'Motorola',1),(8,'Nokia',1),(9,'Lenovo',1),(10,'Asus',1),(11,'Acer',1),(12,'Dell',1),(13,'HP',1),(14,'Toshiba',1),(15,'Panasonic',1),(16,'Philips',1),(17,'Amazon Basics',1),(18,'Realme',1),(19,'OnePlus',1),(20,'Alcatel',1),(21,'Rusia',0),(22,'China',0),(23,'Prueba',1),(24,'Probando quede',0),(25,'Probando aquiiii',1),(26,'Renzo Costa',0);
/*!40000 ALTER TABLE `tb_marca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_pedidos`
--

DROP TABLE IF EXISTS `tb_pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_pedidos` (
  `ID_PEDIDO` int NOT NULL AUTO_INCREMENT,
  `ID_CLIENTE` int DEFAULT NULL,
  `FECHAREGISTRO` date DEFAULT NULL,
  `ID_ESTADO` int DEFAULT NULL,
  `DIRECCION` varchar(100) DEFAULT NULL,
  `UBIGEO` varchar(100) DEFAULT NULL,
  `MONTO_TOTAL` varchar(100) DEFAULT NULL,
  `ID_USUARIO` int DEFAULT NULL,
  PRIMARY KEY (`ID_PEDIDO`),
  KEY `FK_USUARIO_idx` (`ID_CLIENTE`),
  KEY `FK_ESTADO_idx` (`ID_ESTADO`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_pedidos`
--

LOCK TABLES `tb_pedidos` WRITE;
/*!40000 ALTER TABLE `tb_pedidos` DISABLE KEYS */;
INSERT INTO `tb_pedidos` VALUES (1,1,'2025-03-01',1,NULL,NULL,NULL,NULL),(2,2,'2025-03-02',2,NULL,NULL,NULL,NULL),(3,3,'2025-03-03',1,NULL,NULL,NULL,NULL),(4,4,'2025-03-04',3,NULL,NULL,NULL,NULL),(5,5,'2025-03-05',2,NULL,NULL,NULL,NULL),(6,6,'2025-03-06',1,NULL,NULL,NULL,NULL),(7,7,'2025-03-07',3,NULL,NULL,NULL,NULL),(8,8,'2025-03-08',1,NULL,NULL,NULL,NULL),(9,9,'2025-03-09',2,NULL,NULL,NULL,NULL),(10,10,'2025-03-10',3,NULL,NULL,NULL,NULL),(11,1,'2025-03-11',2,NULL,NULL,NULL,NULL),(12,2,'2025-03-12',1,NULL,NULL,NULL,NULL),(13,3,'2025-03-13',3,NULL,NULL,NULL,NULL),(14,4,'2025-03-14',1,NULL,NULL,NULL,NULL),(15,5,'2025-03-15',2,NULL,NULL,NULL,NULL),(16,6,'2025-03-16',3,NULL,NULL,NULL,NULL),(17,7,'2025-03-17',1,NULL,NULL,NULL,NULL),(18,8,'2025-03-18',2,NULL,NULL,NULL,NULL),(19,9,'2025-03-19',3,NULL,NULL,NULL,NULL),(20,10,'2025-03-20',1,NULL,NULL,NULL,NULL),(21,1,'2025-05-09',1,'Av. Los Olivos 123','150101','150.00',2),(22,1,'2025-05-09',1,'Av. Los Olivos 123','150101','150.00',2),(23,1,'2025-05-09',1,'Av. Los Olivos 123','150101','150.00',2),(24,1,'2025-05-09',1,'Av. Los Olivos 123','150101','150.00',2),(25,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(26,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(27,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(28,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(29,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(30,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(31,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `tb_pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_producto`
--

DROP TABLE IF EXISTS `tb_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_producto` (
  `ID_PRODUCTO` int NOT NULL AUTO_INCREMENT,
  `ID_MARCA` int DEFAULT NULL,
  `NOMBRE_PRODUCTO` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `PRECIO_PRODUCTO` double DEFAULT NULL,
  `DESCRIPCION_PRODUCTO` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `STOCK_PRODUCTO` int DEFAULT NULL,
  `ESTADO` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`ID_PRODUCTO`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_producto`
--

LOCK TABLES `tb_producto` WRITE;
/*!40000 ALTER TABLE `tb_producto` DISABLE KEYS */;
INSERT INTO `tb_producto` VALUES (1,1,'Galaxy S23',899.99,'Smartphone Samsung de alta gama con pantalla AMOLED',50,1),(2,2,'iPhone 14',999.99,'Último modelo de Apple con chip A16 Bionic',40,1),(3,3,'Redmi Note 12',249.99,'Teléfono económico con gran batería de Xiaomi',70,1),(4,4,'Huawei P60 Pro',749.99,'Cámara avanzada y diseño elegante de Huawei',35,1),(5,5,'Sony WH-1000XM5',349.99,'Audífonos inalámbricos con cancelación de ruido',60,1),(6,6,'LG OLED CX 55\"',1299.99,'Televisor OLED 4K con AI ThinQ de LG',15,1),(7,7,'Moto G Power',199.99,'Smartphone Motorola con batería de larga duración',80,1),(8,8,'Nokia G21',179.99,'Celular resistente con Android One',50,1),(9,9,'Lenovo IdeaPad 3',599.99,'Laptop básica para estudiantes y trabajo',25,1),(10,10,'Asus ROG Strix',1399.99,'Laptop gamer de alto rendimiento con GPU RTX',10,1),(11,11,'Acer Aspire 5',529.99,'Portátil versátil para uso diario',30,1),(12,12,'Dell XPS 13',1199.99,'Ultrabook con pantalla InfinityEdge',20,1),(13,13,'HP Pavilion 15',649.99,'Laptop confiable para oficina y hogar',45,1),(14,14,'Toshiba Canvio Basics 1TB',59.99,'Disco duro portátil USB 3.0',100,1),(15,15,'Panasonic Lumix G7',599.99,'Cámara sin espejo 4K de nivel medio',12,1),(16,16,'Philips Hue Starter Kit',179.99,'Kit de iluminación inteligente con 3 focos LED',40,1),(17,17,'Echo Dot (5ª gen)',49.99,'Altavoz inteligente con Alexa',90,1),(18,18,'Realme C55',199.99,'Teléfono económico con pantalla de 90Hz',60,1),(19,19,'OnePlus 11',699.99,'Smartphone flagship con rendimiento premium',30,1),(20,20,'Alcatel 1B',99.99,'Celular básico para uso cotidiano',75,1),(21,20,'Alcatel 1C',100,'Prueba',34,0),(22,2,'Prueba',2,'Prueba',1,1),(23,2,'Prueba',100,'AAAAA',34,1),(24,2,'Oculus',100,'Prueba',34,0),(25,NULL,'Iphone 16 PRO Max',199.99,'Teléfono económico con pantalla de 90Hz',60,1),(26,NULL,'Galaxy S50',899.99,'Smartphone Samsung de alta gama con pantalla AMOLED',50,0),(27,2,'Redmi Note 9000',300.99,'Teléfono de alta gama con gran batería XXXX',80,1),(28,2,'Redmi Note 9000',300.99,'Teléfono de alta gama con gran batería XXXX',80,1),(29,2,'Redmi Note practica',300.99,'Teléfono de alta gama con gran batería XXXX',80,1);
/*!40000 ALTER TABLE `tb_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_usuario`
--

DROP TABLE IF EXISTS `tb_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_usuario` (
  `ID_USUARIO` int NOT NULL AUTO_INCREMENT,
  `USER` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `PASSWORD` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `ESTADO` tinyint(1) DEFAULT NULL,
  `CORREO_USUARIO` varchar(100) DEFAULT NULL,
  `NRO_INTENTOS` int DEFAULT NULL,
  `OTP` varchar(20) DEFAULT NULL,
  `ROL` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`ID_USUARIO`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_usuario`
--

LOCK TABLES `tb_usuario` WRITE;
/*!40000 ALTER TABLE `tb_usuario` DISABLE KEYS */;
INSERT INTO `tb_usuario` VALUES (1,'lchirhuana','12345678',1,'lchirhuana@gmail.com',0,'123456','admin'),(2,'mariagarcia','pass123',1,'maria.garcia@example.com',4,'234567','customer'),(3,'luisramirez','pass123',1,'luis.ramirez@example.com',2,'345678','customer'),(4,'anatorres','pass123',0,'ana.torres@example.com',0,'456789','customer'),(5,'carlosfernandez','pass123',1,'carlos.fernandez@example.com',0,'567890','customer'),(6,'luciamorales','pass123',1,'lucia.morales@example.com',0,'678901','customer'),(7,'josevargas','pass123',0,'jose.vargas@example.com',0,'789012','customer'),(8,'carmenmedina','pass123',1,'carmen.medina@example.com',0,'890123','customer'),(9,'pedroreyes','pass123',1,'pedro.reyes@example.com',0,'901234','customer'),(10,'elenalopez','pass123',1,'elena.lopez@example.com',0,'012345','customer'),(11,'miguelsalazar','pass123',1,'miguel.salazar@example.com',0,'112233','customer'),(12,'paolachavez','pass123',1,'paola.chavez@example.com',0,'223344','customer'),(13,'alfredoparedes','pass123',0,'alfredo.paredes@example.com',0,'334455','customer'),(14,'dianavalverde','pass123',1,'diana.valverde@example.com',0,'445566','customer'),(15,'ricardopena','pass123',1,'ricardo.pena@example.com',0,'556677','customer'),(16,'rosacampos','pass123',0,'rosa.campos@example.com',0,'667788','customer'),(17,'jorgeibanez','pass123',1,'jorge.ibanez@example.com',0,'778899','customer'),(18,'valeriarios','pass123',1,'valeria.rios@example.com',0,'889900','customer'),(19,'fernandosilva','pass123',1,'fernando.silva@example.com',0,'990011','customer'),(20,'gabrielacruz','pass123',1,'gabriela.cruz@example.com',0,'101112','customer'),(21,'Pepito','olivar',1,'dayana.olivar@example.com',NULL,NULL,'customer'),(22,'pruebaaa','pruebaaa',NULL,NULL,NULL,'1','customer'),(23,'aaaa','aaaa',1,NULL,2,NULL,'customer'),(24,'bbbb','bbbb',0,NULL,NULL,'345678','customer'),(25,'bbbb','bbbb',1,'luis.ramirez@example.com',0,'345678','customer'),(26,'bbbb','bbbb',1,'luis.ramirez@example.com',0,'345678','customer'),(27,'zzzz','olivar',0,'dayana.olivar@example.com',0,'345678',NULL),(28,'XXXXX','olivar',1,'dayana.olivar@example.com',NULL,'345678','0'),(29,'XXXXX','olivar',0,'Daniela.olivar@example.com',345678,'0','customer'),(30,'Miguel','AAA',1,'miguel.olivar@example.com',0,'3451111678','customer'),(31,NULL,'olivar',1,'miguel.olivar@example.com',0,'345678','customer'),(32,'ZZZZ','olivar',1,'miguel.olivar@example.com',0,'345678','customer'),(33,'ZZZZ','olivar',1,'miguel.olivar@example.com',0,'345678','customer');
/*!40000 ALTER TABLE `tb_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'curso_desarrollo'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-12 22:25:30

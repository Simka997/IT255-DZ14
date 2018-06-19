-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 19, 2018 at 07:08 PM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `it255-dz13`
--

-- --------------------------------------------------------

--
-- Table structure for table `cvece`
--

CREATE TABLE `cvece` (
  `id` int(11) NOT NULL,
  `sifra` int(11) NOT NULL,
  `naziv` varchar(30) NOT NULL,
  `cena` bigint(1) NOT NULL,
  `opis` text NOT NULL,
  `cvet_tip_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cvece`
--

INSERT INTO `cvece` (`id`, `sifra`, `naziv`, `cena`, `opis`, `cvet_tip_id`) VALUES
(1, 33, 'ruza', 1500, 'lepo mirisr mitirdg', 1),
(4, 22, 'kaktus', 350, 'bode ko djavo', 5);

-- --------------------------------------------------------

--
-- Table structure for table `cvet_tip`
--

CREATE TABLE `cvet_tip` (
  `id` int(11) NOT NULL,
  `tip` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cvet_tip`
--

INSERT INTO `cvet_tip` (`id`, `tip`) VALUES
(1, 'lepo'),
(5, 'tropsko'),
(6, 'muva');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  `token` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `username`, `password`, `token`) VALUES
(13, 'djdh', 'fhdfdh', 'dfhdfdfh', '02c75fb22c75b23dc963c7eb91a062cc', 'd4953a27c0b72d87f822293cfedef0f3e34fe335'),
(22, 'fdhdfd', 'dhdf', 'fdhhd', '172522ec1028ab781d9dfd17eaca4427', '0153c694293aa91babc6360ee34b8f1f1845296f'),
(23, 'dhfd', 'dfhd', 'dgff', 'd07c80309ab133cb388aa6c6902a408e', '9bd5dcdf5bf2f9eb876a2fd9030c305b3aa8b6df'),
(26, 'simka', 'sim', 'simela', 'edb614d05362c3c2bb39cce64be968cc', '3e726fa4f4a25c14f96254aa1e17b1b1f8d38860'),
(27, 'asdfg', 'asdfsd', 'vlada', 'de83521973ca6a8a2ed28d590fc28074', 'ef80d72f141b463ef4407023f800e3c4f86905fc');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cvece`
--
ALTER TABLE `cvece`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cvet_ibfk_1` (`cvet_tip_id`);

--
-- Indexes for table `cvet_tip`
--
ALTER TABLE `cvet_tip`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cvece`
--
ALTER TABLE `cvece`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `cvet_tip`
--
ALTER TABLE `cvet_tip`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cvece`
--
ALTER TABLE `cvece`
  ADD CONSTRAINT `cvece_ibfk_1` FOREIGN KEY (`cvet_tip_id`) REFERENCES `cvet_tip` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

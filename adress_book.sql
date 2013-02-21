-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Erstellungszeit: 21. Februar 2013 um 16:55
-- Server Version: 5.1.44
-- PHP-Version: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Datenbank: `adress_book`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `adresses`
--

DROP TABLE IF EXISTS `adresses`;
CREATE TABLE IF NOT EXISTS `adresses` (
  `firstn` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `lastn` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `street` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `city` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `zipcode` int(11) NOT NULL,
  `birthday` date NOT NULL,
  `band` text NOT NULL,
  `favsong` text NOT NULL,
  `favkey` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `adresses`
--

INSERT INTO `adresses` (`firstn`, `lastn`, `street`, `city`, `zipcode`, `birthday`, `band`, `favsong`, `favkey`) VALUES('Ralf', 'Klingzapf', 'Reinhart Str. 22', 'Hamburg', 10722, '1982-02-19', 'Helpless Pretenders', 'Feed my Frankenstein', 'C#');
INSERT INTO `adresses` (`firstn`, `lastn`, `street`, `city`, `zipcode`, `birthday`, `band`, `favsong`, `favkey`) VALUES('Sepp', 'Wembelsteiner', 'Türinger Street 22', 'Munstershausen', 14222, '1981-03-02', 'Dunaway Rockers', 'Don''t let me down, baby', 'Ab');
INSERT INTO `adresses` (`firstn`, `lastn`, `street`, `city`, `zipcode`, `birthday`, `band`, `favsong`, `favkey`) VALUES('Hans', 'Meyer', 'Dobenstreet 00', 'Königsqusterhausen', 2132131, '2013-02-12', 'Seven Inch Shotguns', 'We don''t party at all', 'D#');

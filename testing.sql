-- phpMyAdmin SQL Dump
-- version 4.0.8
-- http://www.phpmyadmin.net
--
-- 主机: 127.0.0.1
-- 生成日期: 2013-11-24 17:01:08
-- 服务器版本: 5.6.14
-- PHP 版本: 5.4.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `test`
--

-- --------------------------------------------------------

--
-- 表的结构 `client_contact`
--

CREATE TABLE IF NOT EXISTS `client_contact` (
  `name` char(20) NOT NULL,
  `phno` bigint(20) NOT NULL,
  `email` char(40) DEFAULT NULL,
  `address` char(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `client_contact`
--

INSERT INTO `client_contact` (`name`, `phno`, `email`, `address`) VALUES
('杨七', 698754321, 'yangqi@gmail.com1', '浙江绍兴XX区XX路XX11'),
('加八', 21345678911, 'jiaba@gmail.com', '上海大学1号楼XX室'),
('麦斯', 111111111, 'maisi@gmail.com', '上海大学3号楼XX室'),
('原味', 1234567832242, 'yuanwei@126.com', '上海大学4号楼XX室'),
('洁云', 4321567821134, 'jieyun@gmail.com', '上海大学6号楼XX室'),
('评委', 1134567221, 'pingwei@163.com', '上海大学9号楼XX室'),
('家宝', 2345671813, 'jiabao@qq.com', '上海大学0号楼XX室'),
('氧吧', 90876543433, 'yangba@qq.com', '上海大学6号楼XX室'),
('回复', 432156789, 'huifu@gamil.com', '四川成都XX街');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

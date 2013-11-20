-- phpMyAdmin SQL Dump
-- version 4.0.8
-- http://www.phpmyadmin.net
--
-- 主机: 127.0.0.1
-- 生成日期: 2013-11-15 02:38:46
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
  `phno` int(11) NOT NULL,
  `email` char(40) DEFAULT NULL,
  `address` char(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `client_contact`
--

INSERT INTO `client_contact` (`name`, `phno`, `email`, `address`) VALUES
('张三', 123456789, 'zhangsan@gmail.com', '上海市XX区XX路XX号'),
('李四', 987654321, 'lisi@hotmail.com', '北京市XX区XX路XX'),
('王五', 213456789, 'wangwu@163.com', '浙江杭州XX区XX路XX'),
('张六', 312456789, 'zhangliu@gmail.com', '浙江宁波XX区XX路XX'),
('朱四', 412356789, 'zhusi@gmail.com', '浙江温州XX区XX路XX'),
('甘六', 162345789, 'ganliu@126.com', '浙江台州XX区XX路XX'),
('何八', 172345689, 'heba@gmail.com', '浙江湖州XX区XX路XX'),
('黑八', 182345679, '', '四川成都XX区XX路XX'),
('黑十', 198765432, 'heishi@126.com', ''),
('麦七', 192345678, 'maiqi@gmail.com', '四川乐山XX区XX路XX');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

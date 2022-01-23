/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50722
Source Host           : localhost:3306
Source Database       : react_admin_service

Target Server Type    : MYSQL
Target Server Version : 50722
File Encoding         : 65001

Date: 2022-01-23 18:02:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `admins`
-- ----------------------------
DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins` (
  `id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admins
-- ----------------------------
INSERT INTO `admins` VALUES ('17054370-6be0-11ec-90cf-4fd282e94d37', '金晨龙', '123', '0');
INSERT INTO `admins` VALUES ('9f0b8600-6be8-11ec-8830-a39e37e8ca91', '翁文凯', '123', '2');
INSERT INTO `admins` VALUES ('a2325df0-6be7-11ec-bbb9-958de707cafa', '赵宇洋', '123', '1');
INSERT INTO `admins` VALUES ('a79b72d0-6be8-11ec-8830-a39e37e8ca91', '戴崇特', '123', '3');
INSERT INTO `admins` VALUES ('acd3d030-6be8-11ec-8830-a39e37e8ca91', '崔家正', '123', '0');
INSERT INTO `admins` VALUES ('b40ba710-6be8-11ec-8830-a39e37e8ca91', '许成广', '123', '1');
INSERT INTO `admins` VALUES ('ba59e140-6be8-11ec-8830-a39e37e8ca91', '李娟', '123', '2');
INSERT INTO `admins` VALUES ('befbcb00-6be8-11ec-8830-a39e37e8ca91', '袁穗茹', '123', '3');
INSERT INTO `admins` VALUES ('c4d5e6a0-6be8-11ec-8830-a39e37e8ca91', '龙秋江', '123', '0');
INSERT INTO `admins` VALUES ('c9f9aa90-6be8-11ec-8830-a39e37e8ca91', '黄俊龙', '123', '1');
INSERT INTO `admins` VALUES ('d00bed30-6be8-11ec-8830-a39e37e8ca91', '丁磊', '123', '2');
INSERT INTO `admins` VALUES ('d4d4bfe0-6be8-11ec-8830-a39e37e8ca91', '雷军', '123', '3');
INSERT INTO `admins` VALUES ('d99ef220-6be8-11ec-8830-a39e37e8ca91', '潘俊可', '123', '0');
INSERT INTO `admins` VALUES ('de36a2b0-6be8-11ec-8830-a39e37e8ca91', '沈万三', '123', '1');
INSERT INTO `admins` VALUES ('e4ef8590-6be8-11ec-8830-a39e37e8ca91', '尹晓辉', '123', '2');
INSERT INTO `admins` VALUES ('e8f15ec0-6be8-11ec-8830-a39e37e8ca91', '叶晓辉', '123', '3');

-- ----------------------------
-- Table structure for `goods`
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `goodImg` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('803c6220-7c33-11ec-8439-2523948e3602', 'test1', 'test1', '/images/803906c0-7c33-11ec-8439-2523948e3602.jpg;/images/8039f120-7c33-11ec-8439-2523948e3602.jpg');

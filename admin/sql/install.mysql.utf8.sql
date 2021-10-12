CREATE TABLE IF NOT EXISTS `#__webstories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_date` datetime,
  `markup` longtext,
  `title` varchar(255) DEFAULT 'untitled',
  `modified_date` datetime,
  `created_by` datetime,
  `published` tinyint(1) NOT NULL DEFAULT 0,
  `post_content_filtered` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 DEFAULT COLLATE=utf8mb4_unicode_ci;
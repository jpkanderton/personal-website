CREATE DATABASE IF NOT EXISTS portfolio_website;

USE portfolio_website;

CREATE TABLE IF NOT EXISTS contact_messages (
  message_id INT AUTO_INCREMENT,
  date_time NOW(),
  name VARCHAR(250),
  email VARCHAR(250),
  message_content VARCHAR(2000)
);
CREATE DATABASE vip_match;
USE vip_match;

-- المستخدمين
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE,
    password VARCHAR(255) NOT NULL,
    telegram VARCHAR(255),
    role ENUM('user','vip','admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- البطولات
CREATE TABLE leagues (
    id INT AUTO_INCREMENT PRIMARY KEY,
    league_name VARCHAR(255) NOT NULL,
    country VARCHAR(100),
    logo TEXT
);

-- المباريات
CREATE TABLE matches (
    id INT AUTO_INCREMENT PRIMARY KEY,
    api_match_id BIGINT UNIQUE,
    league_id INT,
    home_team VARCHAR(255),
    away_team VARCHAR(255),
    match_date DATETIME,
    status VARCHAR(50),
    home_score INT DEFAULT 0,
    away_score INT DEFAULT 0,
    FOREIGN KEY (league_id) REFERENCES leagues(id)
);

-- التوقعات المجانية
CREATE TABLE free_predictions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    match_id INT,
    prediction TEXT,
    predicted_score VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (match_id) REFERENCES matches(id)
);

-- توقعات VIP
CREATE TABLE vip_predictions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    match_id INT,

    first_half_goals VARCHAR(50),
    second_half_goals VARCHAR(50),

    first_half_score VARCHAR(20),
    second_half_score VARCHAR(20),

    final_score VARCHAR(20),

    first_half_cards VARCHAR(20),
    second_half_cards VARCHAR(20),
    total_cards VARCHAR(20),

    first_half_corners VARCHAR(20),
    second_half_corners VARCHAR(20),
    total_corners VARCHAR(20),

    first_scorer VARCHAR(255),
    winner VARCHAR(255),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (match_id) REFERENCES matches(id)
);

-- الاشتراكات
CREATE TABLE subscriptions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    price DECIMAL(12,2),
    duration_days INT
);

INSERT INTO subscriptions(name,price,duration_days) VALUES
('يومي',20000,1),
('أسبوعي',100000,7),
('شهري',250000,30),
('سنوي',1050000,365);

-- اشتراكات المستخدمين
CREATE TABLE user_subscriptions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    subscription_id INT,
    start_date DATETIME,
    end_date DATETIME,
    status ENUM('active','expired','pending') DEFAULT 'pending',

    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(subscription_id) REFERENCES subscriptions(id)
);

-- المدفوعات
CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    amount DECIMAL(12,2),
    payment_method ENUM(
        'BaridiMob',
        'CCP',
        'RedotPay',
        'Binance'
    ),
    transaction_id VARCHAR(255),
    payment_status ENUM(
        'pending',
        'success',
        'failed'
    ) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(user_id) REFERENCES users(id)
);

-- الإحصائيات المباشرة
CREATE TABLE live_stats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    match_id INT,

    minute INT DEFAULT 0,

    home_corners INT DEFAULT 0,
    away_corners INT DEFAULT 0,

    home_cards INT DEFAULT 0,
    away_cards INT DEFAULT 0,

    home_shots INT DEFAULT 0,
    away_shots INT DEFAULT 0,

    possession_home INT DEFAULT 0,
    possession_away INT DEFAULT 0,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(match_id) REFERENCES matches(id)
);
CREATE TABLE users (
    user_id bigserial PRIMARY KEY,
    user_name VARCHAR(500) NOT NULL,
    user_password VARCHAR(250) NOT NULL
);

CREATE TABLE admins (
    admin_id bigserial,
    admin_name VARCHAR(500) NOT NULL,
    admin_password VARCHAR(250) NOT NULL
);


CREATE TABLE Restarans (
    restaran_id bigserial PRIMARY KEY,
    restaran_name VARCHAR(600) NOT NULL,
    restaran_photo text DEFAULT 'https://thumbs.dreamstime.com/b/restaurant-cozy-restaran-decorated-table-reserve-table-47763370.jpg',
    restaran_type VARCHAR(100) NOT NULL
);

CREATE TABLE food (
    food_id bigserial PRIMARY KEY,
    food_name VARCHAR(350) NOT NULL,
    food_foto text DEFAULT 'https://img.myloview.com/stickers/food-icon-thin-linear-food-outline-icon-isolated-on-white-background-line-vector-food-sign-symbol-for-web-and-mobile-700-253584229.jpg',
    food_price BIGINT NOT NULL,
    food_Restarans BIGINT REFERENCES Restarans(restaran_id) ON DELETE CASCADE
);

CREATE TABLE korzinka (
    korzina_id bigserial PRIMARY KEY,
    korzina_user BIGINT REFERENCES users(user_id),
    korzina_food BIGINT REFERENCES food(food_id),
    korzina_number BIGINT NOT NULL
);

CREATE TABLE zakazs (
    zakaz_id bigserial PRIMARY KEY,
    zakaz_adres_shaxar VARCHAR(500) NOT NULL,
    zakaz_adres_tuman VARCHAR(500) NOT NULL,
    zakaz_adres_toliq VARCHAR(1000) NOT NULL,
    zakaz_username VARCHAR(1500) NOT NULL,
    zakaz_tel BIGINT NOT NULL,
    zakaz_food text NOT NULL,
    zakaz_clock text NOT NULL,
    zakaz_user BIGINT REFERENCES users(user_id),
    is_complect VARCHAR(20) DEFAULT 'false'
);

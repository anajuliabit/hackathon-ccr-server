set -e

psql -U postgres -d postgres -c "CREATE DATABASE prisma WITH ENCODING='UTF8' OWNER=postgres CONNECTION LIMIT=-1;"
psql -U postgres -d prisma -c "CREATE TABLE \"public\".\"User\" (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) DEFAULT '' NOT NULL
);

CREATE TABLE \"public\".\"Journey\"(
    id SERIAL PRIMARY KEY NOT NULL,
    jumpingOff VARCHAR(255) NOT NULL,
    destination VARCHAR(255) NOT NULL,
    inputtime DATE NOT NULL DEFAULT date(now()),
    outputTime DATE NOT NULL
);
"
-- CreateTable
CREATE TABLE "message" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "message" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "channel_id" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "deleted" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "friendship" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id1" INTEGER NOT NULL,
    "user_id2" INTEGER NOT NULL,
    "date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "friend_requests" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id1" INTEGER NOT NULL,
    "user_id2" INTEGER NOT NULL,
    "date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "blocked_users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id1" INTEGER NOT NULL,
    "user_id2" INTEGER NOT NULL,
    "date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "channel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "user_channel_relation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id1" INTEGER NOT NULL,
    "channel_id" INTEGER NOT NULL
);

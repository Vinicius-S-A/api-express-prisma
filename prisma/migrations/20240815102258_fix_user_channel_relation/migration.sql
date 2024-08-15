/*
  Warnings:

  - You are about to drop the column `user_id1` on the `user_channel_relation` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `user_channel_relation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_user_channel_relation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "channel_id" INTEGER NOT NULL
);
INSERT INTO "new_user_channel_relation" ("channel_id", "id") SELECT "channel_id", "id" FROM "user_channel_relation";
DROP TABLE "user_channel_relation";
ALTER TABLE "new_user_channel_relation" RENAME TO "user_channel_relation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

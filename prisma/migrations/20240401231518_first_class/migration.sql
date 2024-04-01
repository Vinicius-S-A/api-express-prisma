-- CreateTable
CREATE TABLE "ClasseSQL" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "ClasseSQL_email_key" ON "ClasseSQL"("email");

-- CreateTable
CREATE TABLE "Artwork" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "file" TEXT,
    "year" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL
);

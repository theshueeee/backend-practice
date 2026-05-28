/*
  Warnings:

  - You are about to drop the column `createdBy` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Movie" DROP CONSTRAINT "Movie_createdBy_fkey";

-- DropForeignKey
ALTER TABLE "WatchlistItem" DROP CONSTRAINT "WatchlistItem_userId_fkey";

-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "createdBy";

-- DropTable
DROP TABLE "User";

/*
  Warnings:

  - Added the required column `expire` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `expire` DATETIME(3) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL;

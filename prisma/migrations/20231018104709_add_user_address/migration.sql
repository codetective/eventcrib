/*
  Warnings:

  - A unique constraint covering the columns `[user_address]` on the table `Event` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_address` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Event` ADD COLUMN `user_address` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Event_user_address_key` ON `Event`(`user_address`);

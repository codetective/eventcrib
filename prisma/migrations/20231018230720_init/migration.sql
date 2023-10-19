-- CreateTable
CREATE TABLE `Category` (
    `id` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `category_name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Category_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Event` (
    `id` VARCHAR(191) NOT NULL,
    `user_address` VARCHAR(191) NOT NULL,
    `event_name` VARCHAR(191) NOT NULL,
    `event_desc` VARCHAR(191) NOT NULL,
    `event_info` LONGTEXT NOT NULL,
    `event_type` VARCHAR(191) NOT NULL,
    `website` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `attendees` INTEGER NOT NULL,
    `start_date` VARCHAR(191) NOT NULL,
    `end_date` VARCHAR(191) NOT NULL,
    `time` VARCHAR(191) NOT NULL,
    `banner` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Event_user_address_key`(`user_address`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Event` (
    `id` VARCHAR(191) NOT NULL,
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

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

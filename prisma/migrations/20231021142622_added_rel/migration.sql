-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `Event`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

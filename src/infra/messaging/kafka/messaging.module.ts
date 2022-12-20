import { Module } from '@nestjs/common';
import { KafkaConsumerService } from './kafka-consumer.service';
import { NotificationsController } from './controllers/notifications-controller';
import { SendNotification } from '@application/use-cases/send-notification';
import { databaseModule } from '@infra/database/database.module';

@Module({
  imports: [databaseModule],
  providers: [SendNotification, KafkaConsumerService],
  controllers: [NotificationsController],
})
export class MessagingModule {}

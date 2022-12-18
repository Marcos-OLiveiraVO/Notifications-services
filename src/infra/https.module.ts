import { Module } from '@nestjs/common';
import { NotificationsController } from './https/controllers/notifications.controller';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { databaseModule } from './database/database.module';

@Module({
  imports: [databaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}

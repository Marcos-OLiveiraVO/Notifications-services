import { Module } from '@nestjs/common';
import { NotificationsController } from './https/controllers/notifications.controller';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { databaseModule } from './database/database.module';
import { CancelNotification } from '@application/use-cases/cancel-notifcations';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/use-cases/get-recipients-notifications';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnReadNotification } from '@application/use-cases/unread-notification';

@Module({
  imports: [databaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnReadNotification,
  ],
})
export class HttpModule {}

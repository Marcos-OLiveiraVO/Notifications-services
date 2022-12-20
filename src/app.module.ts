import { Module } from '@nestjs/common';
import { HttpModule } from './infra/https.module';
import { databaseModule } from './infra/database/database.module';
import { MessagingModule } from '@infra/messaging/kafka/messaging.module';

@Module({
  imports: [HttpModule, databaseModule, MessagingModule],
})
export class AppModule {}

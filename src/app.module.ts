import { Module } from '@nestjs/common';
import { HttpModule } from './infra/https.module';
import { databaseModule } from './infra/database/database.module';

@Module({
  imports: [HttpModule, databaseModule],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { NotificationsRepository } from 'src/application/repositories/notifications-repository';
import { PrismaNotificationsRepository } from './prisma/prisma-notificaitons-repository.ts/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class databaseModule {}

import { OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';
import { Injectable } from '@nestjs/common';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['brief-mongrel-8363-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'YnJpZWYtbW9uZ3JlbC04MzYzJMS_qpZat0SJMXwU5hg97nW-aYCWdNC5sxpJeDc',
          password:
            'or6IgVk4n_Sg8LdSGJ1eYLygyg8rLz-mjKyqtahfCLrgMZCWiKXp3Zvo9bUxFvJFDZWzLg==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}

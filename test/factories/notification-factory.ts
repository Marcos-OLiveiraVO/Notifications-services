import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type override = Partial<NotificationProps>;

export function makeNotification(override: override = {}) {
  return new Notification({
    recipientId: 'recipient-2',
    category: 'social',
    content: new Content('Voce tem uma nova solicitação de amizade!'),
    ...override,
  });
}

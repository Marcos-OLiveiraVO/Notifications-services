import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Voce tem uma nova notificação !'),
      category: 'Social',
      recipientId: 'exemplo-recipient-id',
    });
    expect(notification).toBeTruthy();
  });
});

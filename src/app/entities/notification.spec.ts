import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  test('it shold be able to create a notification', () => {
    const content = new Notification({
      content: new Content('Você recebeu uma nova solicitação de amizade'),
      category: 'social',
      recipientId: 'recepient-id',
    });

    expect(content).toBeTruthy();
  });
});

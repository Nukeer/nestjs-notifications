import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotification } from './count-recipient-notification';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipient notification', () => {
  it('shold be able to count recipient notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotification(
      notificationsRepository,
    );

    const notifications = [
      makeNotification({
        recipientId: 'recepient-id',
      }),
      makeNotification({
        recipientId: 'recepient-id',
      }),
      makeNotification({
        recipientId: 'recepient-id-2',
      }),
    ];

    for await (const notification of notifications) {
      await notificationsRepository.create(notification);
    }

    const { count } = await countRecipientNotification.execute({
      recipientId: 'recepient-id',
    });

    expect(count).toEqual(2);
  });
});

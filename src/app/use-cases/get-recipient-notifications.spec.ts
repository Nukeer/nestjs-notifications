import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';
import { GetRecipientNotification } from './get-recipient-notifications';

describe('Count recipient notification', () => {
  it('shold be able to count recipient notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotification = new GetRecipientNotification(
      notificationsRepository,
    );

    const notificationsList = [
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

    for await (const notification of notificationsList) {
      await notificationsRepository.create(notification);
    }

    const { notifications } = await getRecipientNotification.execute({
      recipientId: 'recepient-id',
    });

    expect(notifications).toHaveLength(2);

    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recepient-id' }),
        expect.objectContaining({ recipientId: 'recepient-id' }),
      ]),
    );
  });
});

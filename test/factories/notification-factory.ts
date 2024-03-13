import { Content } from '@app/entities/content';
import { Notification, NotificationProps } from '@app/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}): Notification {
  return new Notification({
    content: new Content('Você recebeu uma nova solicitação de amizade'),
    category: 'social',
    recipientId: 'recepient-id',
    ...override,
  });
}

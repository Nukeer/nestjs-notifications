import { Replace } from 'src/helpers/Replace';
import { Content } from './content';
import { randomUUID } from 'crypto';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
  canceledAt?: Date | null;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(
    props: Replace<NotificationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  get id() {
    return this._id;
  }

  set recipientId(value) {
    this.props.recipientId = value;
  }

  get recipientId() {
    return this.props.recipientId;
  }

  set content(value) {
    this.props.content = value;
  }

  get content() {
    return this.props.content;
  }

  set category(value) {
    this.props.category = value;
  }

  get category() {
    return this.props.category;
  }

  read() {
    this.props.readAt = new Date();
  }

  unread() {
    this.props.readAt = null;
  }

  get readAt() {
    return this.props.readAt;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  cancel() {
    this.props.canceledAt = new Date();
  }

  get canceledAt() {
    return this.props.canceledAt;
  }
}

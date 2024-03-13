import { Content } from './content';

describe('Notification content', () => {
  test('it shold be able to create a notification content', () => {
    const content = new Content('Você recebeu uma nova solicitação de amizade');

    expect(content).toBeTruthy();
  });

  test('it shold not be able to create a notification content with less than 5 caracters', () => {
    expect(() => new Content('new')).toThrow();
  });

  test('it shold not be able to create a notification content with more than 240 caracters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});

import { handler } from '../index';

test('Deve criar um novo Helpinho', async () => {
  const event = {
    body: JSON.stringify({ title: 'Test Help', description: 'Test description' }),
  };
  const result = await handler(event as any, {} as any, {} as any);
  expect(result.statusCode).toBe(201);
});

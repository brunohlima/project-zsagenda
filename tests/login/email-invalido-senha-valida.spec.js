import { test, expect } from '@playwright/test';

test('CT-003 - E-mail inválido e senha válida', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel(/e-mail/i).fill('email.invalido.com');
  await page.getByTestId('input-password').fill(process.env.TEST_PASSWORD);

  await page.getByRole('button', { name: 'Acessar', exact: true }).click();

  const emailValido = await page.getByLabel(/e-mail/i).evaluate(
  campo => campo.validity.valid
);

expect(emailValido).toBe(false);
});

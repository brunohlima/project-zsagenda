import { test, expect } from '@playwright/test';

test('CT-002 - E-mail válido e senha inválida', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel(/e-mail/i).fill(process.env.TEST_USER);
  await page.getByTestId('input-password').fill('SenhaIncorreta123');

  await page.getByRole('button', { name: 'Acessar', exact: true }).click();

  await expect(
    page.getByText('E-mail ou senha incorretos.')
  ).toBeVisible();
});

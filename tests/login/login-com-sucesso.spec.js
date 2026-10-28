import { test, expect } from '@playwright/test';

test('CT-004 - Login com sucesso', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel(/e-mail/i).fill(process.env.TEST_USER);
  await page.getByTestId('input-password').fill(process.env.TEST_PASSWORD);

  await page.getByRole('button', { name: 'Acessar', exact: true }).click();

  await expect(
    page.getByText('Login realizado com sucesso!', { exact: true })
  ).toBeVisible();
});
import { test, expect } from '@playwright/test';

test('CT-001 - Campos vazios', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('button', { name: 'Acessar', exact: true }).click();

  await expect(page.getByText('E-mail inválido')).toBeVisible();
  await expect(page.getByText('informe a senha')).toBeVisible();
});

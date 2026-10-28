import { test, expect } from '@playwright/test';

test('Deve acessar a tela de login do Zsgenda', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('button', { name: 'Acessar', exact: true })
  ).toBeVisible();
});
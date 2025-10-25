import { test, expect } from '@playwright/test';

test('Login com dados incorretos ', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page.getByText('Swag Labs')).toBeVisible();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('invalid_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('invalidpassword');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});
test('Login com sucesso', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  await page.getByText('Swag Labs').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="title"]').click();
});
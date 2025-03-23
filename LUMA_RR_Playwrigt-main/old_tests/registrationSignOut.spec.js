import { test, expect } from "@playwright/test";

test.describe('sign out', () => {

    const email = 'kat123@gmail.com';
    const password = 'Password!';

  test.beforeEach(async ({ page }) => {

    await page.goto('/');

  })
  test('should be a greeting with the users name ', async ({page }) => {

        const email = 'katikati3@gmail.com';
        const password = 'Password!';

        await page.getByRole('link', { name: 'Sign In' }).click();
		await page.getByLabel('Email', { exact: true }).fill(email);
		await page.getByLabel('Password').fill(password);
		await page.getByRole('button', { name: 'Sign In' }).click();
        await page.waitForTimeout(3000);
        await page.locator('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.greet.welcome > span');
        await expect(page.locator('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li.greet.welcome > span')).toBeVisible();
 })

 test('drop-down menu should open', async ({ page }) => {

    await page.getByRole('link', { name: 'Sign In' }).click();
    await page.getByLabel('Email', { exact: true }).fill(email);
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('banner').locator('button').filter({ hasText: 'Change' }).click();
    // await page.getByRole('banner').getByText('My Account My Wish List Sign');
    await expect(page.getByRole('banner').getByText('My Account My Wish List Sign')).toBeTruthy();
 })

 test('should be the "Log out" link, the user logs out of his account by clicking on it', async ({ page }) => {

  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByLabel('Email', { exact: true }).fill(email);
  await page.getByLabel('Password').fill(password);
  await page.getByRole('button', { name: 'Sign In' }).click();

  await page.waitForTimeout(3000);
  await page.getByRole('banner').locator('button').filter({ hasText: 'Change' }).click();
  await expect(page.getByRole('link', { name: 'Sign Out' })).toHaveCSS('cursor', 'pointer');
  await page.getByRole('link', { name: 'Sign Out' }).click();
  await expect(page).toHaveURL('https://magento.softwaretestingboard.com/customer/account/logoutSuccess/');

 })

})

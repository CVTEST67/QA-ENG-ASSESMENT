const { test, expect } = require('@playwright/test');

test('SauceDemo - Full Checkout Flow', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  // LOGIN
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // wait for products page
  await expect(page.locator('.inventory_list')).toBeVisible();

  // ADD TO CART
  await page.click('#add-to-cart-sauce-labs-backpack');

  // GO TO CART
  await page.click('.shopping_cart_link');

  // CHECKOUT
  await page.click('#checkout');

  // FILL INFO
  await page.fill('#first-name', 'John');
  await page.fill('#last-name', 'Doe');
  await page.fill('#postal-code', '12345');

  await page.click('#continue');

  // FINISH
  await page.click('#finish');

  // ASSERT SUCCESS PAGE
  await expect(page.locator('.complete-header')).toContainText('Thank you');
});
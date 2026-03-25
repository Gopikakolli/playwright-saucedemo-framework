import { test, expect } from '@playwright/test'

test('user can login and add product to cart', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/')

  await page.fill('#user-name', 'standard_user')
  await page.fill('#password', 'secret_sauce')
  await page.click('#login-button')

  await page.click('#add-to-cart-sauce-labs-backpack')
  await page.click('.shopping_cart_link')

  await expect(page.locator('.inventory_item_name'))
    .toContainText('Sauce Labs Backpack')

})
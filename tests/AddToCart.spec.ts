import {test, expect} from '@playwright/test'
import { PageManager } from '../Utils/PageManager.ts'

test.beforeEach(async ({ page }) => {
  const pm = new PageManager(page)
  const loginPage = pm.onLoginPage()

  await loginPage.navigate()
  await loginPage.login('standard_user', 'secret_sauce')
});

test('add product to cart', async({page}) =>{
    const pm = new PageManager(page)
    const inventoryPage = pm.onInventoryPage()

    await inventoryPage.addBackpackToCart()
    await inventoryPage.gotoCart()

    await expect(page.locator('.inventory_item_name')).toContainText('Sauce Labs Backpack')
})




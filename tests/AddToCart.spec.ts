import { test, expect } from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'
import { InventoryPage } from '../page-objects/InventoryPage'

test('user can login and add product to cart', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)

     await loginPage.navigate()
     await loginPage.login('standard_user', 'secret_sauce')

     await expect(page).toHaveURL(/inventory/)

     await inventoryPage.addBackpackToCart()
     await inventoryPage.gotoCart()

     await expect(page.locator('.inventory_item_name')).toContainText('Sauce Labs Backpack')
})

  


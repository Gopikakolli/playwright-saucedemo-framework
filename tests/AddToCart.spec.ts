import{ test, expect} from '@playwright/test'
import { LoginPage } from '../Page-Objects/LoginPage'
import { InventoryPage } from '../Page-Objects/inventoryPage'


test('login and add product to cart', async({page}) => {
    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)

    await loginPage.navigate()
    await loginPage.login('standard_user', 'secret_sauce')

    await inventoryPage.addBackpackToCart()
    await inventoryPage.gotoCart()

    await expect(page.locator('.inventory_item_name')).toContainText('Sauce Labs Backpack')
})




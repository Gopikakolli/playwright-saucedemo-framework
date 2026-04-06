import { test, expect} from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'

test(' Login with invalid credentials', async({page}) =>{
    const loginPage = new LoginPage(page)

    await loginPage.navigate()
    await loginPage.login('invalid_user', 'wrong_password')

    //Assertion
    await expect(loginPage.errorMessage()).toBeVisible()
    await expect(loginPage.errorMessage()).toContainText('Username and Password doi not match')
})
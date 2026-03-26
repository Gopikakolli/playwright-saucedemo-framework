import { Page } from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'
import { InventoryPage } from '../page-objects/InventoryPage'

export class PageManager{
    private readonly loginPage : LoginPage
    private readonly inventoryPage : InventoryPage

    constructor(page : Page){
        this.loginPage = new LoginPage(page)
        this.inventoryPage = new InventoryPage(page)
    }

    onLoginPage() {
        return this.loginPage
    }

    onInventoryPage() {
        return this.inventoryPage
        }

}
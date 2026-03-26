import{ Page } from '@playwright/test'

export class InventoryPage{
    private readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async addBackpackToCart() {
        await this.page.click('#add-to-cart-sauce-labs-backpack')
    }

    async gotoCart(){
        await this.page.click('.shopping_cart_link')

    }
}
import { Page,Locator, expect } from '@playwright/test';

interface LoginPageElements {
    cartItem: Locator;
    cart: Locator;
    itemInCart:Locator;
}
export class TestCart {
    private readonly page: Page;
    elements: LoginPageElements;
    constructor(page:Page){
        this.page = page;
        this.elements = {
        cartItem: page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button'),
            cart: page.locator('.fa-shopping-cart'),
            itemInCart : page.locator('//*[@id="cart_contents_container"]/div/div[1]/div[3]')
        };
        
    }
    async addToCart(){
        await this.elements.cartItem.click();
        await  this.elements.cart.click();
        await expect(this.page.url()).toMatch('https://www.saucedemo.com/v1/cart.html')
        await expect(this.elements.itemInCart).toBeVisible()
    }
} 
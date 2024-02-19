import { Page,Locator, expect } from '@playwright/test';

interface LoginPageElements {
    checkoutBtn: Locator;
    firstName: Locator;
    lastName:Locator;
    postalCode:Locator;
    continueBtn:Locator;
    checkoutItem:Locator;
    finishBtn:Locator;
}

export class TestCheckOut{
    private readonly page: Page;
    elements: LoginPageElements;
    constructor(page:Page){
        this.page = page;
        this.elements = {
        checkoutBtn: page.getByRole('link', { name: 'CHECKOUT' }),
            firstName: page.locator('[data-test="firstName"]'),
            lastName : page.locator('[data-test="lastName"]'),
            postalCode : page.locator('[data-test="postalCode"]'),
            continueBtn : page.getByRole('button', { name: 'CONTINUE' }),
            checkoutItem:page.getByText('1Sauce Labs Backpackcarry.'),
            finishBtn : page.getByRole('link', { name: 'FINISH' }),
        };
        
    }
    async checkout (){
        await this.elements.checkoutBtn.click();
        await expect(this.page.url()).toBe('https://www.saucedemo.com/v1/checkout-step-one.html');
        await this.elements.firstName.fill('John');
        await this.elements.lastName.fill('Doe');
        await this.elements.postalCode.fill('94085');
        await this.elements.continueBtn.click();
        await expect(this.page.url()).toBe('https://www.saucedemo.com/v1/checkout-step-two.html');
        await expect(this.elements.checkoutItem).toBeVisible();
        await this.elements.finishBtn.click();
        await expect(this.page.url()).toBe('https://www.saucedemo.com/v1/checkout-complete.html');
    }

} 
import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/Login'
import {GoToFn} from '../pages/GoTo'
import {TestCart} from '../pages/Cart'
import { TestCheckOut } from '../pages/CheckOut';

test.describe(()=>{

    test.beforeEach( async ({ page }) => {
        const Login = new LoginPage(page)
        const  GoTo = new GoToFn(page) 
        await GoTo.goto('https://www.saucedemo.com/v1/')
        await Login.login('standard_user', 'secret_sauce')
    })
    test('add to cart and view cart' , async({page})=>{
        
        const Cart =  new TestCart(page)
        await Cart.addToCart()
    })
    test('checkout' , async({page})=>{
        
        const Cart =  new TestCart(page)
        await Cart.addToCart()

        const Checkout = new TestCheckOut(page)
        await Checkout.checkout()
        
    })
    test.afterEach(async ({page}) =>{
        await page.close()
    })
})
//login
// await page.goto('https://www.saucedemo.com/v1/');
// await page.locator('[data-test="username"]').click();
// await page.locator('[data-test="username"]').fill('standard_user');
// await page.locator('[data-test="password"]').click();
// await page.locator('[data-test="password"]').fill('secret_sauce');
// await page.getByRole('button', { name: 'LOGIN' }).click();

//cart
// await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
// await page.getByRole('link', { name: '1' }).click();

//checkout
// await page.getByRole('link', { name: 'CHECKOUT' }).click();
// await page.locator('[data-test="firstName"]').click();
// await page.locator('[data-test="firstName"]').fill('Jhon');
// await page.locator('[data-test="lastName"]').click();
// await page.locator('[data-test="lastName"]').fill('Tame');
// await page.locator('[data-test="postalCode"]').click();
// await page.locator('[data-test="postalCode"]').fill('38000');
// await page.getByRole('button', { name: 'CONTINUE' }).click();
// await page.getByRole('link', { name: 'FINISH' }).click();

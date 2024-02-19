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

import { test, expect } from '@playwright/test';
import exp from 'constants';

test('test login', async ({ page }) => {
    //going to the link
  await page.goto('https://www.saucedemo.com/v1/');
  await page.pause()
  // adding username
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  // validating password
  await expect.soft(page.locator('[data-test="username"]')).toHaveValue('standard_user');
  //adding password
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  // validating password
  await expect.soft(page.locator('[data-test="password"]')).toHaveValue('secret_sauce');
  // clicking on login button
  await page.getByRole('button', { name: 'LOGIN' }).click();
  // checking the page url and validated
  const currentUrl = await page.url();
  await expect(currentUrl).toBe('https://www.saucedemo.com/v1/inventory.html')
  //add to cart
  await page.locator('#inventory_container > div > div:nth-child(1) > div.pricebar > button').click();
  // checking chart
  await page.locator('#shopping_cart_container').click();
  await expect(page.url()).toBe('https://www.saucedemo.com/v1/cart.html')
    if(await page.$('[class="cart_item"]')){
        await await page.locator('//a[text()="CHECKOUT"]').click();
    }
    //filling checkout information
    await expect(page.url()).toBe('https://www.saucedemo.com/v1/checkout-step-one.html')
    await page.locator(`#first-name`).fill('John')
    await page.locator(`#last-name`).fill('Tame')
    await page.locator(`#postal-code`).fill('3800')
    await page.getByRole('button', { name: 'CONTINUE' }).click();
    //checking checkout overview
    await expect(page.url()).toBe('https://www.saucedemo.com/v1/checkout-step-two.html')
    await page.waitForSelector('#checkout_summary_container > div > div.cart_list > div.cart_item')
    if(await page.$('[class="cart_item"]')){
        await page.locator('//a[text()="FINISH"]').click();
    }
    await expect(page.url()).toBe('https://www.saucedemo.com/v1/checkout-complete.html')   
});
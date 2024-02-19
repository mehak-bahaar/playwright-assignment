import { Page,Locator } from '@playwright/test';
interface LoginPageElements {
    usernameTextbox: Locator;
    passwordTextbox: Locator;
    loginButton: Locator;
}
export class LoginPage {
    private readonly page: Page;
    elements: LoginPageElements;
    constructor(page:Page){
        this.page = page;
        this.elements = {
        usernameTextbox: page.locator('[data-test="username"]'),
            passwordTextbox: page.locator('[data-test="password"]'),
            loginButton: page.getByRole('button', { name: 'LOGIN' })
        };

    }
    async login (username:string, password:string){
        await this.elements.usernameTextbox.fill(username);
        await this.elements.passwordTextbox.fill(password);
        await this.elements.loginButton.click();
    }
}
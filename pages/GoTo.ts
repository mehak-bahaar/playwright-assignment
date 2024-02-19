import { Page,Locator } from '@playwright/test';
export class GoToFn {
    page:any;
    constructor(page:Page) {
        this.page = page
    }
    async goto (url:string){
        this.page.goto(url);
    }
}
import { expect } from '@playwright/test';

export class InventoryPage {
  constructor(page) {
    this.page = page;

    this.pageTitle = page.getByText('Products', { exact: true });
    this.backpackName = page.getByText('Sauce Labs Backpack', { exact: true });
    this.addBackpackToCartButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );
    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
    this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async verifyProductsPage() {
    await expect(this.pageTitle).toBeVisible();
  }

  async addBackpackToCart() {
    await expect(this.backpackName).toBeVisible();
    await this.addBackpackToCartButton.click();
    await expect(this.shoppingCartBadge).toHaveText('1');
  }

  async openCart() {
    await this.shoppingCartLink.click();
  }
}
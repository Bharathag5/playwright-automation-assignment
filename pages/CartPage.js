import { expect } from '@playwright/test';

export class CartPage {
  constructor(page) {
    this.page = page;

    this.pageTitle = page.getByText('Your Cart', { exact: true });
    this.backpackName = page.getByText('Sauce Labs Backpack', { exact: true });
    this.itemQuantity = page.locator('[data-test="item-quantity"]');
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  }

  async verifyCart() {
    await expect(this.pageTitle).toBeVisible();
    await expect(this.backpackName).toBeVisible();
    await expect(this.itemQuantity).toHaveText('1');
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}
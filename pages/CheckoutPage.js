import { expect } from '@playwright/test';

export class CheckoutPage {
  constructor(page) {
    this.page = page;

    // Checkout: Your Information
    this.informationPageTitle = page.getByText('Checkout: Your Information', {
      exact: true,
    });
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
    this.postalCodeInput = page.getByRole('textbox', {
      name: 'Zip/Postal Code',
    });
    this.continueButton = page.getByRole('button', { name: 'Continue' });

    // Checkout: Overview
    this.overviewPageTitle = page.getByText('Checkout: Overview', {
      exact: true,
    });
    this.backpackName = page.getByText('Sauce Labs Backpack', { exact: true });
    this.itemPrice = page.locator('[data-test="inventory-item-price"]');
    this.subtotal = page.locator('[data-test="subtotal-label"]');
    this.tax = page.locator('[data-test="tax-label"]');
    this.total = page.locator('[data-test="total-label"]');
    this.finishButton = page.getByRole('button', { name: 'Finish' });

    // Checkout: Complete
    this.completePageTitle = page.getByText('Checkout: Complete!', {
      exact: true,
    });
    this.confirmationHeader = page.getByText('Thank you for your order!', {
      exact: true,
    });
    this.confirmationMessage = page.locator('[data-test="complete-text"]');
  }

  async verifyInformationPage() {
    await expect(this.informationPageTitle).toBeVisible();
  }

  async enterCustomerInformation(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

  async verifyOrderOverview(expectedProduct, expectedOrder) {
    await expect(this.overviewPageTitle).toBeVisible();
    await expect(this.backpackName).toHaveText(expectedProduct.name);
    await expect(this.itemPrice).toHaveText(expectedProduct.price);
    await expect(this.subtotal).toHaveText(expectedOrder.subtotal);
    await expect(this.tax).toHaveText(expectedOrder.tax);
    await expect(this.total).toHaveText(expectedOrder.total);
}

  async completeOrder() {
    await this.finishButton.click();
  }

  async verifyOrderConfirmation() {
    await expect(this.completePageTitle).toBeVisible();
    await expect(this.confirmationHeader).toHaveText('Thank you for your order!');
    await expect(this.confirmationMessage).toHaveText(
      'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
    );
  }
}
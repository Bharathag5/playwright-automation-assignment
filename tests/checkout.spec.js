import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';
import { checkoutData } from '../test-data/checkoutData.js';

test.describe('SauceDemo checkout workflow', () => {
  test('should successfully purchase a Sauce Labs Backpack', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await test.step('Login and verify the Products page', async () => {
      await loginPage.goto();
      await loginPage.login(
        checkoutData.user.username,
        checkoutData.user.password
      );
      await inventoryPage.verifyProductsPage();
    });

    await test.step('Add Sauce Labs Backpack to the cart', async () => {
      await inventoryPage.addBackpackToCart();
      await inventoryPage.openCart();
    });

    await test.step('Verify the cart and proceed to checkout', async () => {
      await cartPage.verifyCart();
      await cartPage.proceedToCheckout();
    });

    await test.step('Enter customer checkout information', async () => {
      await checkoutPage.verifyInformationPage();
      await checkoutPage.enterCustomerInformation(
        checkoutData.customer.firstName,
        checkoutData.customer.lastName,
        checkoutData.customer.postalCode
      );
    });

    await test.step('Verify the product and order summary', async () => {
      await checkoutPage.verifyOrderOverview(
        checkoutData.product,
        checkoutData.order
  );
});

    await test.step('Complete the order and verify confirmation', async () => {
      await checkoutPage.completeOrder();
      await checkoutPage.verifyOrderConfirmation();
    });
  });
});
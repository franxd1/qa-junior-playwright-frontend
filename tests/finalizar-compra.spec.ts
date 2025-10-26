import { test, expect } from '@playwright/test';

test('Finalizar uma compra', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="inventory-item"]').nth(0)).toBeVisible();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('1');

    await expect(page.locator('[data-test="inventory-item"]').nth(1)).toBeVisible();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('2');

    await expect(page.locator('[data-test="inventory-item"]').nth(2)).toBeVisible();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText('3');

    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('[data-test="title"]')).toContainText('Your Cart');
    const QuantidaItens = await page.locator('.inventory_item_price').count();

    let precoProduto = 0;
    for (let i = 0; i < QuantidaItens; i++) {
        let stringValor = await page.locator('.inventory_item_price').nth(i).innerText();
        let valorProduto = converterParaNumero(stringValor.replace('$', '').replace('"', '').trim());
        precoProduto += valorProduto
    }

    const valorTotal = converterParaNumero(CalcularTaxa(precoProduto).toFixed(2));


    await expect(page.locator('[data-test="checkout"]').nth(0)).toBeVisible();
    await page.locator('[data-test="checkout"]').click();
    await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Your Information');

    await page.locator('[data-test="firstName"]').fill('Francisco');
    await page.locator('[data-test="lastName"]').fill('Alves');
    await page.locator('[data-test="postalCode"]').fill('9999-999');
    await page.locator('[data-test="continue"]').click();
    await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Overview');

    let valorTotalSauceDemo = await page.locator('.summary_total_label').innerText();

    let valorTotalSauceDemoFomatado = converterParaNumero(valorTotalSauceDemo.replace('Total: $', '').replace('"', '').trim());

    expect(valorTotal).toEqual(valorTotalSauceDemoFomatado)
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="title"]')).toContainText('Checkout: Complete!');
    await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');


});



function CalcularTaxa(precoProduto: number) {
    const tax = 0.08 * precoProduto
    return precoProduto + tax
}

function converterParaNumero(texto: string) {
    return parseFloat(texto);
}
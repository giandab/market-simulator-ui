// @ts-check
import { test, expect } from '@playwright/test';
import { assert } from 'console';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });


const testUsername = "test1"
const testPassword = "test1"
let body = {"username":testUsername,"password":testPassword}

test('sign up', async ({ page }) => {
  await page.goto('http://localhost:3001/');
  await expect(page).toHaveTitle("Market Simulator");

  //go to signup page
  await page.getByRole('button',{ name: 'Signup' }).click()
  await expect(page.getByRole('heading', { name: 'Signup' })).toBeVisible();

  //fill out signup form
  await page
    .getByPlaceholder('username')
    .fill(testUsername);
  await page
    .getByPlaceholder('password')
    .fill(testPassword);

  await page.getByRole('button', { name: 'Signup' }).click();
  await expect(page.getByText("You can now login")).toBeVisible();

//Delete user we just created
  let response = await fetch("http://127.0.0.1:8000/deleteUser",{method:"POST",body:JSON.stringify(body),headers: {
          "Content-type": "application/json",
        },})
    console.log(await response.text())
});
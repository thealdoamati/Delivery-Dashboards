import { test, expect } from '@playwright/test';

test('sign in succesfully', async ({ page }) => {
  await page.goto('/sign-in');

});

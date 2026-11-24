import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

// ─── Table Rendering ────────────────────────────────────────────────────────

test('renders the table with data-testid="table"', async ({ page }) => {
  await expect(page.getByTestId('table')).toBeVisible();
});

test('renders 4 initial employee rows', async ({ page }) => {
  const table = page.getByTestId('table');
  const rows = table.locator('tbody tr');
  await expect(rows).toHaveCount(4);
});

test('renders correct initial employee names', async ({ page }) => {
  const rows = page.getByTestId('table').locator('tbody tr');
  await expect(rows.nth(0).locator('td').nth(0)).toHaveText('Eric Liu');
  await expect(rows.nth(1).locator('td').nth(0)).toHaveText('Emily Ferguson');
  await expect(rows.nth(2).locator('td').nth(0)).toHaveText('John Doe');
  await expect(rows.nth(3).locator('td').nth(0)).toHaveText('Jane Smith');
});

test('renders correct initial employee positions', async ({ page }) => {
  const rows = page.getByTestId('table').locator('tbody tr');
  await expect(rows.nth(0).locator('td').nth(1)).toHaveText('Product Manager');
  await expect(rows.nth(1).locator('td').nth(1)).toHaveText('Backend Engineer');
});

// ─── Employee Salary Div / Input ─────────────────────────────────────────────

test('salary divs are visible initially for all employees', async ({ page }) => {
  for (let i = 1; i <= 4; i++) {
    await expect(page.getByTestId(`employee-salary-div-${i}`)).toBeVisible();
  }
});

test('salary divs show correct initial salary values', async ({ page }) => {
  await expect(page.getByTestId('employee-salary-div-1')).toHaveText('1000');
  await expect(page.getByTestId('employee-salary-div-2')).toHaveText('2000');
  await expect(page.getByTestId('employee-salary-div-3')).toHaveText('3000');
  await expect(page.getByTestId('employee-salary-div-4')).toHaveText('4000');
});

test('salary input is not visible initially', async ({ page }) => {
  await expect(page.getByTestId('employee-salary-input-1')).not.toBeVisible();
});

test('clicking salary div makes it editable (shows input, hides div)', async ({ page }) => {
  await page.getByTestId('employee-salary-div-1').click();
  await expect(page.getByTestId('employee-salary-input-1')).toBeVisible();
  await expect(page.getByTestId('employee-salary-div-1')).not.toBeVisible();
});

test('salary input has the current salary value after clicking', async ({ page }) => {
  await page.getByTestId('employee-salary-div-1').click();
  await expect(page.getByTestId('employee-salary-input-1')).toHaveValue('1000');
});

// ─── Save Button ──────────────────────────────────────────────────────────────

test('Save buttons are disabled initially', async ({ page }) => {
  for (let i = 1; i <= 4; i++) {
    await expect(page.getByTestId(`employee-save-button-${i}`)).toBeDisabled();
  }
});

test('Save button remains disabled when salary input value is unchanged', async ({ page }) => {
  await page.getByTestId('employee-salary-div-1').click();
  await expect(page.getByTestId('employee-save-button-1')).toBeDisabled();
});

test('Save button becomes enabled when salary input is changed to a different value', async ({ page }) => {
  await page.getByTestId('employee-salary-div-1').click();
  await page.getByTestId('employee-salary-input-1').fill('9999');
  await expect(page.getByTestId('employee-save-button-1')).toBeEnabled();
});

test('Save button is disabled when salary input is cleared', async ({ page }) => {
  await page.getByTestId('employee-salary-div-1').click();
  await page.getByTestId('employee-salary-input-1').fill('');
  await expect(page.getByTestId('employee-save-button-1')).toBeDisabled();
});

test('clicking Save updates the salary and returns to non-editable state', async ({ page }) => {
  await page.getByTestId('employee-salary-div-1').click();
  await page.getByTestId('employee-salary-input-1').fill('5555');
  await page.getByTestId('employee-save-button-1').click();

  await expect(page.getByTestId('employee-salary-div-1')).toBeVisible();
  await expect(page.getByTestId('employee-salary-div-1')).toHaveText('5555');
  await expect(page.getByTestId('employee-salary-input-1')).not.toBeVisible();
});

test('clicking Save disables the Save button again', async ({ page }) => {
  await page.getByTestId('employee-salary-div-1').click();
  await page.getByTestId('employee-salary-input-1').fill('5555');
  await page.getByTestId('employee-save-button-1').click();
  await expect(page.getByTestId('employee-save-button-1')).toBeDisabled();
});

test('saving one employee does not affect another employee salary', async ({ page }) => {
  await page.getByTestId('employee-salary-div-1').click();
  await page.getByTestId('employee-salary-input-1').fill('9999');
  await page.getByTestId('employee-save-button-1').click();

  await expect(page.getByTestId('employee-salary-div-2')).toHaveText('2000');
});

// ─── AddEmployee Component ────────────────────────────────────────────────────

test('Add button is disabled initially', async ({ page }) => {
  await expect(page.getByTestId('add-employee-button')).toBeDisabled();
});

test('Add button remains disabled when only name is filled', async ({ page }) => {
  await page.getByTestId('add-employee-name-input').fill('New Person');
  await expect(page.getByTestId('add-employee-button')).toBeDisabled();
});

test('Add button remains disabled when only name and position are filled', async ({ page }) => {
  await page.getByTestId('add-employee-name-input').fill('New Person');
  await page.getByTestId('add-employee-position-input').fill('Engineer');
  await expect(page.getByTestId('add-employee-button')).toBeDisabled();
});

test('Add button becomes enabled when all fields are filled', async ({ page }) => {
  await page.getByTestId('add-employee-name-input').fill('New Person');
  await page.getByTestId('add-employee-position-input').fill('Engineer');
  await page.getByTestId('add-employee-salary-input').fill('5000');
  await expect(page.getByTestId('add-employee-button')).toBeEnabled();
});

test('clicking Add adds a new row to the table', async ({ page }) => {
  await page.getByTestId('add-employee-name-input').fill('New Person');
  await page.getByTestId('add-employee-position-input').fill('Engineer');
  await page.getByTestId('add-employee-salary-input').fill('5000');
  await page.getByTestId('add-employee-button').click();

  const rows = page.getByTestId('table').locator('tbody tr');
  await expect(rows).toHaveCount(5);
});

test('new employee row shows correct name, position, and salary', async ({ page }) => {
  await page.getByTestId('add-employee-name-input').fill('New Person');
  await page.getByTestId('add-employee-position-input').fill('Engineer');
  await page.getByTestId('add-employee-salary-input').fill('5000');
  await page.getByTestId('add-employee-button').click();

  const rows = page.getByTestId('table').locator('tbody tr');
  const newRow = rows.nth(4);
  await expect(newRow.locator('td').nth(0)).toHaveText('New Person');
  await expect(newRow.locator('td').nth(1)).toHaveText('Engineer');
  await expect(page.getByTestId('employee-salary-div-5')).toHaveText('5000');
});

test('clicking Add resets the input fields', async ({ page }) => {
  await page.getByTestId('add-employee-name-input').fill('New Person');
  await page.getByTestId('add-employee-position-input').fill('Engineer');
  await page.getByTestId('add-employee-salary-input').fill('5000');
  await page.getByTestId('add-employee-button').click();

  await expect(page.getByTestId('add-employee-name-input')).toHaveValue('');
  await expect(page.getByTestId('add-employee-position-input')).toHaveValue('');
  await expect(page.getByTestId('add-employee-salary-input')).toHaveValue('');
});

test('Add button is disabled again after adding an employee', async ({ page }) => {
  await page.getByTestId('add-employee-name-input').fill('New Person');
  await page.getByTestId('add-employee-position-input').fill('Engineer');
  await page.getByTestId('add-employee-salary-input').fill('5000');
  await page.getByTestId('add-employee-button').click();

  await expect(page.getByTestId('add-employee-button')).toBeDisabled();
});

test('new employee has a unique incremental ID (salary-div testid)', async ({ page }) => {
  await page.getByTestId('add-employee-name-input').fill('Person A');
  await page.getByTestId('add-employee-position-input').fill('Role A');
  await page.getByTestId('add-employee-salary-input').fill('1111');
  await page.getByTestId('add-employee-button').click();

  await page.getByTestId('add-employee-name-input').fill('Person B');
  await page.getByTestId('add-employee-position-input').fill('Role B');
  await page.getByTestId('add-employee-salary-input').fill('2222');
  await page.getByTestId('add-employee-button').click();

  await expect(page.getByTestId('employee-salary-div-5')).toHaveText('1111');
  await expect(page.getByTestId('employee-salary-div-6')).toHaveText('2222');
});

test('new employee Save button is disabled initially', async ({ page }) => {
  await page.getByTestId('add-employee-name-input').fill('New Person');
  await page.getByTestId('add-employee-position-input').fill('Engineer');
  await page.getByTestId('add-employee-salary-input').fill('5000');
  await page.getByTestId('add-employee-button').click();

  await expect(page.getByTestId('employee-save-button-5')).toBeDisabled();
});

test('new employee salary is editable after clicking the salary div', async ({ page }) => {
  await page.getByTestId('add-employee-name-input').fill('New Person');
  await page.getByTestId('add-employee-position-input').fill('Engineer');
  await page.getByTestId('add-employee-salary-input').fill('5000');
  await page.getByTestId('add-employee-button').click();

  await page.getByTestId('employee-salary-div-5').click();
  await expect(page.getByTestId('employee-salary-input-5')).toBeVisible();
  await expect(page.getByTestId('employee-salary-input-5')).toHaveValue('5000');
});

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('My Login application', () => {
  it('should login with valid credentials', async () => {
    await LoginPage.open();
    await console.log('completed');
    await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');
  });
});

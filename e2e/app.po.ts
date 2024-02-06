import { browser, by, element } from 'protractor';

export class AppPage {
/**
 * @description Navigates to the home page.
 * 
 * @returns { Promise } The function navigateto returns a Promise that resolves to
 * an instance of the ' Puppeteer browser'.
 */
  navigateTo() {
    return browser.get('/');
  }

/**
 * @description Retrieves the paragraph text by accessing the element using
 * by.css('app-root h1') and getting its text using getText().
 * 
 * @returns { string } The output of getParagraphText() is the text content of the
 * first h1 element found within the app-root component.
 */
  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}

import { browser, by, element } from 'protractor';

export class AppPage {
/**
 * @description This `navigateTo()` function navigates the browser to the home page.
 * 
 * @returns { object } The function `navigateTo()` returns a promise that resolves
 * to a `browser.get('/')` request. This means that the browser will navigate to the
 * root page ("/") and then resolve the promise.
 * 
 * In other words , the output of this function is a resolved promise with the value
 * of the browser's current URL set to "/".
 */
  navigateTo() {
    return browser.get('/');
  }

/**
 * @description The `getParagraphText()` function uses `element(by.css('app-root
 * h1'))` to select an element with the class "h1" within the root element of the
 * application ("app-root"), and then invokes `getText()` on that element to retrieve
 * its text content as a string.
 * 
 * @returns { string } The `getParagraphText()` function uses the `element(by.css()`
 * method to select the first `<h1>` element within the `#app-root` element and then
 * uses the `getText()` method to retrieve the text content of that element.
 * 
 * The output returned by this function is the text content of the first `<h1>` element
 * within the `#app-root` element.
 */
  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}

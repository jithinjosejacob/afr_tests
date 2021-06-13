const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
    /**
     * define selectors using getter methods
     */
    // Popup selector
    // TODO:Change Popup locator here.
    get popupContent() { return $(`//div[@data-testid='PaywallPrompt']`) }

    // Hyperlink in the bottom
    get hyperLink() { return $("//a[contains(text(),'Site Map')]") }

    /**
     * a method to encapsule automation code to interact with the page
     */
    // Verify that popup is displayed.
    // TODO:Uncomment wait for in both cases once locator is available.
    verifyPopUp(Visibility) {
        if (Visibility === 'Can See'){
            //this.popupContent.waitForDisplayed();
        }
        else if (Visibility === 'Can See'){
            //this.popupContent.waitForDisplayed({ reverse: true })
        }
    }

    navigateToBottom() {
        this.hyperLink.waitForExist();
        this.hyperLink.scrollIntoView();
        browser.pause(10000);
    }
}

module.exports = new LandingPage();

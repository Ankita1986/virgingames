package com.virgingames.pages;

import com.cucumber.listener.Reporter;
import com.virgingames.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/**
 * Created by Ankita
 */
public class HomePage extends Utility {
    /**
     * logger defined to print log
     */

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    /**
     * Stored elements locator
     */

    @FindBy(xpath = "//a[contains(text(),'Login')]")
    WebElement _loginLink;

    /**
     * Below methods to action on elements
     */

    public void clickOnLoginLink() {
        Reporter.addStepLog("Clicking on login link " + _loginLink.toString());
        clickOnElement(_loginLink);
        log.info("Clicking on login link " + _loginLink.toString());

    }


}

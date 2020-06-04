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
public class LoginPage extends Utility {

    /**
     * logger defined to print log
     */

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    /**
     * Stored elements locator
     */

    @FindBy(xpath= "//input[@placeholder='Username or Email']")
    WebElement _emailField;


    @FindBy(xpath = "//input[@id='field-password']")
    WebElement _passwordField;

    @FindBy(xpath = "//button[@class='button button-login']")
    WebElement _loginBtn;

    @FindBy(xpath = "//div[@class='output']")
    WebElement _errorMessage;

    /**
     * Below methods to action on elements
     */

    public void enterEmailId(String email) {
        Reporter.addStepLog("Entering emailId : " +email+ "in the email field" + _emailField.toString());
        sendTextToElement(_emailField, email);
        log.info("Entering emailId : " +email+ "in the email field" + _emailField.toString());
    }

    public void enterPassword(String password) {
        Reporter.addStepLog("Entering password : " +password+ "in the password field" +_passwordField.toString());
        sendTextToElement(_passwordField, password);
        log.info("Entering password : " +password+ "in the password field" +_passwordField.toString());
    }

    public void clickOnLoginButton() {
        Reporter.addStepLog("Clicking on login button : " + _loginBtn.toString());
        clickOnElement(_loginBtn);
        log.info("Clicking on login button : " + _loginBtn.toString());
    }

    public String getErrorMessage() {
        Reporter.addStepLog("Getting error message from : " + _errorMessage.toString());
        log.info("Getting error message from : " + _errorMessage.toString());
        return getTextFromElement(_errorMessage);
    }

}

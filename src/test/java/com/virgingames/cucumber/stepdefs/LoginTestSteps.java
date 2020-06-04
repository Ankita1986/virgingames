package com.virgingames.cucumber.stepdefs;

import com.virgingames.pages.HomePage;
import com.virgingames.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

/**
 * Created by Ankita
 */
public class LoginTestSteps {
    @Given("^I am on Virgingames homepage$")
    public void iAmOnVirgingamesHomepage() {
    }

    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email){
        new LoginPage().enterEmailId(email);

    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password)  {
        new LoginPage().enterPassword(password);

    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I should see the error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String errorMessage)  {
        Assert.assertEquals(new LoginPage().getErrorMessage(), errorMessage);


    }

}

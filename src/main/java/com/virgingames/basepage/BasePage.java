package com.virgingames.basepage;

import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by Ankita
 */
public class BasePage {
    /**
     * Define webdriver
     */
    public static WebDriver driver;

    /**
     * Define constructor with log4j path
     */

    public BasePage() {
        PageFactory.initElements(driver, this);
        PropertyConfigurator.configure(System.getProperty("user.dir") + "/src/test/java/com/virgingames/resources/propertiesfile/log4j.properties");

    }
}

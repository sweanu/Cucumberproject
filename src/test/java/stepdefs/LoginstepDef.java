package stepdefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginstepDef {
	
	WebDriver driver=HooksClass.driver;
	
	@Given("I have launched the application")
	public void i_have_launched_the_application() {
		driver.get("https://www.simplilearn.com/");
	}

	@Given("I click on login link")
	public void i_click_on_login_link() {
		WebElement login=driver.findElement(By.linkText("Log in"));
		login.click();
	}

	@When("I enter the username")
	public void i_enter_the_username() {
		WebElement Username=driver.findElement(By.name("user_login"));
		Username.sendKeys("sweanuta3459@gmail.com");
	}

	@When("I enter the password")
	public void i_enter_the_password() {
		WebElement password=driver.findElement(By.id("password"));
		password.sendKeys("Sweanumitha@05");
	}

	@When("I click the login button")
	public void i_click_the_login_button() {
		WebElement loginbtn=driver.findElement(By.name("btn_login"));
		loginbtn.click();
	}

	@Then("I should land on home page")
	public void i_should_land_on_home_page() {
	 
	}

	@Then("I should get an error message")
	public void i_should_get_an_error_message() {
		WebElement error=driver.findElement(By.className("error_msg"));
		String errormsg=error.getText();
		String experrormsg="The email or password you have entered is invalid.";
		Assert.assertEquals(errormsg, experrormsg);
	}

	@When("I enter the username as {string}")
	public void i_enter_the_username_as(String usernameval) {
		WebElement Username=driver.findElement(By.name("user_login"));
		Username.sendKeys(usernameval);
	}

	@When("I enter the password as {string}")
	public void i_enter_the_password_as(String passwordval) {
		WebElement password=driver.findElement(By.id("password"));
		password.sendKeys(passwordval);
	}

	@Then("I should get an error message as {string}")
	public void i_should_get_an_error_message_as(String expError) {
		WebElement error=driver.findElement(By.className("error_msg"));
		String errormsg=error.getText();
		Assert.assertEquals(errormsg, expError);
	}

}

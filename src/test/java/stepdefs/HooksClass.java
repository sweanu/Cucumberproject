package stepdefs;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;

public class HooksClass {
	
	public static WebDriver driver;
	
	
	@Before("@Browser")
	public void setup()
	{
		WebDriverManager.firefoxdriver().setup();
		driver= new FirefoxDriver();
		//driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
	}
	
	@After("@Browser")
	public void Teardown()
	{
		driver.quit();
	}
}

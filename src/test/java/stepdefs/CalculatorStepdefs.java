package stepdefs;

import java.util.List;

import org.junit.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class CalculatorStepdefs {

	int num1;
	int num2;
	int result=0;
	List<Integer> val;
	
	
	@Given("I have two numbers {int} and {int}")
	public void i_have_two_numbers_and(int int1, int int2) {
	    // Write code here that turns the phrase above into concrete actions
	   this.num1=int1;
	   this.num2=int2;
	}

	@When("I add those two numbers")
	public void i_add_those_two_numbers() {
	    // Write code here that turns the phrase above into concrete actions
	   result=num1+num2;
	}

	@Then("I should get the result as {int}")
	public void i_should_get_the_result_as(int expResult) {
	    // Write code here that turns the phrase above into concrete actions
	    Assert.assertEquals(expResult, result);
	}

	@When("I sub those two numbers")
	public void i_sub_those_two_numbers() {
	    // Write code here that turns the phrase above into concrete actions
	    result=num1-num2;
	}
	@Given("I have below numbers")
	public void i_have_below_numbers(List<Integer> number) {
	   this.val=number;
		
	}

	@When("I add those numbers")
	public void i_add_those_numbers() {
		for(int num:val)
	    {
	    	result=result+num;
	    }
	}
}

	
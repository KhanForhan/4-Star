package mydefinitions;

import java.util.List;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginDefinitions {
	
	@Given("^User is on Home Page of abc\\.com$")
	public void user_is_on_Home_Page_of_abc_com() throws Throwable {

		System.out.println("User logs in");
	}

	@When("^User Navigate to LogIn Page$")
	public void user_Navigate_to_LogIn_Page() throws Throwable {

		System.out.println("User logs in");
	}

	@When("^User enters UserName$")
	public void user_enters_UserName() throws Throwable {

		System.out.println("User logs in");
	}

	@When("^User enters Password$")
	public void user_enters_Password() throws Throwable {

		System.out.println("User logs in");
	}

	@Then("^A Message  will  display a successful messaage$")
	public void a_Message_will_display_a_successful_messaage() throws Throwable {

		System.out.println("User logs in");
	}

	@When("^User LogOut from the Application$")
	public void user_LogOut_from_the_Application(DataTable dt) throws Throwable {

		List<List<String>> de = dt.raw();
		
		System.out.println(de.get(0).get(0));
		
		System.out.println(de.get(0).get(1));
		
         System.out.println(de.get(2).get(0));
		
		System.out.println(de.get(2).get(1));
		
		System.out.println("User logs in");
	}

	@Then("^Message displayed LogOut Successfully$")
	public void message_displayed_LogOut_Successfully() throws Throwable {

		System.out.println("User logs in");
	}

}

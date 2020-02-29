package myrunners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/myFeatures", glue= {"mydefinitions"},
 tags = {"@table"}, plugin ={"pretty" , "json:cucumber.json"}, monochrome = true)
public class TestRunner {
	


}

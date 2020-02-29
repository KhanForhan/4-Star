$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("End2End.feature");
formatter.feature({
  "line": 2,
  "name": "This feature file is related to an end to end scenario",
  "description": "\nAs a user I want to buy a product and pay for it.",
  "id": "this-feature-file-is-related-to-an-end-to-end-scenario",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@End2End"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "User successfully logs in to the abc.com",
  "description": "",
  "id": "this-feature-file-is-related-to-an-end-to-end-scenario;user-successfully-logs-in-to-the-abc.com",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User opens his browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User types the abc.com in his address bar",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user lands into abc.com home page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "he will put his username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "he will click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "he will see he has been logged in successfully to his accoutn",
  "keyword": "And "
});
formatter.match({
  "location": "EndToEndDefinitons.user_opens_his_browser()"
});
formatter.result({
  "duration": 114076436,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndDefinitons.user_types_the_abc_com_in_his_address_bar()"
});
formatter.result({
  "duration": 18628,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndDefinitons.user_lands_into_abc_com_home_page()"
});
formatter.result({
  "duration": 26486,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndDefinitons.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 18407,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndDefinitons.he_will_put_his_username_and_password()"
});
formatter.result({
  "duration": 19347,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndDefinitons.he_will_click_on_the_login_button()"
});
formatter.result({
  "duration": 18523,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndDefinitons.he_will_see_he_has_been_logged_in_successfully_to_his_accoutn()"
});
formatter.result({
  "duration": 17300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User can select his favourite product",
  "description": "",
  "id": "this-feature-file-is-related-to-an-end-to-end-scenario;user-can-select-his-favourite-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "user already in his home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user searches something in the search bar",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user hits the search button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user can select his product",
  "keyword": "Then "
});
formatter.match({
  "location": "EndToEndDefinitons.user_already_in_his_home_page()"
});
formatter.result({
  "duration": 35124,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndDefinitons.user_searches_something_in_the_search_bar()"
});
formatter.result({
  "duration": 25399,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndDefinitons.user_hits_the_search_button()"
});
formatter.result({
  "duration": 55157,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndDefinitons.user_can_select_his_product()"
});
formatter.result({
  "duration": 45491,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User puts his product into the cart",
  "description": "",
  "id": "this-feature-file-is-related-to-an-end-to-end-scenario;user-puts-his-product-into-the-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@CartRelated"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user is in add to cart page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user clicks on the add to cart button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the product goes into the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "EndToEndDefinitons.user_is_in_add_to_cart_page()"
});
formatter.result({
  "duration": 64449,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndDefinitons.user_clicks_on_the_add_to_cart_button()"
});
formatter.result({
  "duration": 25312,
  "status": "passed"
});
formatter.match({
  "location": "EndToEndDefinitons.the_product_goes_into_the_cart()"
});
formatter.result({
  "duration": 31607,
  "status": "passed"
});
});
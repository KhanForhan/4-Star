@End2End
Feature: This feature file is related to an end to end scenario

As a user I want to buy a product and pay for it.

Scenario: User successfully logs in to the abc.com
Given User opens his browser
Then User types the abc.com in his address bar
And user lands into abc.com home page
When User clicks on login button
Then he will put his username and password
And he will click on the login button
And he will see he has been logged in successfully to his accoutn


Scenario: User can select his favourite product
Given user already in his home page
When user searches something in the search bar
Then user hits the search button
Then user can select his product 

@CartRelated
Scenario: User puts his product into the cart
Given user is in add to cart page
When user clicks on the add to cart button
Then the product goes into the cart



Scenario: User puts his product into the cart
Given user is in add to cart page
When user clicks on the add to cart button
Then the product goes into the cart













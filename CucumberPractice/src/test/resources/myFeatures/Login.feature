@LogIn
Feature: This feature file will test the login functionality

@Data
Scenario Outline: Successful Login with Valid Credentials
 Given User is on Home Page of abc.com
 When User Navigate to LogIn Page
 And User enters <UserName>
 And User enters <Password>
 Then A Message  will  display a successful messaage
 Examples:
 |UserName|Password|
 |Faruq|1234|
 |Rezaul|3456|
 |Forhan|5678|
 
 

 @table
Scenario: Successful LogOut
 When User LogOut from the Application
 |Faruq|1234|
 |Rezaul|3456|
 |Forhan|5678|
 Then Message displayed LogOut Successfully
 
 
 
 
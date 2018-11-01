Feature: Say hello to visitor
  Scenario: Display a welcome message
    Given a visitor visits our website
    When the home page is loaded
    Then he should see a message saying "Welcome Visitor !"

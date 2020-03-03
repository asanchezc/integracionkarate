Feature: Test Empleo
  Background:
    * url apiURL
    * def randomnumber = Math.random()
    * def name = 'hardwareandro-'+randomnumber

  @getEmpleados
  Scenario: Get all employee data
    Given url apiURL
    And path 'listclientes'
    When method GET
    Then status 200
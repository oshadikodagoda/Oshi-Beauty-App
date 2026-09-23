Feature: Bundle Discount
  As a shopper on Oshi Beauty
  I want to add bundle deals to my cart
  So that I receive automatic discounts on multiple products

  Scenario: Add Skincare Bundle with 15% discount
    Given I am on the Offers page
    When I click "Shop Now" on the "Skincare Bundle"
    And I confirm the dialog
    Then the "Skincare Bundle" is added to my cart
    And the bundle discount is 15%

  Scenario: Cancel adding a bundle
    Given I am on the Offers page
    When I click "Shop Now" on the "Makeup Bundle"
    And I cancel the dialog
    Then the cart remains empty

  Scenario: Cart discount updates total
    Given I have a "Skincare Bundle" in my cart
    When I go to the cart page
    Then I see the bundle discount applied to the subtotal
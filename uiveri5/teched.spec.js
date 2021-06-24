require("./pages/product");
require("./pages/home");

describe("teched", function () {

  it(" should validate the home screen", function () {
    Then.onTheHomePage.iShouldSeeAllCategories();
    expect(true).toBeTruthy();
  });

  it("should search for a product", function () {
    When.onTheHomePage.iSearchForProduct();
    Then.onTheHomePage.theProductListShouldBeFiltered();
  });
  it("Should navigate to the product", function () {
    When.onTheHomePage.iSelectTheFirstProduct();
    Then.onTheProductPage.theProductTitleIsShown();
    Then.onTheProductPage.theProductCouldBeOrdered();
  });



  it("should see the Home page", function () {
    // call the page object's actions and assertions:
    // When.onTheHomePage.iDoSomething();
    // Then.onTheHomePage.iAssertSomething();
  });

  it("should see the Product page", function () {
    // call the page object's actions and assertions:
    // When.onTheProductPage.iDoSomething();
    // Then.onTheProductPage.iAssertSomething();
  });

});

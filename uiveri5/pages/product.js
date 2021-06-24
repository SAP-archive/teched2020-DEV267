const { expect } = require("chai");

module.exports = createPageObjects({
  Product: {
    actions: {
      // add action functions here
      
    },
    assertions: {
      // add assertion functions here
      theProductTitleIsShown: function () {
        element(by.control({
            controlType: "sap.m.ObjectHeader",
            viewId: "container-cart---product",
            bindingPath: {
                path: "/Products('HT-6130')",
                propertyPath: "Name"
            }
        }));
        expect(header.asControl().getProperty('title').toBe('Flat Watch HD32'));
    },
    theProductCouldBeOrdered: function () {
      var button = element(by.control({
          controlType: "sap.m.Button",
          viewId: "container-cart---product",
          i18NText: {
              propertyName: "text",
              key: "addToCartShort"
          },
          interaction: {
              idSuffix: "BDI-content"
          }
      }));
      expect(button.isDisplayed()).toBeTruthy();
  }
    }
  }
});

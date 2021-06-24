const { expect } = require("chai");

module.exports = createPageObjects({
  Home: {
    actions: {
      // add action functions here
      iSearchForProduct: function () {
        element(by.control({
            id: "container-cart---homeView--searchField",
            interaction: {
                idSuffix: "I"
            }
        })).sendKeys("Watch");
    },
    iSelectTheFirstProduct: function () {
      element(by.control({
          controlType: "sap.m.Text",
          viewId: "container-cart---homeView",
          properties: {
              text: "Flat Watch HD32"
          },
          interaction: {
              idSuffix: "inner"
          }
          
      })).click();
  }
      
    },
    assertions: {
      // add assertion functions here
      iShouldSeeAllCategories: function () {
         var list = element(by.control({
            controlType: "sap.m.StandardListItem",
            viewId: "container-cart---homeView",  
        }));
        expect(list.count().toBe(16));
      },
    iAssertTheControlState: function () {
      element(by.control({
          controlType: "sap.m.ObjectListItem",
          viewId: "container-cart---homeView",
      }));
          var firstItem = list.get(0);
          expect(firstItem.asControl().getProperty('title')).tobe('Flat Watch HD32');
      }
    }
  }
});

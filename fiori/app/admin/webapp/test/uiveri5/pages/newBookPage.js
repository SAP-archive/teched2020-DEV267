module.exports = createPageObjects({
  NewBook: {
    actions: {
      iEnterTitle: function (sTitle) {
        element(
          by.control({
            id:
              "admin::BooksDetailsList--fe::EditableHeaderForm::EditableHeaderTitle::Field-inner",
            interaction: {
              idSuffix: "inner",
            },
          })
        ).sendKeys(sTitle);
      },

      iSelectGenre: function () {
        element(
          by.control({
            id:
              "admin::BooksDetailsList--fe::FormContainer::FieldGroup::General::FormElement::DataField::genre_ID::Field-inner-vhi",
          })
        ).click();

        element(
          by.control({
            controlType: "sap.ui.mdc.Field",
            viewName: "sap.fe.templates.ObjectPage.ObjectPage",
            bindingPath: {
              path: "/Genres(10)",
              propertyPath: "ID",
            },
          })
        ).click();
        element(
          by.control({
            id:
              "admin::BooksDetailsList--fe::FormContainer::FieldGroup::General::FieldValueHelp::genre_ID-ok",
            interaction: {
              idSuffix: "BDI-content",
            },
          })
        ).click();
      },
      iSelectAuthor: function () {
        element(
          by.control({
            id:
              "admin::BooksDetailsList--fe::FormContainer::FieldGroup::General::FormElement::DataField::author_ID::Field-inner-vhi",
          })
        ).click();

        element(
          by.control({
            controlType: "sap.m.Text",
            viewName: "sap.fe.templates.ObjectPage.ObjectPage",
            properties: {
              text: "107",
            },
          })
        ).click();

        element(
          by.control({
            id:
              "admin::BooksDetailsList--fe::FormContainer::FieldGroup::General::FieldValueHelp::author_ID-ok",
            interaction: {
              idSuffix: "BDI-content",
            },
          })
        ).click();
      },
      iClickOnSaveButton: function () {
        element(
          by.control({
            id: "admin::BooksDetailsList--fe::FooterBar::StandardAction::Save",
          })
        ).click();
      },
      iNavigateBack: function () {
        element(
          by.control({
            id: "backBtn",
          })
        ).click();
      },
    },

    assertions: {
      iShouldSeeProduct: function () {
        var product = element(
          by.control({
            controlType: "sap.m.ObjectHeader",
            viewName: "sap.ui.demo.cart.view.Product",
            bindingPath: {
              path: "/Products('HT-1040')",
              propertyPath: "Name",
            },
          })
        );
        expect(product.isPresent()).toBeTruthy();
      },
      iSeeEditButton: function () {
        var editButton = element(
          by.control({
            id: "admin::BooksDetailsList--fe::StandardAction::Edit",
            interaction: {
              idSuffix: "content",
            },
          })
        );
        expect(editButton.isPresent()).toBeTruthy();
      },
    },
  },
});

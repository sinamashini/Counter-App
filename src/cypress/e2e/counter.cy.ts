describe(
  "Counter E2E Tests",
  { viewportWidth: 1280, viewportHeight: 720 },
  () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get('[aria-label="Counter"]').should("be.visible");
    });

    context("Initial Render", () => {
      it("renders initial count correctly", () => {
        cy.getCountDisplay().should("eq", 0);
      });

      it("displays icons for buttons", () => {
        cy.get('[aria-label="Increment count"] svg').should("be.visible");
        cy.get('[aria-label="Decrement count"] svg').should("be.visible");
        cy.get('[aria-label="Reset count"] svg').should("be.visible");
      });

      it("displays disabled decrement button at zero", () => {
        cy.get('[aria-label="Decrement count"]')
          .should("be.disabled")
          .and("have.class", "opacity-50")
          .and("have.attr", "title", "Decrement count");
      });
    });

    context("Increment/Decrement Functionality", () => {
      it("increments count when + button is clicked", () => {
        cy.clickIncrement();
        cy.getCountDisplay().should("eq", 1);
        cy.get('[aria-label="Decrement count"]').should("not.be.disabled");

        cy.clickIncrement();
        cy.clickIncrement();
        cy.getCountDisplay().should("eq", 2);
      });

      it("decrements count but does not go below zero", () => {
        cy.clickIncrement();
        cy.getCountDisplay().should("eq", 1);

        cy.clickDecrement();
        cy.getCountDisplay().should("eq", 0);
        cy.get('[aria-label="Decrement count"]').should("be.disabled");

        cy.clickDecrement();
        cy.getCountDisplay().should("eq", 0);
      });
    });

    context("Reset Functionality", () => {
      it("resets count to initial value", () => {
        cy.clickIncrement();
        cy.clickIncrement();
        cy.getCountDisplay().should("eq", 2);

        cy.get('[aria-label="Reset count"]').click();
        cy.getCountDisplay().should("eq", 0);
        cy.get('[aria-label="Decrement count"]').should("be.disabled");
      });
    });

    context("Tooltips", () => {
      it("shows tooltips on button hover", () => {
        cy.get('[aria-label="Increment count"]')
          .trigger("mouseover")
          .should("have.attr", "title", "Increment count");
        cy.get('[aria-label="Decrement count"]')
          .trigger("mouseover")
          .should("have.attr", "title", "Decrement count");
        cy.get('[aria-label="Reset count"]')
          .trigger("mouseover")
          .should("have.attr", "title", "Reset count");
      });
    });

    context("Styling and Hover Effects", () => {
      it("applies gradient and shadow on hover", () => {
        cy.get('[aria-label="Increment count"]')
          .trigger("mouseenter")
          .should("have.class", "hover:from-primary")
          .and("have.class", "hover:shadow-lg");
      });
    });

    context("Keyboard Accessibility", () => {
      it("supports keyboard navigation for buttons", () => {
        cy.get('[aria-label="Increment count"]').focus().type(" ");
        cy.getCountDisplay().should("eq", 1);

        cy.get('[aria-label="Decrement count"]').focus().type("{enter}");
        cy.getCountDisplay().should("eq", 0);
      });
    });

    context("Responsive Behavior", () => {
      it("adapts layout and icons on mobile", () => {
        cy.viewport(375, 667);
        cy.get('[aria-label="Counter"]').should("have.class", "p-6");
        cy.get("div.flex").should("have.class", "flex-col");
        cy.get('[aria-label="Increment count"] svg').should("have.class", "h-5");
      });
    });
  }
);
/// <reference types="cypress" />

/* eslint-disable @typescript-eslint/no-namespace */

export {};

Cypress.Commands.add("clickIncrement", () => {
  cy.get('[aria-label="Increment count"]').click();
});

Cypress.Commands.add("clickDecrement", () => {
  cy.get('[aria-label="Decrement count"]').click();
});

Cypress.Commands.add("getCountDisplay", () => {
  return cy.get("h2").contains("Count:");
});

declare global {
  namespace Cypress {
    interface Chainable {
      clickIncrement(): Chainable<JQuery<Element>>;
      clickDecrement(): Chainable<JQuery<Element>>;
      getCountDisplay(): Chainable<JQuery<HTMLHeadingElement>>;
    }
  }
}

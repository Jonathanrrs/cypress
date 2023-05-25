/// <reference types="cypress" />

describe("testing home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("show testing on cypress", () => {
    cy.get(".title-home").should("have.text", "Hom");
  });
});

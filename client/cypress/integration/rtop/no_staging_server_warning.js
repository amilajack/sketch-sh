const faker = require("faker");

context("no staging server warning", () => {
  it("show warning on staging host", () => {
    cy.visit("https://staging.sketch.sh");
    cy.get(".warning-staging-server").should("be.visible");
  });
});

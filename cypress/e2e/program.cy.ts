import { CLOCKWORKS_PROGRAMS } from "../../src/anchor/addresses";

describe("Program address", () => {
  it("should connect to Crank V1.0.3", () => {
    // start from the first page
    cy.visit("http://localhost:3000/");

    // find a network selection button and click to open menu
    cy.get('[data-cy="network-select-btn"]').click();

    // should have Program Address menu item
    cy.get("h2").contains("Program Address");

    // select devnet from the menu
    cy.get('[data-cy="program-change-btn"]').click();

    // get all program labels
    const programLabels = Object.values(CLOCKWORKS_PROGRAMS);

    // check if Crank V1.0.3 is in the values array
    expect(programLabels[0]).to.equal("Crank V1.0.3");

    // click Crank V1.0.3
    cy.get(`[data-testid="${programLabels[0]}"]`).click();

    // check if program label has changed
    cy.get('[data-testid="selected-program-label"]').contains(programLabels[0]);
  });

  it("should connect to hello_clockwork", () => {
    // start from the first page
    cy.visit("http://localhost:3000/");

    // find a network selection button and click to open menu
    cy.get('[data-cy="network-select-btn"]').click();

    // should have Program Address menu item
    cy.get("h2").contains("Program Address");

    // select devnet from the menu
    cy.get('[data-cy="program-change-btn"]').click();

    // get all program labels
    const programLabels = Object.values(CLOCKWORKS_PROGRAMS);

    // check if hello_clockwork is in the values array
    expect(programLabels[1]).to.equal("hello_clockwork");

    // click hello_clockwork
    cy.get(`[data-testid="${programLabels[1]}"]`).click();

    // check if program label has changed
    cy.get('[data-testid="selected-program-label"]').contains(programLabels[1]);
  });

  it("should connect to Thread Program V1.3.5", () => {
    // start from the first page
    cy.visit("http://localhost:3000/");

    // find a network selection button and click to open menu
    cy.get('[data-cy="network-select-btn"]').click();

    // should have Program Address menu item
    cy.get("h2").contains("Program Address");

    // select devnet from the menu
    cy.get('[data-cy="program-change-btn"]').click();

    // get all program labels
    const programLabels = Object.values(CLOCKWORKS_PROGRAMS);

    // check if Thread Program V1.3.5 is in the values array
    expect(programLabels[2]).to.equal("Thread Program V1.3.5");

    // click Thread Program V1.3.5
    cy.get(`[data-testid="${programLabels[2]}"]`).click();

    // check if program label has changed
    cy.get('[data-testid="selected-program-label"]').contains(programLabels[2]);
  });

  it("should connect to custom program", () => {
    const customProgramId = "3XXuUFfweXBwFgFfYaejLvZE4cGZiHgKiGfMtdxNzKjh";

    // start from the first page
    cy.visit("http://localhost:3000/");

    // find a network selection button and click to open menu
    cy.get('[data-cy="network-select-btn"]').click();

    // should have Program Address menu item
    cy.get("h2").contains("Program Address");

    // select devnet from the menu
    cy.get('[data-cy="program-change-btn"]').click();

    // find custom program id input field
    cy.get('[data-testid="custom-program-input"]').clear();
    cy.get('[data-testid="custom-program-input"]').type(customProgramId);

    // confirm custom program id
    cy.get('[data-cy="custom-program-confirm-btn"]').click();

    // check if program label has changed with custom program id
    cy.get('[data-testid="selected-program-label"]').contains(
      customProgramId.toString().slice(0, 18)
    );
  });
});

export {};

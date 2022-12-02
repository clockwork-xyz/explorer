describe("Search", () => {
  it("should search a thread or an account by address", () => {
    // start from the first page
    cy.visit("http://localhost:3000/");

    // find a network selection button and click to open menu
    cy.get('[data-cy="network-select-btn"]').click();

    // select devnet from the menu
    cy.get("li").contains("Devnet").click();

    // wait until it loads threads
    cy.wait(3000);

    // find a network selection button and click to hide menu
    cy.get('[data-cy="network-select-btn"]').click();

    // find search input box and type
    cy.get('[data-testid="search-thread-input"]').clear();

    const threadAddress = "HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m";
    cy.get('[data-testid="search-thread-input"]').type(threadAddress);
    cy.wait(3000);

    cy.get('[data-cy="search-btn"]').click();

    // The new url should include "/address/HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m"
    cy.url().should("include", `/address/${threadAddress}`);
  });
});

export {};

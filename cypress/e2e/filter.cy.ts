describe("Filter", () => {
  it("should filter a thread by address", () => {
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
    cy.get('[data-testid="filter-by-input"]').clear();

    const threadAddress = "HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m";
    cy.get('[data-testid="filter-by-input"]').type(threadAddress);

    // page should show only 1 thread
    cy.get("p#page_number").contains("1 of 1");

    // page should show more than 1 thread
    cy.get('[data-testid="filter-by-input"]').clear();
    cy.get("p#page_number").not("1 of 1");
  });

  it("should filter a thread by name", () => {
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
    cy.get('[data-testid="filter-by-input"]').clear();

    const threadName = "World!";
    const threadAddress = "HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m";
    cy.get('[data-testid="filter-by-input"]').type(threadName);
    cy.get(`a[href*="${threadAddress}?network=devnet"]`);

    // page should show only 1 thread
    cy.get("p#page_number").contains("1 of 1");

    // page should show more than 1 thread
    cy.get('[data-testid="filter-by-input"]').clear();
    cy.get("p#page_number").not("1 of 1");
  });
});

export {};

describe("Navigation", () => {
  it("should navigate to the thread page", () => {
    const threadAddress = "HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m";

    // Start from the index page
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
    cy.get('[data-testid="filter-by-input"]').type(threadAddress);

    cy.wait(1000);

    // Find a link with an href attribute containing "HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m" and click it
    cy.get(`a[href*="${threadAddress}?network=devnet"]`).click();

    // The new url should include "/address/HbeMiiNcf4nrj8v3i316kNKXr6qYdBk2dbSKDxWvGw6m"
    cy.url().should("include", `/address/${threadAddress}`);

    cy.wait(1000);

    // The new page should contain an h2 with "Thread"
    cy.get("h2").contains("Thread");
  });
});

describe("Pagination", () => {
  it("should navigate to the next page", () => {
    // Start from the first page
    cy.visit("http://localhost:3000/");

    // find a network selection button and click to open menu
    cy.get('[data-cy="network-select-btn"]').click();

    // select devnet from the menu
    cy.get("li").contains("Devnet").click();

    // wait until it loads threads
    cy.wait(3000);

    // find a network selection button and click to hide menu
    cy.get('[data-cy="network-select-btn"]').click();

    cy.get('[data-cy="pagination-btn"]').contains("Next").click();

    cy.get("p#page_number").contains("2 of 10");
  });
});

export {};

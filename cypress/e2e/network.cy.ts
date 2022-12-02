describe("Network settings", () => {
  it("should connect to devnet", () => {
    // start from the first page
    cy.visit("http://localhost:3000/");

    // find a network selection button and click to open menu
    cy.get('[data-cy="network-select-btn"]').click();

    // select devnet from the menu
    cy.get("li").contains("Devnet").click();

    // wait until it loads threads
    cy.wait(3000);

    // it should show Devnet on network selection button
    cy.get('[data-cy="network-select-btn"]').contains("Devnet");
  });

  it("should connect to testnet", () => {
    // start from the first page
    cy.visit("http://localhost:3000/");

    // find a network selection button and click to open menu
    cy.get('[data-cy="network-select-btn"]').click();

    // select testnet from the menu
    cy.get("li").contains("Testnet").click();

    // wait until it loads threads
    cy.wait(3000);

    // it should show Testnet on network selection button
    cy.get('[data-cy="network-select-btn"]').contains("Testnet");
  });

  it("should connect to custom rpc", () => {
    // start from the first page
    cy.visit("http://localhost:3000/");

    // find a network selection button and click to open menu
    cy.get('[data-cy="network-select-btn"]').click();

    // select testnet from the menu
    cy.get("li").contains("Custom RPC").click();

    // wait until it loads threads
    cy.wait(3000);

    // find custom rpc input box and type
    cy.get('[data-testid="custom-rpc-input"]').clear();
    cy.get('[data-testid="custom-rpc-input"]').type(
      "http://145.40.75.131:8899"
    );

    // wait until it accepts the custom rpc
    cy.wait(3000);

    // it should show Testnet on network selection button
    cy.get('[data-cy="network-select-btn"]').contains("Custom RPC");
  });
});

export {};

describe("Thread", () => {
  it("should show error message when create a new thread", () => {
    // start from the first page
    cy.visit("http://localhost:3000/");

    // find a network selection button and click to open menu
    cy.get('[data-cy="network-select-btn"]').click();

    // select devnet from the menu
    cy.get("li").contains("Devnet").click();

    // wait until it loads threads
    cy.wait(3000);

    // find a create thread button and click to open modal
    cy.get("button").contains("Create Thread").click();

    // after click, it should open modal box with title
    cy.get("h2").contains("Create thread");

    // find message input box and type
    cy.get('[data-testid="queue-name-input"]').clear();
    cy.get('[data-testid="queue-name-input"]').type("Gokhan");

    // find create thread button and click to create a thread on devnet
    cy.get('[data-cy="create-thread-btn"]').click();

    // it should show notification message as we don't have wallet
    cy.get("div").contains("Connect your wallet and try again!");
  });
});

export {};

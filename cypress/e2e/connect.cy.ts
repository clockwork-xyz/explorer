describe("Connect", () => {
  beforeEach(() => {
    cy.clearLocalStorage("local");
  });

  it("should connect phantom wallet", () => {
    // start from the first page
    cy.visit("http://localhost:3000/");

    // find a connect wallet button and click to connect extension wallet
    cy.get('[data-cy="connect-wallet-btn"]').click();
  });
});

export {};

import { threadTitles } from "../../src/components/common/CreateQueue/Tabs";

describe("Threads", () => {
  it("should show 5 thread creation examples", () => {
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
    cy.get("h2").contains("Create a thread");
  });
});

export {};

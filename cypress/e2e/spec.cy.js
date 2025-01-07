describe("User login and dashboard screen", () => {
  it("should allow user to log in with valid credentials and open the dashboard screen", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("111202214171@mhs.dinus.ac.id")
      .should("have.value", "111202214171@mhs.dinus.ac.id");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.get("nav");

    cy.get("header");
  });
});
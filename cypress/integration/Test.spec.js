beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});
context(
  "Mobica",
  {
    baseUrl: "https://www.mobica.com.mx/",
    defaultCommandTimeout: 10000,
  },
  () => {
    describe("Caja de registro", () => {
      it("Aparece caja de registro en home", function () {
        this.timeout(500);
        cy.wait(1000);
      });
    });
  }
);

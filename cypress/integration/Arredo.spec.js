beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});
context(
  "Arredo",
  {
    baseUrl: "https://www.arredo.com.ar/",
    defaultCommandTimeout: 10000,
  },
  () => {
    describe("Gondolas Productos", () => {
      describe("Home", () => {
        it("No Aparece la Caja de Registro", () => {
          cy.visit("/");
          cy.get("body").find("#braindw_register");
        });
      });
      describe("Producto 1", () => {
        it("Aparece Gondola Completa tu compra", () => {
          cy.visit("/reposera-multifuncion-63111l60766/p");
          cy.checkGondolaIframe("Braindw17");
        });
        it("Aparece Gondola Personas que se interesan Compran", () => {
          cy.visit("/reposera-multifuncion-63111l60766/p");
          cy.checkGondolaIframe("Braindw16");
        });
      });
      describe("Producto 2", () => {
        it("Aparece Gondola Completa tu compra", () => {
          cy.visit("/banco-taburete-leaf-63471z20782/p");
          cy.checkGondolaIframe("Braindw74");
        });
        it("Aparece Gondola Los Que Compraron Compran", () => {
          cy.visit("/banco-taburete-leaf-63471z20782/p");
          cy.checkGondolaIframe("Braindw16");
        });
      });
      describe("Producto 3", () => {
        it("Aparece Gondola Completa tu compra", () => {
          cy.visit("/reposera-multifuncion-63111l60766/p");
          cy.checkGondolaIframe("Braindw17");
        });
        it("Aparece Gondola Los Que Compraron Compran", () => {
          cy.visit("/reposera-multifuncion-63111l60766/p");
          cy.checkGondolaIframe("Braindw16");
        });
      });
    });

    describe("Gondolas Home", () => {
      it("Aparece Gondola te podria interesar", () => {
        cy.visit("/");
        cy.wait(20000);
        cy.checkGondolaIframe("Braindw3");
      });

      it("Aparece Gondola baño", () => {
        cy.visit("/");
        cy.wait(20000);
        cy.checkGondolaIframe("Braindw4");
      });

      it("Aparece Gondola Recomendado Para Vos", () => {
        cy.visit("/");
        cy.wait(20000);
        cy.checkGondolaIframe("Braindw8");
      });

      it("Aparece Gondola Mixta", () => {
        cy.visit("/");
        cy.wait(20000);
        cy.checkGondolaIframe("Braindw9");
      });
    });
  }
);

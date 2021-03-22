beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});
context(
  "Arredo Uy",
  {
    baseUrl: "https://www.arredo.com.uy/",
    defaultCommandTimeout: 10000,
  },
  () => {
    describe("Buscador", () => {
      describe("Desplegable", () => {
        it("La busqueda trae resultados", () => {
          cy.visit("/");
          cy.intercept("*sabana*").as("apiCheck");
          cy.get(".fulltext-search-box").type("sabana", { force: true });
          cy.wait("@apiCheck");
          cy.get(".ui-menu-item");
        });
      });
    });
    describe("Gondola checkout", () => {
      it("Agrego un producto al carro", () => {
        cy.visit("/habitacion/sabanas");
        cy.get(".product-link").eq(0).click({ force: true });
        cy.get(".buy-in-page-button").eq(0).click({ force: true });
      });
      it("Aparece gondola en checkout", () => {
        cy.visit("/checkout#/cart");
        cy.checkGondolaIframe("Braindw45");
      });
    });
    describe("Gondolas pagina de producto", () => {
      describe("Producto 1", () => {
        it("Aparece Gondola También podría interesarte", () => {
          cy.visit("/habitacion/sabanas");
          cy.wait(5000);
          cy.get(".product-link").eq(0).click({ force: true });
          cy.wait(15000);
          cy.checkGondolaIframe("Braindw14");
        });
        it("Aparece Gondola Personas que se interesan en este producto compran", () => {
          cy.visit("/habitacion/sabanas");
          cy.wait(5000);
          cy.get(".product-link").eq(0).click({ force: true });
          cy.wait(15000);
          cy.checkGondolaIframe("Braindw15");
        });
      });
      describe("Producto 2", () => {
        it("Aparece Gondola También podría interesarte", () => {
          cy.visit("/habitacion/sabanas");
          cy.wait(5000);
          cy.get(".product-link").eq(1).click({ force: true });
          cy.wait(15000);
          cy.checkGondolaIframe("Braindw14");
        });
        it("Aparece Gondola Personas que se interesan en este producto compran", () => {
          cy.visit("/habitacion/sabanas");
          cy.wait(5000);
          cy.get(".product-link").eq(1).click({ force: true });
          cy.wait(15000);
          cy.checkGondolaIframe("Braindw15");
        });
      });
      describe("Producto 3", () => {
        it("Aparece Gondola También podría interesarte", () => {
          cy.visit("/habitacion/sabanas");
          cy.wait(5000);
          cy.get(".product-link").eq(2).click({ force: true });
          cy.wait(15000);
          cy.checkGondolaIframe("Braindw14");
        });
        it("Aparece Gondola Personas que se interesan en este producto compran", () => {
          cy.visit("/habitacion/sabanas");
          cy.wait(5000);
          cy.get(".product-link").eq(2).click({ force: true });
          cy.wait(15000);
          cy.checkGondolaIframe("Braindw15");
        });
      });
    });
    describe("Gondola pagina categoria", () => {
      it("Categoria habitacion", () => {
        cy.visit("/habitacion");
        cy.checkGondolaIframe("Braindw12");
      });
      it("Categoria sabanas", () => {
        cy.visit("/habitacion/sabanas");
        cy.checkGondolaIframe("Braindw12");
      });
    });
    describe("Home", () => {
      it("Aparece caja de registro", () => {
        cy.visit("/");
        cy.get("#braindw_register");
      });
      it("Gondola con imagen a la izquierda", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw4");
      });
      it("Gondola te podria interesar", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw3");
      });
      it("Gondola recomendado para vos", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw8");
      });
      it("Gondola ultimos vistos", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw9");
      });
    });
  }
);

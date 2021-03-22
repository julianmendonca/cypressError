beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});

context(
  "Metro",
  {
    baseUrl: "https://www.metro.pe/",
    defaultCommandTimeout: 10000,
  },
  () => {
    describe("Productos", () => {
      describe("Producto 1", () => {
        it("categoria directa: Te puede interesar", () => {
          cy.visit("/arroz-superior-metro-bolsa-5-kg-22036/p");
          cy.checkGondolaIframe("Braindw18");
        });
        it("categoria intermedia: Productos Relacionados", () => {
          cy.visit("/arroz-superior-metro-bolsa-5-kg-22036/p");
          cy.checkGondolaIframe("Braindw19");
        });
        it("cruce de categoria: Otros también vieron", () => {
          cy.visit("/arroz-superior-metro-bolsa-5-kg-22036/p");
          cy.checkGondolaIframe("Braindw21");
        });
        it("cruce de algoritmo; Completa tu compra", () => {
          cy.visit("/arroz-superior-metro-bolsa-5-kg-22036/p");
          cy.checkGondolaIframe("Braindw22");
        });
      });
    });
    describe("Gondolas Home", () => {
      it("Mas vistos del sitio", () => {
        cy.visit("/");
        cy.wait(3000);
        cy.checkGondolaIframe("Braindw41");
      });
      it("Mas agregados al carro", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw33");
      });
    });
    describe("Buscador", () => {
      describe("Busqueda vacia", () => {
        it("Los mas vistos", () => {
          cy.visit("/Sistema/buscavazia?ft=weyuhkjdauyuqwre");
          cy.checkGondolaIframe("Braindw29");
        });
        it("Última categoria navegada", () => {
          cy.visit("/lacteos");
          cy.visit("/Sistema/buscavazia?ft=weyuhkjdauyuqwre");
          cy.checkGondolaIframe("Braindw30");
        });
      });
      describe("Recuperacion de termino", () => {
        it("Categoría termino recuperado: Te puede interesar", () => {
          cy.visit("/Sistema/buscavazia?ft=brasa%20briketa%20d%20carbon  ");
          cy.checkGondolaIframe("Braindw28");
        });
      });
    });
  }
);

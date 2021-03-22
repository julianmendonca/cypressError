beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});

context(
  "Wong",
  {
    baseUrl: "https://www.wong.pe/",
    defaultCommandTimeout: 10000,
  },
  () => {
    describe("Productos", () => {
      describe("Producto 1", () => {
        it("categoria directa: Te puede Interesar", () => {
          cy.visit("/lasagna-de-carne-don-italo-caja-350-g-253580/p");
          cy.wait(3000);
          cy.checkGondolaIframe("Braindw24");
        });
        it("categoria intermedia: Otros También compraron", () => {
          cy.visit("/lasagna-de-carne-don-italo-caja-350-g-253580/p");
          cy.checkGondolaIframe("Braindw25");
        });
        it("cruce de categoria: Otros también Vieron", () => {
          cy.visit("/lasagna-de-carne-don-italo-caja-350-g-253580/p");
          cy.checkGondolaIframe("Braindw27");
        });
        it("cruce de algoritmo; Completa tu compra", () => {
          cy.visit("/lasagna-de-carne-don-italo-caja-350-g-253580/p");
          cy.checkGondolaIframe("Braindw28");
        });
      });
    });
    describe("Headers Categoria", () => {
      it("Categoría general", () => {
        cy.visit("/panaderia-y-pasteleria");
        cy.checkGondolaIframe("Braindw51");
      });
      it("Subcategoria", () => {
        cy.visit("/panaderia-y-pasteleria/pasteleria/tortas-de-la-casa?PS=18");
        cy.checkGondolaIframe("Braindw51");
      });
    });
    describe("Gondolas Home", () => {
      it("Más vistos de una coleccion", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw42");
      });
    });
    describe("Buscador", () => {
      describe("Busqueda vacia", () => {
        it("Más vistos", () => {
          cy.visit("/Sistema/buscavazia?ft=safasfousdajknasdfio");
          cy.checkGondolaIframe("Braindw37");
        });
        it("Última categoria navegada", () => {
          cy.visit("/Sistema/buscavazia?ft=safasfousdajknasdfio");
          cy.checkGondolaIframe("Braindw38");
        });
      });
      describe("Recuperacion de termino", () => {
        it("Recuperacion de termino: Resultado de búsqueda", () => {
          cy.visit("/Sistema/buscavazia?ft=cosacola");
          cy.checkGondolaIframe("Braindw35");
        });
        it("Categoría primer término recuperado: Te puede interesar", () => {
          cy.visit("/Sistema/buscavazia?ft=cosacola");
          cy.checkGondolaIframe("Braindw36");
        });
      });
    });
  }
);

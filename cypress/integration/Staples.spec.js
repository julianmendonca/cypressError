beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});

context(
  "Staples",
  { baseUrl: "https://www.staples.com.ar/", defaultCommandTimeout: 10000 },
  () => {
    describe("Header Categoria", () => {
      it("Header categoria general", () => {
        cy.visit("/staples/libreria?O=OrderByPriceDESC&PS=9");
        cy.checkGondolaIframe("Braindw12");
      });
      it("Header subcategoria", () => {
        cy.visit(
          "/staples/Libreria/mochilas-maletines-cartucheras-luncheras/Cartucheras?O=OrderByPriceDESC&PS=9&map=c,c,c,specificationFilter_33"
        );
        cy.checkGondolaIframe("Braindw12");
      });
    });
    describe("Grilla de producto", () => {
      describe("producto 1", () => {
        it("También te puede interesar (categoria directa)", () => {
          cy.visit("/mocwsspecia-mochila-quiksilver-1969-special/p");
          cy.checkGondolaIframe("Braindw15");
        });
        it("Productos relacionados (categoria intermedia)", () => {
          cy.visit("/mocwsspecia-mochila-quiksilver-1969-special/p");
          cy.checkGondolaIframe("Braindw14");
        });
        it("Otros también vieron (Algoritmo)", () => {
          cy.visit("/mocwsspecia-mochila-quiksilver-1969-special/p");
          cy.checkGondolaIframe("Braindw16");
        });
        it("Completá tu compra (cruce de categorias)", () => {
          cy.visit("/mocwsspecia-mochila-quiksilver-1969-special/p");
          cy.checkGondolaIframe("Braindw17");
        });
      });
      describe("producto 2", () => {
        it("También te puede interesar (categoria directa)", () => {
          cy.visit(
            "/rmaleau80a4-resma-ledesma-autor-multifuncion-a4-80-g-m2-500-hojas/p"
          );
          cy.get(".buy-in-page-button").eq(0).click({ force: true });
          cy.checkGondolaIframe("Braindw15");
        });
        it("Productos relacionados (categoria intermedia)", () => {
          cy.visit(
            "/rmaleau80a4-resma-ledesma-autor-multifuncion-a4-80-g-m2-500-hojas/p"
          );
          cy.checkGondolaIframe("Braindw14");
        });
      });
      describe("producto 3", () => {
        it("También te puede interesar (categoria directa)", () => {
          cy.visit("/carmvkawan3-carpeta-escolar-con-anillos-kawaii-n-3/p");
          cy.get(".buy-in-page-button").eq(0).click({ force: true });
          cy.checkGondolaIframe("Braindw15");
        });
        it("Productos relacionados (categoria intermedia)", () => {
          cy.visit("/carmvkawan3-carpeta-escolar-con-anillos-kawaii-n-3/p");
          cy.checkGondolaIframe("Braindw14");
        });
        it("Otros también vieron (Algoritmo)", () => {
          cy.visit("/carmvkawan3-carpeta-escolar-con-anillos-kawaii-n-3/p");
          cy.checkGondolaIframe("Braindw16");
        });
        it("Completá tu compra (cruce de categorias)", () => {
          cy.visit("/carmvkawan3-carpeta-escolar-con-anillos-kawaii-n-3/p");
          cy.checkGondolaIframe("Braindw17");
        });
      });
    });
    describe("Buscador", () => {
      describe("Recuperación de términos ( Buscar 'Virome')", () => {
        it("Resultados de búsqueda", () => {
          cy.visit("/Sistema/buscavazia?ft=virome");
          cy.checkGondolaIframe("Braindw27");
        });
        it("Productos sugeridos", () => {
          cy.visit("/Sistema/buscavazia?ft=virome");
          cy.checkGondolaIframe("Braindw28");
        });
      });
      describe("Búsqueda vacía", () => {
        it("Los más vistos", () => {
          cy.visit("/Sistema/buscavazia?ft=kjnjdsnfjdsf");
          cy.checkGondolaIframe("Braindw29");
        });
        it("Ultima categoría navegada", () => {
          cy.visit("/Sistema/buscavazia?ft=kjnjdsnfjdsf");
          cy.checkGondolaIframe("Braindw30");
        });
      });
      it("Desplegable trae resultados", () => {
        cy.visit("/");
        cy.intercept("*lapicera*").as("searchRequest");
        cy.get(".ui-autocomplete-input")
          .eq(0)
          .type("lapicera", { force: true });
        cy.wait("@searchRequest");
        cy.get(".ui-autocomplete .ui-menu-item");
      });
    });
    describe("Chekcout", () => {
      it("Cruce de categorias ( Completá tu compra )", () => {
        cy.visit("/checkout/#/cart");
        cy.checkGondolaIframe("Braindw21");
      });
      it("Cruce por algoritmo ( Sumá estos productos a tu carrito )", () => {
        cy.visit("/checkout/#/cart");
        cy.checkGondolaIframe("Braindw20");
      });
    });
  }
);

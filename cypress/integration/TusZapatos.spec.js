beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});

context(
  "Tus zapatos",
  {
    baseUrl: "https://www.tuszapatos.com.ar/",
    defaultCommandTimeout: 10000,
  },
  () => {
    describe("Productos", () => {
      describe("Producto 1", () => {
        it("categoría directa: 'Tambien te puede interesar'", () => {
          cy.visit("/mochila-amayra-3136-80320-neg/p");
          cy.wait(3000);
          cy.checkGondolaIframe("Braindw22");
        });
        it("categoria intermedia: 'productos relacionados'", () => {
          cy.visit("/mochila-amayra-3136-80320-neg/p");
          cy.checkGondolaIframe("Braindw23");
        });
      });
      describe("Producto 2", () => {
        it("categoría directa: 'Tambien te puede interesar'", () => {
          cy.visit("/crocs-crocband-c11016n-410/p");
          cy.checkGondolaIframe("Braindw22");
          cy.get(".specification").eq(0).click({ force: true });
          cy.get(".dimension-Talle:not(.item_unavailable)").eq(0).click();
          cy.wait(3000);
          cy.get(".buy-in-page-button").eq(0).click({ force: true });
        });
        it("categoria intermedia: 'productos relacionados'", () => {
          cy.visit("/crocs-crocband-c11016n-410/p");
          cy.checkGondolaIframe("Braindw23");
          cy.get(".specification").eq(0).click({ force: true });
          cy.get(".dimension-Talle:not(.item_unavailable)").eq(0).click();
          cy.wait(3000);
          cy.get(".buy-in-page-button").eq(0).click({ force: true });
        });
        it("cruce de categoria: 'completa tu compra'", () => {
          cy.visit("/crocs-crocband-c11016n-410/p");
          cy.checkGondolaIframe("Braindw25");
        });
      });
    });
    describe("Headers Categoria", () => {
      it("Categoría general", () => {
        cy.visit(
          "/tuszapatos/Hombre/?O=OrderByReleaseDateDESC&PS=12&map=c,specificationFilter_26"
        );
        cy.checkGondolaIframe("Braindw20");
      });
      it("Subcategoria", () => {
        cy.visit(
          "/tuszapatos/Hombre/?O=OrderByReleaseDateDESC&PS=12&map=c,specificationFilter_26#"
        );
        cy.checkGondolaIframe("Braindw20");
      });
    });
    describe("Gondolas Home", () => {
      it("Tus ultimos navegados", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw3");
      });
      it("Hombre", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw5");
      });
      it("Mujer", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw4");
      });
      it("Niños", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw6");
      });
      it("Última categoria navegada", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw7");
      });
    });
    describe("Buscador", () => {
      it("Desplegable con 'zapato crocs'", () => {
        cy.visit("/");
        cy.intercept("*crocs*").as("busqueda");
        cy.get(".skip-link").eq(0).click({ force: true });
        cy.get(".ui-autocomplete-input")
          .eq(0)
          .type("zapato crocs", { force: true });
        cy.wait("@busqueda");
        cy.get(".ui-autocomplete .ui-menu-item");
      });
      describe("Busqueda vacia", () => {
        it("Los mas vistos", () => {
          cy.visit("/Sistema/buscavazia?ft=lasdajsd");
          cy.checkGondolaIframe("Braindw33");
        });
        it("Última categoria navegada", () => {
          cy.visit("/Sistema/buscavazia?ft=sjdnfjsdnf");
          cy.checkGondolaIframe("Braindw34");
        });
      });
      describe("Recuperacion de termino", () => {
        it("Resultado de busqueda", () => {
          cy.visit("/Sistema/buscavazia?ft=crocs%20calsic%20unises");
          cy.checkGondolaIframe("Braindw31");
        });
        it("Sugeridos en base a tu búsqueda", () => {
          cy.visit("/Sistema/buscavazia?ft=crocs%20calsic%20unises");
          cy.checkGondolaIframe("Braindw32");
        });
      });
    });
    describe("Checkout", () => {
      it("Crucede categoria: Completa tu compra", () => {
        cy.visit("/checkout/#/cart");
        cy.checkGondolaIframe("Braindw29");
      });
    });
  }
);

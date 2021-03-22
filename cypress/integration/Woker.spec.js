beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});

context(
  "Woker",
  {
    baseUrl: "https://www.wokerbysporting.com.ar",
    defaultCommandTimeout: 10000,
  },
  () => {
    describe("Productos", () => {
      describe("Producto 1", () => {
        it("Categoria directa 'Otros también vieron'", () => {
          cy.visit("/zapatillas-adidas-superstar-foundation-6b27136/p");
          cy.checkGondolaIframe("Braindw7");
        });
        it("Algoritmo 'Quienes compraron este producto también vieron'", () => {
          cy.visit("/zapatillas-adidas-superstar-foundation-6b27136/p");
          cy.checkGondolaIframe("Braindw10");
        });
        it("Cross custom: 'Completa tu compra'", () => {
          cy.visit("/zapatillas-adidas-superstar-foundation-6b27136/p");
          cy.checkGondolaIframe("Braindw19");
        });
      });
      describe("Producto 2", () => {
        it("Categoria directa 'Otros también vieron'", () => {
          cy.visit("remera-puma-n-2-de-hombre-1096265-001/p");
          cy.get(".buy-in-page-button").eq(0).click({ force: true });
          cy.checkGondolaIframe("Braindw7");
        });
        it("Algoritmo 'Quienes compraron este producto también vieron'", () => {
          cy.visit("remera-puma-n-2-de-hombre-1096265-001/p");
          cy.checkGondolaIframe("Braindw10");
        });
        it("Cross custom: 'Completa tu compra'", () => {
          cy.visit("remera-puma-n-2-de-hombre-1096265-001/p");
          cy.checkGondolaIframe("Braindw19");
        });
      });
    });
    describe("Headers Categoria", () => {
      it("Categoría general", () => {
        cy.visit("/woker/indumentaria?O=OrderByReleaseDateDESC&PS=12");
        cy.checkGondolaIframe("Braindw30");
      });
      it("Subcategoria", () => {
        cy.visit(
          "/woker/calzado/hombre/?O=OrderByReleaseDateDESC&PS=12&map=c,c,specificationFilter_30 "
        );
        cy.checkGondolaIframe("Braindw31");
      });
    });
    describe("Gondolas Home", () => {
      it("Tus ultimos navegados", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw21");
      });
      it("Hombre", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw20");
      });
      it("Mujer", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw26");
      });
      it("Niños", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw28");
      });
      it("Última categoria navegada", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw24");
      });
      it("Más agregados al carrito", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw22");
      });
    });
    describe("Buscador", () => {
      it("Desplegable con 'sapatilla'", () => {
        cy.visit("/");
        cy.intercept("*sapatilla*").as("busqueda");
        cy.get(".ui-autocomplete-input")
          .eq(0)
          .type("sapatilla", { force: true });
        cy.wait("@busqueda");
        cy.get(".ui-autocomplete .ui-menu-item");
      });
      describe("Busqueda vacia", () => {
        it("Los mas populares", () => {
          cy.visit("/Sistema/buscavazia?ft=kdjfjkdsfn");
          cy.checkGondolaIframe("Braindw17");
        });
        it("También te puede interesar", () => {
          cy.visit("/Sistema/buscavazia?ft=kdjfjkdsfn");
          cy.checkGondolaIframe("Braindw18");
        });
      });
      describe("Recuperacion de termino", () => {
        it("Resultado de busqueda", () => {
          cy.visit("/Sistema/buscavazia?ft=sapatilla");
          cy.checkGondolaIframe("Braindw15");
        });
        it("También te puede interesar", () => {
          cy.visit("/Sistema/buscavazia?ft=sapatilla");
          cy.checkGondolaIframe("Braindw16");
        });
      });
    });
    describe("Checkout", () => {
      it("Algoritmo: Quienes compraron este producto también vieron", () => {
        cy.visit("/checkout/#/cart");
        cy.checkGondolaIframe("Braindw12");
      });
      it("Crucede categoria: Completa tu compra", () => {
        cy.visit("/checkout/#/cart");
        cy.checkGondolaIframe("Braindw13");
      });
    });
  }
);

beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});

context(
  "Sporting",
  {
    baseUrl: "https://www.sporting.com.ar/",
    defaultCommandTimeout: 10000,
  },
  () => {
    describe("Productos", () => {
      describe("Producto 1", () => {
        it("También te puede interesar", () => {
          cy.visit(
            "/zapatillas-adidas-terrex-agravic-tr-de-mujer-6ef6887-000/p"
          );
          cy.wait(3000);
          cy.checkGondolaIframe("Braindw3");
          cy.get(".buy-in-page-button").eq(0).click({ force: true });
        });
        it("Quienes compraron este producto también vieron", () => {
          cy.visit(
            "/zapatillas-adidas-terrex-agravic-tr-de-mujer-6ef6887-000/p"
          );
          cy.checkGondolaIframe("Braindw35");
          cy.get(".buy-in-page-button").eq(0).click({ force: true });
        });
        it("Completá tu compra", () => {
          cy.visit(
            "/zapatillas-adidas-terrex-agravic-tr-de-mujer-6ef6887-000/p"
          );
          cy.checkGondolaIframe("Braindw36");
        });
      });
      describe("Producto 2", () => {
        it("También te puede interesar", () => {
          cy.visit(
            "/zapatillas-adidas-energyfalcon-running-de-hombre-6ee9845-000/p"
          );
          cy.checkGondolaIframe("Braindw3");
        });
        it("Quienes compraron este producto también vieron", () => {
          cy.visit(
            "/zapatillas-adidas-energyfalcon-running-de-hombre-6ee9845-000/p"
          );
          cy.checkGondolaIframe("Braindw35");
        });
        it("Completá tu compra", () => {
          cy.visit(
            "/zapatillas-adidas-energyfalcon-running-de-hombre-6ee9845-000/p"
          );
          cy.checkGondolaIframe("Braindw36");
        });
      });
    });
    describe("Headers Categoria", () => {
      it("Categoría general", () => {
        cy.visit("/sporting/calzado");
        cy.checkGondolaIframe("Braindw32");
      });
      it("Subcategoria", () => {
        cy.visit("/sporting/calzado/botines");
        cy.checkGondolaIframe("Braindw32");
      });
    });
    describe("Gondolas Home", () => {
      it("Tus ultimos navegados", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw1");
      });
      it("Hombre", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw16");
      });
      it("Mujer", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw17");
      });
      it("Niños", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw18");
      });
      it("Última categoria navegada", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw15");
      });
    });
    describe("Buscador", () => {
      it("Desplegable con 'zapatilla'", () => {
        cy.visit("/");
        cy.intercept("*zapatilla*").as("busqueda");
        cy.get(".ui-autocomplete-input")
          .eq(0)
          .type("zapatilla", { force: true });
        cy.wait("@busqueda");
        cy.get(".ui-autocomplete .ui-menu-item");
      });
      describe("Busqueda vacia", () => {
        it("Los mas populares", () => {
          cy.visit("/Sistema/buscavazia?ft=sjdnfjsdnf");
          cy.checkGondolaIframe("Braindw12");
        });
        it("También te puede interesar", () => {
          cy.visit("/Sistema/buscavazia?ft=sjdnfjsdnf");
          cy.checkGondolaIframe("Braindw13");
        });
      });
      describe("Recuperacion de termino", () => {
        it("Resultado de busqueda", () => {
          cy.visit("/Sistema/buscavazia?ft=sapato%20croc");
          cy.checkGondolaIframe("Braindw28");
        });
        it("También te puede interesar", () => {
          cy.visit("/Sistema/buscavazia?ft=sapato%20croc");
          cy.checkGondolaIframe("Braindw14");
        });
      });
    });
    describe("Checkout", () => {
      it("Algoritmo: Quienes compraron este producto también vieron", () => {
        cy.visit("/checkout/#/cart");
        cy.checkGondolaIframe("Braindw39");
      });
      it("Crucede categoria: Completa tu compra", () => {
        cy.visit("/checkout/#/cart");
        cy.checkGondolaIframe("Braindw38");
      });
    });
  }
);

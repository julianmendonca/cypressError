beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});

context(
  "Prestigio",
  {
    baseUrl: "https://www.prestigio.com.ar/",
    defaultCommandTimeout: 10000,
  },
  () => {
    describe("Productos", () => {
      describe("Producto 1", () => {
        it("categoría directa: 'Tambien te puede interesar'", () => {
          cy.visit("/z10-latex-interior-mate-20lts-/p");
          cy.checkGondolaIframe("Braindw16");
        });
        it("categoria intermedia: 'productos relacionados'", () => {
          cy.visit("/z10-latex-interior-mate-20lts-/p");
          cy.checkGondolaIframe("Braindw17");
        });
        it("Algoritmo: Quienes compraron este producto tambien vieron", () => {
          cy.visit("/z10-latex-interior-mate-20lts-/p");
          cy.checkGondolaIframe("Braindw59");
        });
      });
    });
    describe("Headers Categoria", () => {
      it("Categoría general", () => {
        cy.visit("/pintura-y-accesorios/pinturas");
        cy.checkGondolaIframe("Braindw14");
      });
      it("Subcategoria", () => {
        cy.visit("/pintura-y-accesorios/pinturas/latex");
        cy.checkGondolaIframe("Braindw14");
      });
    });
    describe("Gondolas Home", () => {
      it("Mas vistos del sitio", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw66");
      });
      it("Ultima categoria navegada", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw5");
      });
      it("'Coleccion' (no tiene titulo)", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw1");
      });
      it("Últimos productos vistos", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw6");
      });
      it("'Coleccion' (no tiene titulo)", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw4");
      });
    });
    describe("Buscador", () => {
      it("Desplegable con 'madera'", () => {
        cy.visit("/");
        cy.intercept("*madera*").as("busqueda");
        cy.get("#ft").eq(0).type("madera", { force: true });
        cy.wait("@busqueda");
        cy.get(".list-cart li");
      });
      describe("Busqueda vacia", () => {
        it("Los mas vistos", () => {
          cy.visit("/Sistema/buscavazia?ft=sdfsdfsdf");
          cy.checkGondolaIframe("Braindw65");
        });
        it("Última categoria navegada", () => {
          cy.visit("/Sistema/buscavazia?ft=sdfsdfsdf");
          cy.checkGondolaIframe("Braindw64");
        });
      });
      describe("Recuperacion de termino", () => {
        it("Resultado de busqueda", () => {
          cy.visit("/Sistema/buscavazia?ft=comvo%20siya");
          cy.checkGondolaIframe("Braindw62");
        });
        it("Sugeridos en base a tu búsqueda", () => {
          cy.visit("/Sistema/buscavazia?ft=comvo%20siya");
          cy.checkGondolaIframe("Braindw63");
        });
      });
    });
    describe("Checkout", () => {
      it("Crucede categoria: Completa tu compra", () => {
        cy.visit("/z10-latex-interior-mate-20lts-/p");
        cy.get(".buy-in-page-button").eq(0).click({ force: true });
        cy.visit("/checkout/#/cart");
        cy.checkGondolaIframe("Braindw60");
      });
      it("Cruce algoritmo: 'Suma estos productos a tu carrito'", () => {
        cy.visit("/checkout/#/cart");
        cy.checkGondolaIframe("Braindw52");
      });
    });
  }
);

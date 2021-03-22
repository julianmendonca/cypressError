beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});

context(
  "Club de beneficios",
  {
    baseUrl: "https://clubdebeneficios.com/",
    defaultCommandTimeout: 10000,
  },
  () => {
    describe("Productos", () => {
      describe("Producto 1", () => {
        it("También te puede interesar (categoria directa)", () => {
          cy.visit("/drive-7791290011533.html");
          cy.checkGondolaIframe("Braindw24");
        });
        it("Productos relacionados (categoria intermedia)", () => {
          cy.visit("/drive-7791290011533.html");
          cy.checkGondolaIframe("Braindw25");
        });
        it("Productos que pueden ser de tu interes (algoritmo)", () => {
          cy.visit("/drive-7791290011533.html");
          cy.checkGondolaIframe("Braindw28");
        });
      });
    });
    describe("Headers Categoria", () => {
      it("Categoría", () => {
        cy.visit("/almacen.html");
        cy.checkGondolaIframe("Braindw20");
      });
      it("Subcategoría", () => {
        cy.visit("/almacen/caldos-y-saborizadores/caldos.html");
        cy.checkGondolaIframe("Braindw22");
      });
      it("Colección", () => {
        cy.visit("/ofertas.html");
        cy.checkGondolaIframe("Braindw20");
      });
    });
    describe("Gondolas Home", () => {
      it("Tus últimos productos visitados (navega 1 producto)", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw3");
      });
      it("Ultima categoría que visitaste (mas vistos de última categoria navegada)", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw4");
      });
      it("Los combos mas vistos: (mas vistos de una categoria", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw5");
      });
      it("Los Mas Vendido (Más agregados del sitio)", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw6");
      });
      it("Lo más vendido en perfumeria (mas agregados de categoría)", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw7");
      });
      it("Lo mas vendido en almacen (mas agregados de categoría)", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw8");
      });
      it("Super-Sale hasta 50%off (mejores descuentos coleccion)", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw9");
      });
      it("Lo mas vendido en Limpieza (mas agregados de categoría)", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw10");
      });
      it("Lo mas vendido en Cuidado de la ropa (mas agregados de categoría ", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw11");
      });
    });
    describe("Buscador", () => {
      it("Desplegable con 'jabon'", () => {
        cy.visit("/");
        cy.intercept("*jabon*").as("busqueda");
        cy.get("#search").eq(0).type("jabon", { force: true });
        cy.wait("@busqueda");
        cy.get("#search_autocomplete .product");
      });
      it("Resultado de búsqueda: Productos del término recuperado", () => {
        cy.visit("/catalogsearch/result/?q=javn+likdo");
        cy.checkGondolaIframe("Braindw35");
      });
      it("te podría interesar (categoría del término recuperado)", () => {
        cy.visit("/catalogsearch/result/?q=javn+likdo");
        cy.checkGondolaIframe("Braindw36");
      });
    });
    describe("Checkout", () => {
      it("No te olvides de sumar estas oportunidades! (coleccion, ordenada de menor a mayor)", () => {
        cy.visit("/usuario/ingresar");
        cy.get("#customer-email").type("jmendonca@braindw.com", {
          force: true,
        });
        cy.get("#pass").type("Test1234", { force: true });
        cy.get("#send2").click({ force: true });
        cy.wait(10000);
        cy.visit("/drive-7791290011533.html");
        cy.visit("/checkout/cart/");
        cy.checkGondolaIframe("Braindw40");
      });
    });
  }
);

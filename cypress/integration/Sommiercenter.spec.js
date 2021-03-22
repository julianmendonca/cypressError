beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});
context(
  "Sommiercenter",
  {
    baseUrl: "https://sommiercenter.com/",
    defaultCommandTimeout: 10000,
  },
  () => {
    describe("Gondola Ultimos navegados", () => {
      it("Producto 1 Cross Algoritmo", function () {
        cy.visit("/colchon-1-plaza-80x190-sealy-linen-resorte");
        cy.checkGondolaIframe("Braindw37");
      });
      it("Producto 1 Intermedia", function () {
        cy.visit("/colchon-1-plaza-80x190-sealy-linen-resorte");
        cy.checkGondolaIframe("Braindw17");
      });
      it("Producto 1 Custom Categoria", function () {
        cy.visit("/colchon-1-plaza-80x190-sealy-linen-resorte");
        cy.checkGondolaIframe("Braindw39");
      });
      it("Producto 2 Intermedia", function () {
        cy.visit("/colchones");
        cy.get(".product-item-photo").eq(2).click();
        cy.checkGondolaIframe("Braindw17");
      });
      it("Producto 2 Custom Categoria", function () {
        cy.visit("/colchones");
        cy.get(".product-item-photo").eq(2).click();
        cy.checkGondolaIframe("Braindw39");
      });
      it("Producto 3 Intermedia", function () {
        cy.visit("/colchones");
        cy.get(".product-item-photo").eq(3).click();
        cy.checkGondolaIframe("Braindw17");
      });
      it("Producto 3 Custom Categoria", function () {
        cy.visit("/colchones");
        cy.get(".product-item-photo").eq(3).click();
        cy.checkGondolaIframe("Braindw39");
      });
      it("Producto 4 Intermedia", function () {
        cy.visit("/colchones");
        cy.get(".product-item-photo").eq(4).click();
        cy.checkGondolaIframe("Braindw17");
      });
      it("Producto 4 Custom Categoria", function () {
        cy.visit("/colchones");
        cy.get(".product-item-photo").eq(4).click();
        cy.checkGondolaIframe("Braindw39");
      });
      it("Producto 5 Intermedia", function () {
        cy.visit("/colchones");
        cy.get(".product-item-photo").eq(5).click();
        cy.checkGondolaIframe("Braindw17");
      });
      it("Producto 5 Custom Categoria", function () {
        cy.visit("/colchones");
        cy.get(".product-item-photo").eq(5).click();
        cy.checkGondolaIframe("Braindw39");
      });
      it('Aparece Gondola Ultima Categoria Navegada"', function () {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw1");
      });
      it('Aparece Gondola Ultimos navegados"', function () {
        cy.visit("/");
        cy.wait(30000);
        cy.checkGondolaIframe("Braindw2");
      });
    });
    describe("Banner Headers", () => {
      it('Aparece banner header en Categoria Sommier y Colcho"', function () {
        cy.visit("/sommier-y-colchon");
        cy.checkGondolaIframe("Braindw40");
      });
    });

    describe("Gondolas Search", () => {
      it('Aparece Gondola Recuperacion con termino Conchon"', function () {
        cy.visit("/catalogsearch/result/?q=almuada");
        cy.checkGondolaIframe("Braindw19");
      });
      it('Aparece Gondola con resultado no encontrado "', function () {
        cy.visit("/catalogsearch/result/?q=cdddss");
        cy.checkGondolaIframe("Braindw20");
      });
      it('Aparece Gondola Ultima Categoria Navegada "', function () {
        cy.visit("/catalogsearch/result/?q=cdddss");
        cy.checkGondolaIframe("Braindw21");
      });
    });
  }
);

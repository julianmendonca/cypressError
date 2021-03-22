beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});
context(
  "Tata",
  {
    baseUrl: "https://www.tata.com.uy/",
    defaultCommandTimeout: 10000,
  },
  () => {
    describe("Home buscador 10seg", () => {
      it("Busco Cocholate y verifico Chocolate", () => {
        cy.visit("/");
        cy.get(".native-input").eq(0).type("cocholate", { force: true });
        cy.get(".styles__SearchResults-sc-1qa8c8h-2").contains("Chocolate");
      });
      it("Veo en resultado de grilla Chocolate", () => {
        cy.visit("/buscar?text=chocolate");
        cy.get(".styles__Container-tyimju-1").contains("Chocolate");
      });
    });
    describe("Home buscador 10seg", () => {
      it("Busco calletitas y verifico Galletas", () => {
        cy.visit("/");
        cy.get(".native-input").eq(0).type("calletitas", { force: true });
        cy.get(".styles__SearchResults-sc-1qa8c8h-2").contains("Galletas");
      });
      it("Veo en resultado de grilla Galletas", () => {
        cy.visit("/buscar?text=calletitas");
        cy.get(".styles__Container-tyimju-1").contains("Galletas");
      });
    });
    describe("Gondola Producto", () => {
      it("Gondola 'Tambien te puede interesar'", () => {
        cy.visit("/refresco-coca-cola-no-retornable-3-litros/p");
        cy.checkGondolaIframe("Braindw9");
      });
      it("Gondola 'Productos relacionados'", () => {
        cy.visit("/refresco-coca-cola-no-retornable-3-litros/p");
        cy.checkGondolaIframe("Braindw10");
      });
      it("Gondola 'Completa tu compra'", () => {
        cy.visit("/refresco-coca-cola-no-retornable-3-litros/p");
        cy.checkGondolaIframe("Braindw13");
      });
    });
    describe("Headers", () => {
      it("Categoria general", () => {
        cy.visit("/almacen");
        cy.checkGondolaIframe("Braindw19");
      });
      it("Categoria catalogo", () => {
        cy.visit("/almacen/snacks");
        cy.checkGondolaIframe("Braindw7");
      });
    });

    describe("Gondolas busqueda vacia", () => {
      it("Gondola 'Quiza te pueda interesar'", () => {
        cy.visit("/buscar?text=dfsdfsdf");
        cy.checkGondolaIframe("Braindw18");
      });
      it("Gondola 'Los mas vistos'", () => {
        cy.visit("/buscar?text=dfsdfsdf");
        cy.checkGondolaIframe("Braindw17");
      });
    });
  }
);

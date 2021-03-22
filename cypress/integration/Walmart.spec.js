beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});
context(
  "Walmart",
  {
    baseUrl: "https://www.walmart.com.ar/",
    defaultCommandTimeout: 10000,
  },
  () => {
    describe("Home buscador", () => {
      it("Busco Uirpul y verifico Whirlpool", () => {
        cy.visit("/");
        cy.get(".input-search__input").type("uirpul");
        cy.get(".input-search__results").contains("Whirlpool");
      });
      it("Veo en resultado de grilla Whirlpool", () => {
        cy.visit("/buscar?text=uirpul");
        cy.get(".search-results").contains("Whirlpool");
      });
    });

    describe("Gondolas Ultimos Navegados-6 productos", () => {
      describe("Producto 1 de cateogria cervezas", () => {
        it("Aparece Gondola También podrían interesarte", () => {
          cy.visit("/cervezas?O=OrderByTopSaleDESC");
          cy.get(".prateleira__flags").eq(0).click({ force: true });
          cy.get(".braindw_gondproducttit").contains(
            "También podrían interesarte"
          );
          cy.get(".braindw_gondproduct .braindw_content_image");
        });
      });
      describe("Producto 2 de cateogria cervezas", () => {
        it("Aparece Gondola También podrían interesarte", () => {
          cy.visit("/cervezas?O=OrderByTopSaleDESC");
          cy.get(".prateleira__flags").eq(1).click({ force: true });
          cy.get(".braindw_gondproducttit").contains(
            "También podrían interesarte"
          );
          cy.get(".braindw_gondproduct .braindw_content_image");
        });
      });
      describe("Producto 3 de cateogria cervezas", () => {
        it("Aparece Gondola También podrían interesarte", () => {
          cy.visit("/cervezas?O=OrderByTopSaleDESC");
          cy.get(".prateleira__flags").eq(2).click({ force: true });
          cy.get(".braindw_gondproducttit").contains(
            "También podrían interesarte"
          );
          cy.get(".braindw_gondproduct .braindw_content_image");
        });
      });
      describe("Producto 4 de cateogria cervezas", () => {
        it("Aparece Gondola También podrían interesarte", () => {
          cy.visit("/cervezas?O=OrderByTopSaleDESC");
          cy.get(".prateleira__flags").eq(3).click({ force: true });
          cy.get(".braindw_gondproducttit").contains(
            "También podrían interesarte"
          );
          cy.get(".braindw_gondproduct .braindw_content_image");
        });
      });
      describe("Producto 5 de cateogria cervezas", () => {
        it("Aparece Gondola También podrían interesarte", () => {
          cy.visit("/cervezas?O=OrderByTopSaleDESC");
          cy.get(".prateleira__flags").eq(4).click({ force: true });
          cy.get(".braindw_gondproducttit").contains(
            "También podrían interesarte"
          );
          cy.get(".braindw_gondproduct .braindw_content_image");
        });
      });
      describe("Producto 6 de cateogria cervezas", () => {
        it("Aparece Gondola También podrían interesarte", () => {
          cy.visit("/cervezas?O=OrderByTopSaleDESC");
          cy.get(".prateleira__flags").eq(5).click({ force: true });
          cy.get(".braindw_gondproducttit").contains(
            "También podrían interesarte"
          );
          cy.get(".braindw_gondproduct .braindw_content_image");
        });
      });

      describe("Ficha producto Gondolas Cross Automatizadas", () => {
        describe("Gaseosa Coca Cola Light 1.25 Lt", () => {
          it("Aparece Gondola También podrían interesarte", () => {
            cy.visit("/gaseosa-coca-cola-500-cc/p");
            cy.get(".braindw_gondproducttit").contains(
              "También podrían interesarte"
            );
            cy.get(".braindw_gondproduct .braindw_content_image");
          });
          it("Aparece Gondola Otros tambien compraron", () => {
            cy.visit("/gaseosa-coca-cola-500-cc/p");
            cy.get(".braindw_cat_intermedia_ficha .braindw_content_image");
          });
        });
      });
      describe("Gondolas Home", () => {
        it("Productos Ultima Categoria Navegada", () => {
          cy.visit("/");
          cy.get(".braindw_ultCatVisit .braindw_content_image");
        });
      });
      describe("Banner Header Categoria Principal", () => {
        describe("Categoria Aceites y Aderezos", () => {
          it("Aparece Banner Header", () => {
            cy.visit("/aceites-y-aderezos");
            cy.get(".main_braindw_bigbannercategoria .braindw_hadj");
          });
        });
        describe("Sub categoria Aceites", () => {
          it("Aparece Banner Header", () => {
            cy.visit("/aceites-y-aderezos/aceites");
            cy.get(".braindw_bigbannercategorias .braindw_hadj");
          });
        });
      });
    });

    describe("Gondola checkout", () => {
      it("Agrego un producto al carro", () => {
        cy.visit("/cuidado-del-bebe?sc=15");
        cy.get("li:nth-child(1) .buy-button-normal a")
          .first()
          .click({ force: true });
        cy.get("li:nth-child(2) .buy-button-normal a")
          .first()
          .click({ force: true });
        cy.get("li:nth-child(3) .buy-button-normal a")
          .first()
          .click({ force: true });
        cy.get("li:nth-child(4) .buy-button-normal a")
          .first()
          .click({ force: true });
        var genArr = Array.from({ length: 20 }, (v, k) => k + 1);
        cy.wrap(genArr).each((index) => {
          cy.get(".prateleira__qty--plus").first().click({ force: true });
        });
      });
      it("Aparece la gondola de cross checkout", () => {
        cy.visit("/checkout#/cart");
        cy.get(".main_braindw_slider_prodsugeridos");
      });
    });
  }
);

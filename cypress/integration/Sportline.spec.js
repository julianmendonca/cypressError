beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});
context(
  "Sportline",
  {
    baseUrl: "https://www.sportline.com.ar/",
    defaultCommandTimeout: 10000,
  },
  () => {
    describe("Caja de registro", () => {
      it("Aparece caja de registro en la home", () => {
        cy.visit("/");
        cy.get("#braindw_register");
      });
    });
    describe("Gondolas Categorias", () => {
      it("Aparece Banner PDP Zapatillas", () => {
        cy.visit(
          "/hombre/calzados/ZAPATILLAS?order=OrderByTopSaleDESC&pageNumber=1"
        );
        cy.get(".main_braindw_bigbannercategoria .braindw_item");
      });
      it("Aparece Banner PDP Remeras Niños", () => {
        cy.visit(
          "/ni%C3%B1os/indumentaria/REMERAS?order=OrderByTopSaleDESC&pageNumber=1"
        );
        cy.get(".main_braindw_bigbannercategoria .braindw_item");
      });
    });
    describe("Gondolas grilla de producto", () => {
      describe("Producto 1  de remeras para niños", () => {
        it("Aparece Gondola categoria intermedia Completa tu compra", () => {
          cy.visit(
            "/ni%C3%B1os/indumentaria/REMERAS?order=OrderByTopSaleDESC&pageNumber=1p"
          );
          cy.get(".product-item").eq(0).click({ force: true });
          cy.get(".braindw-gondola-categoria-intermedia-producto");
        });
        it("Aparece Gondola Te puede interesar", () => {
          cy.visit(
            "/ni%C3%B1os/indumentaria/REMERAS?order=OrderByTopSaleDESC&pageNumber=1p"
          );
          cy.get(".product-item").eq(0).click({ force: true });
          cy.get(".braindw-gondola-categoria-directa-producto");
        });
      });
      describe("Producto 2  de remeras para niños", () => {
        it("Aparece Gondola categoria intermedia Completa tu compra", () => {
          cy.visit(
            "/ni%C3%B1os/indumentaria/REMERAS?order=OrderByTopSaleDESC&pageNumber=1p"
          );
          cy.get(".product-item").eq(1).click({ force: true });
          cy.get(".braindw-gondola-categoria-intermedia-producto");
        });
        it("Aparece Gondola Te puede interesar", () => {
          cy.visit(
            "/ni%C3%B1os/indumentaria/REMERAS?order=OrderByTopSaleDESC&pageNumber=1p"
          );
          cy.get(".product-item").eq(1).click({ force: true });
          cy.get(".braindw-gondola-categoria-directa-producto");
        });
      });
    });
    describe("Gondolas home", () => {
      it("Aparece Gondola Los mas vistos", () => {
        cy.visit("/");
        cy.get(".braindw-gondola-masvistos-home .owl-item");
      });
      it("Aparece Gondola ID 1 ", () => {
        cy.visit("/");
        cy.get(".braindw-gondola-ID-home .owl-item");
      });
      it("Aparece Gondola ID 2 ", () => {
        cy.visit("/");
        cy.get(".braindw-gondola-ID2-home .owl-item");
      });
      it("Aparece Gondola ID 3 ", () => {
        cy.visit("/");
        cy.get(".braindw-gondola-ID3-home .owl-item");
      });
      it("Aparece Gondola ID 4 ", () => {
        cy.visit("/");
        cy.get(".braindw-gondola-ID4-home .owl-item");
      });
    });
    describe("Buscador", () => {
      it("Trae resultados el desplegable", () => {
        cy.visit("/");
        cy.get(".header__action-search").click();
        cy.get(".search-autocomplete__input").type("zapatillas");
        cy.get(".bdw_results .dbw_item");
      });
      describe("Gondolas busqueda vacia", () => {
        it("Aparece gondola Te Podria Interesar", () => {
          cy.visit("/Sistema/buscavazia?ft=sapatillas");
          cy.get(".braindw-gondola-search-masvistos .owl-item");
        });
        it("Aparece gondola Busqueda Vacia", () => {
          cy.visit("/Sistema/buscavazia?ft=sapatillas");
          cy.get(".braindw-gondola-busqueda-vacia .owl-item");
        });
      });
    });
  }
);

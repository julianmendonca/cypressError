beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});
context(
  "Mobica",
  {
    baseUrl: "https://www.mobica.com.mx/",
    defaultCommandTimeout: 10000,
  },
  () => {
    describe("Caja de registro", () => {
      it("Aparece caja de registro en home", () => {
        cy.visit("/");
        cy.get("#braindw_register");
      });
    });
    describe("Gondola grilla categoria", () => {
      it("Aparece la gondoal Productos Destacados", () => {
        cy.visit("/muebles/sala/sofas-y-sillones?O=OrderByBestDiscountDESC");
        cy.get("#braindw-header-categoria .braindw_item");
      });
    });
    describe("Ficha de producto", () => {
      describe("Producto 1", () => {
        it("Aparece gondola categoria directa", () => {
          cy.visit("/muebles/sala/sofas-y-sillones?O=OrderByBestDiscountDESC");
          cy.get(".single-product .product-img a").eq(0).click({ force: true });
          cy.get("#braindw-gondola-categoria-directa-producto .owl-item");
        });
        it("Aparece gondola categoria intermedia", () => {
          cy.visit("/muebles/sala/sofas-y-sillones?O=OrderByBestDiscountDESC");
          cy.get(".single-product .product-img a").eq(0).click({ force: true });
          cy.get("#braindw-gondola-categoria-intermedia-producto .owl-item");
        });
        it("Aparece gondola custom", () => {
          cy.visit("/muebles/sala/sofas-y-sillones?O=OrderByBestDiscountDESC");
          cy.get(".single-product .product-img a").eq(0).click({ force: true });
          cy.get("#braindw-gondola-custom-producto .owl-item");
        });
      });
      describe("Producto 2", () => {
        it("Aparece gondola categoria directa", () => {
          cy.visit("/muebles/sala/sofas-y-sillones?O=OrderByBestDiscountDESC");
          cy.get(".single-product .product-img a").eq(1).click({ force: true });
          cy.get("#braindw-gondola-categoria-directa-producto .owl-item");
        });
        it("Aparece gondola categoria intermedia", () => {
          cy.visit("/muebles/sala/sofas-y-sillones?O=OrderByBestDiscountDESC");
          cy.get(".single-product .product-img a").eq(1).click({ force: true });
          cy.get("#braindw-gondola-categoria-intermedia-producto .owl-item");
        });
        it("Aparece gondola custom", () => {
          cy.visit("/muebles/sala/sofas-y-sillones?O=OrderByBestDiscountDESC");
          cy.get(".single-product .product-img a").eq(1).click({ force: true });
          cy.get("#braindw-gondola-custom-producto .owl-item");
        });
      });
    });
    describe("Buscador", () => {
      it("Aparece gondola de Busqueda Vacia", () => {
        cy.visit("/Sistema/buscavazia?ft=sdfsdfsdf");
        cy.get("#BDW-Carrusel-Search-2 .owl-item");
      });
    });
    describe("Gondolas Home", () => {
      it("Aparece gondola Los Mas Vistos", () => {
        cy.visit("/");
        cy.get("#braindw-gondola-masvistos-home .owl-item");
      });
      it("Aparece gondola Ultimos Navegados", () => {
        cy.visit("/");
        cy.get("#braindw-gondola-ultimos-navegados .owl-item");
      });
      it("Aparece gondola Carousel 4 (Descuento Sofa y Sillones)", () => {
        cy.visit("/");
        cy.get("#BDW-Home-Carrusel-4 .owl-item");
      });
      it("Aparece gondola Carousel 5 (Descuento Ofertas en Recamara)", () => {
        cy.visit("/");
        cy.get("#BDW-Home-Carrusel-5 .owl-item");
      });
      it("Aparece gondola Carousel 7 (Mas Agregados al Carro)", () => {
        cy.visit("/");
        cy.get("#BDW-Home-Carrusel-7 .owl-item");
      });
    });
  }
);

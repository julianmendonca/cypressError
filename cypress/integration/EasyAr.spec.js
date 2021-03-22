beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});

context(
  "EasyAr",
  {
    baseUrl: "https://www.easy.com.ar/",
    defaultCommandTimeout: 10000,
  },
  () => {
    describe("Home", () => {
      it("Aparece la Caja de Registro", () => {
        cy.visit("/webapp/wcs/stores/servlet/es/easyar");
        cy.get(".ventana_flotante");
      });
    });

    describe("Gondola en la pagina de categoria", () => {
      it("Aparece la gondola en Griferia", () => {
        cy.visit("/tienda/es/easyar/search/griferia-cocina");
        cy.checkGondolaIframe("Braindw14");
      });
    });

    describe("Gondola en la pagina de Termotanques", () => {
      it("Aparece la gondola en áridos", () => {
        cy.visit("/tienda/es/easyar/search/termotanques");
        cy.checkGondolaIframe("Braindw14");
      });
    });

    describe("Gondolas Productos", () => {
      it("Producto 1 Quienes vieron este producto compraron algoritmo", () => {
        cy.visit(
          "/tienda/es/easyar/curva-plana-s-sep-p--unicanal-tapa-1013010"
        );
        cy.get("body").then(($body) => {
          if ($body.find("#Braindw18").length) {
            cy.checkGondolaIframe("Braindw18");
          } else {
            cy.checkGondolaIframe("Braindw17");
          }
        });
      });
      it("Producto 1 Aparece Gondola Tambien te podria interesar-Directa", () => {
        cy.visit(
          "/tienda/es/easyar/curva-plana-s-sep-p--unicanal-tapa-1013010"
        );
        cy.checkGondolaIframe("Braindw16");
      });
      it("Producto 2 Aparece Gondola Productos Relacionados-Intermedia", () => {
        cy.visit("/tienda/es/easyar/search/griferia-cocina");
        cy.get(".itemhover").eq(2).click();
        cy.get("body").then(($body) => {
          if ($body.find("#Braindw18").length) {
            cy.checkGondolaIframe("Braindw18");
          } else {
            cy.checkGondolaIframe("Braindw17");
          }
        });
      });
      it("Producto 3 Aparece Gondola Productos Relacionados-Intermedia", () => {
        cy.visit("/tienda/es/easyar/search/griferia-cocina");
        cy.get(".itemhover").eq(3).click();

        cy.get("body").then(($body) => {
          if ($body.find("#Braindw18").length) {
            cy.checkGondolaIframe("Braindw18");
          } else {
            cy.checkGondolaIframe("Braindw17");
          }
        });
      });
      it("Producto 4 Aparece Gondola Productos Relacionados-Intermedia", () => {
        cy.visit("/tienda/es/easyar/search/griferia-cocina");
        cy.get(".itemhover").eq(4).click();

        cy.get("body").then(($body) => {
          if ($body.find("#Braindw18").length) {
            cy.checkGondolaIframe("Braindw18");
          } else {
            cy.checkGondolaIframe("Braindw17");
          }
        });
      });
      it("Producto 5 Aparece Gondola Productos Relacionados-Intermedia", () => {
        cy.visit("/tienda/es/easyar/search/griferia-cocina");
        cy.get(".itemhover").eq(5).click();

        cy.get("body").then(($body) => {
          if ($body.find("#Braindw18").length) {
            cy.checkGondolaIframe("Braindw18");
          } else {
            cy.checkGondolaIframe("Braindw17");
          }
        });
      });
      it("Producto 6 Aparece Gondola Productos Relacionados-Intermedia", () => {
        cy.visit("/tienda/es/easyar/search/griferia-cocina");
        cy.get(".itemhover").eq(6).click();

        cy.get("body").then(($body) => {
          if ($body.find("#Braindw18").length) {
            cy.checkGondolaIframe("Braindw18");
          } else {
            cy.checkGondolaIframe("Braindw17");
          }
        });
      });
      it("Producto 7 Aparece Gondola Productos Relacionados-Intermedia", () => {
        cy.visit("/tienda/es/easyar/search/cablecanal-y-accesorios");
        cy.get(".itemhover").eq(0).click();

        cy.get("body").then(($body) => {
          if ($body.find("#Braindw18").length) {
            cy.checkGondolaIframe("Braindw18");
          } else {
            cy.checkGondolaIframe("Braindw17");
          }
        });
      });
    });
    describe("Home buscador", () => {
      it("Busco Taladro", () => {
        cy.visit(
          "/tienda/es/SearchDisplay?storeId=10151&catalogId=10051&langId=-5&pageSize=12&beginIndex=0&searchSource=Q&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&pageView=image&searchTerm=taladro"
        );
      });
    });
    describe("Gondolas Home", () => {
      it("Aparece Gondola Ultimas categorias Navegadas", () => {
        cy.visit("/webapp/wcs/stores/servlet/es/easyar");
        cy.checkGondolaIframe("braindw-mi-easy-home-categorias-navegadas");
      });
      it("Aparece Gondola Ultimos productos agregados", () => {
        cy.visit("/webapp/wcs/stores/servlet/es/easyar");
        cy.checkGondolaIframe("braindw-mi-easy-home-productos-vistos");
      });
      it("Aparece Gondola Ultimos Productos Navegados", () => {
        cy.visit("/webapp/wcs/stores/servlet/es/easyar");
        cy.checkGondolaIframe("braindw-mi-easy-home-productos-vistos");
      });
      it("Carga gondola En base a tu ultima busqueda", () => {
        cy.visit("/tienda/es/easyar");
        cy.checkGondolaIframe("braindw-mi-easy-home-busqueda");
      });

      it("Carga banner carousel principal", () => {
        cy.visit("/tienda/es/easyar");
        cy.checkGondolaIframe("braindw-mi-easy-home-banner-last").find(
          ".gondola-banner-image-holder-a"
        );
      });
      it("Aparece gondolas Los mas vistos 10seg", () => {
        cy.visit("/webapp/wcs/stores/servlet/es/easyar/");
        cy.checkGondolaIframe("Braindw5");
      });
      it("Aparece gondolas Los mas vistos 15seg", () => {
        cy.visit("/webapp/wcs/stores/servlet/es/easyar/");
        cy.checkGondolaIframe("Braindw5");
      });
      it("Aparece gondolas Los mas vistos 20seg", () => {
        cy.visit("/webapp/wcs/stores/servlet/es/easyar/");
        cy.checkGondolaIframe("Braindw5");
      });
    });

    describe("Mi Easy", () => {
      it("Funciona boton Mi-Easy", () => {
        cy.visit("/tienda/es/easyar/search/griferia-cocina");
        cy.get("#topmenu-inner").contains("Mi Easy").click();
      });
      it("Carga gondola de banner", () => {
        cy.visit("/tienda/es/easyar/mi-easy");
        cy.checkGondolaIframe("braindw-mi-easy").find(
          ".single-carousel-holder .gondola-banner-data"
        );
      });

      describe("Gondola categorias navegadas", () => {
        it("Aparece gondola categorias", () => {
          cy.visit("/tienda/es/easyar/mi-easy");
          cy.checkGondolaIframe("braindw-mi-easy").find(
            ".topC-holder .topC-image"
          );
        });
        it("Hago click en una categoria y viene la gondola", () => {
          cy.visit("/tienda/es/easyar/mi-easy");
          cy.checkGondolaIframe("braindw-mi-easy")
            .find(".topC-holder .topC-image:not(.topC-image-clicked)")
            .first()
            .click();
          cy.checkGondolaIframe("braindw-mi-easy").find(
            ".topC-carousel .bdw-item"
          );
        });
      });

      describe("Gondola categorias vistas", () => {
        it("Aparece gondola categorias", () => {
          cy.visit("/tienda/es/easyar/mi-easy");
          cy.checkGondolaIframe("braindw-mi-easy").find(
            ".categorias-carousel .small-item"
          );
        });
        it("Hago click en una categoria y viene la gondola", () => {
          cy.visit("/tienda/es/easyar/mi-easy");
          cy.checkGondolaIframe("braindw-mi-easy")
            .find(".categorias-carousel .small-item:not(.small-item-clicked)")
            .first()
            .click();
          cy.checkGondolaIframe("braindw-mi-easy").find(
            ".categorias-ofertas-carousel .bdw-item-holder"
          );
        });
      });
    });
  }
);

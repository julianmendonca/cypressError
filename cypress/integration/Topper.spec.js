beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});

context(
  "Topper",
  { baseUrl: "https://www.topper.com.ar/", defaultCommandTimeout: 10000 },
  () => {
    describe("Categorias", () => {
      it("Header en categoria", () => {
        cy.visit(
          "/indumentaria/hombre?PS=12&map=c,specificationFilter_28&O=OrderByReleaseDateDESC "
        );
        cy.checkGondolaIframe("Braindw14");
      });
      it("Header en subcategoria", () => {
        cy.visit(
          "/accesorios/gorras/ni%C3%B1os?PS=12&map=c,c,specificationFilter_28&O=OrderByReleaseDateDESC"
        );
        cy.checkGondolaIframe("Braindw14");
      });
    });
    describe("Gondolas Ficha de producto", () => {
      describe("Producto 1", () => {
        it("Quienes compraron este producto también vieron (algoritmo)", () => {
          cy.visit("/boris-025678/p");
          cy.get(".dimension-Talle:not(.item_unavaliable)")
            .eq(0)
            .click({ force: true });
          cy.get(".buy-in-page-button").eq(0).click({ force: true });
          cy.checkGondolaIframe("Braindw20");
        });

        it("Quizá te podría interesar (categoria directa)", () => {
          cy.visit("/boris-025678/p");
          cy.checkGondolaIframe("Braindw16");
        });
        it("Productos relacionados (categoria intermedia)", () => {
          cy.visit("/boris-025678/p");
          cy.checkGondolaIframe("Braindw17");
        });
        it("Completá tu compra  (cruce de categorias)", () => {
          cy.visit("/boris-025678/p");
          cy.checkGondolaIframe("Braindw19");
        });
      });
      describe("Producto 2", () => {
        it("Quienes compraron este producto también vieron (algoritmo)", () => {
          cy.visit("/pant-poly-fleece-men-163957/p");
          cy.checkGondolaIframe("Braindw20");
          cy.get(".dimension-Talle:not(.item_unavaliable)")
            .eq(0)
            .click({ force: true });
          cy.get(".buy-in-page-button").eq(0).click({ force: true });
        });
        it("Quizá te podría interesar (categoria directa)", () => {
          cy.visit("/pant-poly-fleece-men-163957/p");
          cy.checkGondolaIframe("Braindw16");
        });
        it("Productos relacionados (categoria intermedia)", () => {
          cy.visit("/pant-poly-fleece-men-163957/p");
          cy.checkGondolaIframe("Braindw17");
        });
        it("Completá tu compra  (cruce de categorias)", () => {
          cy.visit("/pant-poly-fleece-men-163957/p");
          cy.checkGondolaIframe("Braindw19");
        });
      });
    });
    describe("Buscador", () => {
      describe("Busqueda vacia", () => {
        it("Los mas vistos", () => {
          cy.visit("Sistema/buscavazia?ft=fghfghfgh");
          cy.checkGondolaIframe("Braindw27");
        });
        it("Ultima categoria navegada", () => {
          cy.visit("Sistema/buscavazia?ft=fghfghfgh");
          window.localStorage.setItem("bdw_last_category", "39");
          cy.checkGondolaIframe("Braindw28");
        });
      });
      describe("Recuperacion de termino", () => {
        it("Resultado de búsqueda", () => {
          cy.visit("/Sistema/buscavazia?ft=calsa");
          cy.checkGondolaIframe("Braindw25");
        });
        it("Productos sugeridos", () => {
          cy.visit("/Sistema/buscavazia?ft=calsa");
          cy.checkGondolaIframe("Braindw26");
        });
      });
    });
    describe("Checkout", () => {
      it("Podria interesarte", () => {
        cy.visit("/checkout/#/cart");
        cy.checkGondolaIframe("Braindw31");
      });
      it("Completa tu compra", () => {
        cy.visit("/checkout/#/cart");
        cy.checkGondolaIframe("Braindw23");
      });
    });
    describe("Home", () => {
      it("últimos navegados", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw1");
      });
      it("Imperdibles verano", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw3");
      });
      it("Más buscados en zapatillas", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw4");
      });
      it("Las mejores ofertas para niños", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw5");
      });
      it("Mejores ofertas en indumentaria", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw6");
      });
    });
  }
);

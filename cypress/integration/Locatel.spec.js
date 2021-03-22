beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});
context(
  "locatel",
  {
    baseUrl: "https://www.locatelcolombia.com/",
    defaultCommandTimeout: 10000,
  },
  () => {
    describe("Gondola cross checkout", () => {
      it("Agrego un producto al carro", () => {
        cy.visit("/maternidad-bebe/higiene-bebes/aceites");
        cy.get(".btnAcepto").click({ force: true });
        cy.get(".product-add-to-cart").first().click({ force: true });
      });
    });
    describe("Buscador Brain 'crema'", () => {
      it("Trae resultados la busqueda", () => {
        cy.server();
        cy.route("**search/locatelcolombia**").as("busqueda");
        cy.visit("/");
        cy.get("#x-autocomplete-input").type("crema");
        cy.get("#buscadorBox .info-busca").first();
      });
    });

    describe("Buscador Brain 'ibupofreno'", () => {
      it("Aparece Los Mas Vistos", () => {
        cy.visit("/Sistema/buscavazia?ft=ibupofreno");
        cy.checkGondolaIframe("Braindw28");
      });

      it("Aparece Te Puede Interesar", () => {
        cy.visit("/Sistema/buscavazia?ft=ibupofreno");
        cy.checkGondolaIframe("Braindw38");
      });
    });

    describe("Buscador Brain 'asdasdasdas'", () => {
      it("Aparece Los Mas Populares", () => {
        cy.visit("/Sistema/buscavazia?ft=asdasdasdasd");
        cy.checkGondolaIframe("Braindw27");
      });

      it("Aparece Te Puede Interesar", () => {
        cy.visit(
          "/dispositivos-medicos-en-casa/equipos-medicos-diagnostico/basculas"
        );
        cy.visit("/Sistema/buscavazia?ft=asdasdasdasd");
        cy.checkGondolaIframe("Braindw40");
      });
    });
    describe("Gondolas de 2 productos", function () {
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });

      describe("producto 7702057012724-benzirin-verde-solucion--oral-x-120ml/p", function () {
        it("Aparece la gondola Los mas vistos", function () {
          cy.visit("/7702057012724-benzirin-verde-solucion--oral-x-120ml/p");
          cy.checkGondolaIframe("Braindw22");
        });
        it("Aparece la gondola productos relacionados", function () {
          cy.visit("/7702057012724-benzirin-verde-solucion--oral-x-120ml/p");
          cy.checkGondolaIframe("Braindw31");
        });
        it("Aparece la gondola Completa tu compra", () => {
          cy.visit("/7702057012724-benzirin-verde-solucion--oral-x-120ml/p");
          cy.checkGondolaIframe("Braindw61");
        });
      });

      describe("producto /73796712020-tensiometro-digital-de-brazo-control-hem-7120/p", function () {
        it("Aparece la gondola 'Otros clientes tambien vieron'", function () {
          cy.visit(
            "/73796712020-tensiometro-digital-de-brazo-control-hem-7120/p"
          );
          cy.checkGondolaIframe("Braindw60");
        });
        it("Aparece la gondola 'Los mas vistos'", function () {
          cy.visit(
            "/73796712020-tensiometro-digital-de-brazo-control-hem-7120/p"
          );
          cy.checkGondolaIframe("Braindw22");
        });
        it("Aparece la gondola 'Productos relacionados'", () => {
          cy.visit(
            "/73796712020-tensiometro-digital-de-brazo-control-hem-7120/p"
          );
          cy.checkGondolaIframe("Braindw31");
        });
        it("Aparece la gondola 'Completá tu compra'", () => {
          cy.visit(
            "/73796712020-tensiometro-digital-de-brazo-control-hem-7120/p"
          );
          cy.checkGondolaIframe("Braindw61");
        });
      });
    });

    describe("Gondolas Home", () => {
      it('Aparece "Ultimos vistos"', () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw4").find("#braindw_gondvis");
      });
      it('Aparece "Te puede interesar"', () => {
        cy.checkGondolaIframe("Braindw4").find(".cont-products-slider");
      });
    });

    describe("Gondola Las mejores ofertas", () => {
      it("Aparece la gondola", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw7");
      });
    });

    describe("Gondola Recomendados", () => {
      it("Aparece la gondola", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw6");
      });
    });

    describe("Gondola Categorìa padre mas vendidos", () => {
      it("Aparece la gondola", () => {
        cy.visit("/dermocosmetica");
        cy.checkGondolaIframe("Braindw35");
      });
    });

    describe("Gondola Categorìa padre mejores ofertas", () => {
      it("Aparece la gondola", () => {
        cy.visit("/dermocosmetica");
        cy.checkGondolaIframe("Braindw34");
      });
    });

    describe("Gondola Categorìa padre mas vistos", () => {
      it("Aparece la gondola", () => {
        cy.visit("/dermocosmetica");
        cy.checkGondolaIframe("Braindw36");
      });
    });

    describe("Banner Header Categoria", () => {
      it("Aparece la gondola", () => {
        cy.visit("/dermocosmetica/cuidado-solar");
        cy.checkGondolaIframe("Braindw17");
      });
    });

    describe("Gondola Ficha producto Los mas vistos-Directa", () => {
      it("Aparece la gondola", () => {
        cy.visit(
          "/190679000187-acondicionador-herbal-essences-argan-de-morocco-oil-x400ml/p"
        );
        cy.checkGondolaIframe("Braindw22");
      });
      it("Aparecen los mismos productos que la API", () => {
        cy.visit(
          "/190679000187-acondicionador-herbal-essences-argan-de-morocco-oil-x400ml/p"
        );
        cy.checkApiIframe(
          "https://a.braindw.com/api/get/GetProductsByCategories?hash=locatel_produccion_xvbqr&branchOffice=1&refreshMetaData=true&limitproducts=16&minstock=0&categories=64&order=0&excludebreadcrumbcategories=",
          "Braindw22",
          ".owl-item:not(.cloned) a[bw-sku=",
          6,
          "Sku"
        );
      });
    });

    describe("Gondolas de chekout", () => {
      it("Aparecen las gondolas de chekout", () => {
        cy.visit("/checkout/#/cart");
        cy.checkGondolaIframe("Braindw41");
      });
    });
  }
);

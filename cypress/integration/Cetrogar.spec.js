beforeEach(() => {
    cy.restoreLocalStorage();
  });
  
  afterEach(() => {
    cy.saveLocalStorage();
  });
  context(
    "Cetrogar",
    {
      baseUrl: "https://www.cetrogar.com.ar/",
      defaultCommandTimeout: 10000,
    },
    () => {
      describe("Gondolas categoria", () => {
        it("Aparece banner categoria Smart Tv", () => {
          cy.visit("/tecnologia/tv-video/led-y-smartv.html");
          cy.checkGondolaIframe("Braindw2");
        });
        it("Aparece banner categoria Lavarropas", () => {
          cy.visit("/electrodomesticos/lavarropas-secarropas/lavarropas.html");
          cy.checkGondolaIframe("Braindw2");
        });
      });
      describe("Gondolas grilla producto", () => {
        describe("Producto 1", () => {
          it("Aparece gondola Otros tambien vieron", () => {
            cy.visit("/electrodomesticos/lavarropas-secarropas/lavarropas.html");
            cy.get(".product-item .product-item-photo")
              .eq(0)
              .click({ force: true });
            cy.checkGondolaIframe("Braindw15");
          });
          it("Aparece gondola Tambien te puede interesar", () => {
            cy.visit("/electrodomesticos/lavarropas-secarropas/lavarropas.html");
            cy.get(".product-item .product-item-photo")
              .eq(0)
              .click({ force: true });
            cy.checkGondolaIframe("Braindw16");
          });
        });
        describe("Producto 2", () => {
          it("Aparece gondola Otros tambien vieron", () => {
            cy.visit("/electrodomesticos/lavarropas-secarropas/lavarropas.html");
            cy.get(".product-item .product-item-photo")
              .eq(1)
              .click({ force: true });
            cy.checkGondolaIframe("Braindw15");
          });
          it("Aparece gondola Tambien te puede interesar", () => {
            cy.visit("/electrodomesticos/lavarropas-secarropas/lavarropas.html");
            cy.get(".product-item .product-item-photo")
              .eq(1)
              .click({ force: true });
            cy.checkGondolaIframe("Braindw16");
          });
        });
      });
      describe("Gondolas Home", () => {
        it("Aparece 'Ofertas en Smartphones' gondola braindw-gondola-ID-home-6", () => {
          cy.visit("/");
          cy.checkGondolaIframe("Braindw12");
        });
        it("Aparece gondola 'Ofertas en Tecnología' braindw-gondola-ID-home-2", () => {
          cy.visit("/");
          cy.checkGondolaIframe("Braindw5");
        });
        it("Aparece 'Ofertas Smart TV gondola braindw-gondola-ID-home-3", () => {
          cy.visit("/");
          cy.checkGondolaIframe("Braindw13");
        });
        it("Aparece gondola 'Ofertas en Herramientas' braindw-gondola-ID-home-5", () => {
          cy.visit("/");
          cy.checkGondolaIframe("Braindw8");
        });
        it("Aparece gondola 'Ofertas Pequeños Electrodomésticos' braindw-gondola-ID-home-4", () => {
          cy.visit("/");
          cy.checkGondolaIframe("Braindw9");
        });
        it("Aparece gondola 'Los mas comprados' braindw-gondola-ID-home-8", () => {
          cy.visit("/");
          cy.checkGondolaIframe("Braindw10");
        });
        it("Aparece gondola 'Última categoria visitada' braindw-gondola-ID-home-10", () => {
          cy.visit("/");
          cy.checkGondolaIframe("Braindw6");
        });
      });
    }
  );
  
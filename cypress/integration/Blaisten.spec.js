beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});
context(
  "Blaisten",
  {
    baseUrl: "https://www.blaisten.com.ar/",
    defaultCommandTimeout: 10000,
  },
  () => {
    describe("Home", () => {
      describe("Gondolas Home Ultimos Navegados", () => {
        it("Producto 1 Cross Directa en tecla-doble-accionamiento-para-valvula", () => {
          cy.visit("/tecla-doble-accionamiento-para-valvula-de-inodoro/p");
          cy.get("#braindw-topten-producto .owl-item");
        });
        it("Producto 2 Cross Directa en inodoro-bari-largo-blanco", () => {
          cy.visit("/porcelanato-reserve-tiza-61x61-cm-/p");
          cy.get("#braindw-topten-producto .owl-item");
        });
        it("Producto 2 Productos Relacionados en inodoro-bari-largo-blanco", () => {
          cy.visit("/porcelanato-reserve-tiza-61x61-cm-/p");
          cy.get("#braindw-ultima-categoria-producto .owl-item");
        });
        it("Producto 3 Cross Directa en bidet-bari-3-agujeros-blanco ", () => {
          cy.visit("/adhesivo-blanco-pro/p");
          cy.get("#braindw-topten-producto .owl-item");
        });
        it("Producto 3 Productos Relacionados en inodoro-bari-largo-blanco", () => {
          cy.visit("/adhesivo-blanco-pro/p");
          cy.get("#braindw-ultima-categoria-producto .owl-item");
        });
        it("Aparece Gondola Ultimos Navegados Home", () => {
          cy.visit("/");
          cy.get("#braindw-ultimos-navegados-home .owl-item");
        });
      });
      describe("Gondolas Home Los mas Vistos", () => {
        it("Aparece Gondola Los Mas Vistos", () => {
          cy.visit("/");
          cy.get("#braindw-topten-home .owl-item");
        });
      });
      describe("Gondolas Home Tambien te podria Interesar", () => {
        it("Aparece Gondola Tambien te podria Interesar", () => {
          cy.visit("/");
          cy.get("#braindw-ultima-categoria-home .owl-item");
        });
      });
      describe("Banner Header", () => {
        it("Aparece Banner Header Banera y Ducha", () => {
          cy.visit("/griferias/griferias-de-bano/banera-y-ducha");
          cy.get(".braindw_owl-carousel .owl-item");
        });
      });
    });
  }
);

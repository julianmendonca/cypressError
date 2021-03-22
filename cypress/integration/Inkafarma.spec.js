beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});
context(
  "InkafarmaPe",
  {
    baseUrl: "https://inkafarma.pe/",
    defaultCommandTimeout: 10000,
  },
  () => {
    describe("Banner Header Categoria", () => {
      it("Aparece Banner Header Categoria ppal Belleza", () => {
        cy.visit("/categoria/belleza");
        cy.checkGondolaIframe("Braindw17");
      });
      it("Aparece Banner Header Categoria ppal Cuidado Personal", () => {
        cy.visit("/categoria/cuidado-personal");
        cy.checkGondolaIframe("Braindw17");
      });
    });
    describe("Fichas de producto Gondolas Cross Selling Ensure Advance", () => {
      it("Aparece Gondola Cat. Directa Tambien te podria interesar", () => {
        cy.visit("/producto/Ensure-Advance-Sabor-Vainilla/010808");
        cy.checkGondolaIframe("Braindw13");
      });
      it("Aparece Gondola Cat. Intermedia Otros tambien vieron", () => {
        cy.visit("/producto/Ensure-Advance-Sabor-Vainilla/010808");
        cy.checkGondolaIframe("Braindw14");
      });
      it("Aparece Gondola Cat. SKU Algoritmo Completa tu compra", () => {
        cy.visit("/producto/Ensure-Advance-Sabor-Vainilla/010808");
        cy.checkGondolaIframe("Braindw27");
      });
    });
    describe("Fichas de producto Gondolas Cross Selling Pañal Babysec Super Premium Talla M", () => {
      it("Aparece Gondola Cat. Directa Tambien te podria interesar", () => {
        cy.visit("/producto/Pa%C3%B1al-Babysec-Super-Premium-Talla-M/012525");
        cy.checkGondolaIframe("Braindw13");
      });
      it("Aparece Gondola Cat. Intermedia Otros tambien vieron", () => {
        cy.visit("/producto/Pa%C3%B1al-Babysec-Super-Premium-Talla-M/012525");
        cy.checkGondolaIframe("Braindw14");
      });
      it("Aparece Gondola Cat. SKU Algoritmo Completa tu compra", () => {
        cy.visit("/producto/Pa%C3%B1al-Babysec-Super-Premium-Talla-M/012525");
        cy.checkGondolaIframe("Braindw14");
      });
    });
    describe("Gondola de Ultimos productos navegados - 6 productos", () => {
      it("Prod. 1 Aparece Gondola Cat. Directa Tambien te podria interesar Crema-Dental-Colgate-Triple", () => {
        cy.visit(
          "/producto/Crema-Adhesiva-Para-Protesis-Dentales-Corega-Ultra/425350"
        );
        cy.wait(10000);
        cy.checkGondolaIframe("Braindw13");
      });
      it("Prod. 2 Aparece Gondola Cat. Directa Tambien te podria interesar Jabon en barra Nivea", () => {
        cy.visit("/producto/jabon-en-barra-nivea-proteina-de-leche-3un/424012");
        cy.wait(10000);
        cy.checkGondolaIframe("Braindw13");
      });
      it("Prod. 3 Aparece Gondola Cat. Directa Tambien te podria interesar Crema-Hidratante-Cetaphil", () => {
        cy.visit(
          "/producto/Crema-Hidratante-Cetaphil-para-Piel-Sensible/425313"
        );
        cy.wait(10000);
        cy.checkGondolaIframe("Braindw13");
      });
      it("Prod. 4 Aparece Gondola Cat. Directa Tambien te podria interesar Nido Protectus Etapas", () => {
        cy.visit("/producto/Nido-Protectus-Etapas-1%2B/012003");
        cy.wait(10000);
        cy.checkGondolaIframe("Braindw13");
      });
      it("Prod. 5 Aparece Gondola Cat. Directa Tambien te podria interesar Crema para peinar Pantene", () => {
        cy.visit(
          "/producto/Crema-Para-Peinar-Restauraci%C3%B3n-Pantene-Pro-V/007852"
        );
        cy.wait(10000);
        cy.checkGondolaIframe("Braindw13");
      });
      it("Prod. 6 Aparece Gondola Cat. Directa Tambien te podria interesar Quita Esmalte Limon Portugal", () => {
        cy.visit("/producto/Quita-Esmalte-Lim%C3%B3n-Portugal/912367");
        cy.wait(10000);
        cy.checkGondolaIframe("Braindw13");
      });
      it("Aparece Gondola Ultimos productos navegados", () => {
        cy.visit("/");
        cy.wait(20000);
        cy.checkGondolaIframe("Braindw6");
      });
      describe("Banner Header de Los mas comprados en Listados", () => {
        it("Aparece Los mas agregados al carro en Nutricion a precios bajos", () => {
          cy.visit("/lista/lo-mejor-en-nutricion-a-precios-bajos");
          cy.wait(10000);
          cy.checkGondolaIframe("Braindw37");
        });
      });
    });
    describe("Buscador Brain 'sahmpu'", () => {
      it("Trae resultados la busqueda", () => {
        cy.server();
        cy.route("**/buscador?keyword=**").as("busqueda");
        cy.visit("/");
        cy.wait(10000);
        cy.get(".main-header-search-input").type("sahmpu", { force: true });
      });
    });
    describe("Buscador Brain API Search 'sahmpu'", () => {
      it("Aparece Resultados de busqueda", () => {
        cy.visit("/buscador?keyword=sahmpu");
        cy.wait(12000);
        cy.checkGondolaIframe("Braindw39");
      });
      describe("Buscador Brain Busqueda vacia 'ascasovcneojvbs'", () => {
        it("Aparece Los Mas Vistos", () => {
          cy.visit("/buscador?keyword=ascasovcneojvbs");
          cy.wait(12000);
          cy.checkGondolaIframe("Braindw34");
        });
        it("Aparece Ultima categoria navegada Cuidado de la piel", () => {
          cy.visit("/categoria/cuidado-personal/cuidado-de-la-piel");
          cy.wait(12000);
          cy.visit("/buscador?keyword=ascasovcneojvbs");
          cy.wait(10000);
          cy.checkGondolaIframe("Braindw35");
        });
      });
    });

    describe("Gondolas Home", () => {
      it("Aparece Gondola 2", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw2");
      });
      it("Aparece Gondola 6", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw6");
      });
      it("Aparece Gondola 5", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw5");
      });
      it("Aparece Gondola 19", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw19");
      });
      it("Aparece Gondola 3", () => {
        cy.visit("/");
        cy.checkGondolaIframe("Braindw3");
      });
    });
  }
);

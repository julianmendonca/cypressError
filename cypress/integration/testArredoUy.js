context("Arredo Uy", () => {
  describe("Buscador", () => {
    describe("Desplegable", () => {
      it("Request al endpoint de Braindw", () => {
        cy.visit("https://www.arredo.com.uy/");
        cy.wait(10000);
        cy.intercept({
          method: "GET",
          url:
            "https://u.braindw.com/vtex/buscaautocomplete/arredo-uy/?maxRows=10&productNameContains=sabana&suggestionsStack=&sc=2",
        }).as("apiCheck");
        cy.get(".fulltext-search-box").type("sabana", { force: true });
        cy.wait("@apiCheck").then((interception) => {
          assert.isNotNull(interception.response.body, "1st API call has data");
        });
      });
      it("La busqueda trae resultados", () => {
        cy.visit("https://www.arredo.com.uy/");
        cy.wait(10000);
        cy.get(".fulltext-search-box").type("sabana", { force: true });
        cy.wait(10000);
        cy.get(".ui-menu-item");
      });
    });
    describe("Grilla de resultados", () => {
      it("Request al endpoint de Braindw", () => {
        cy.visit("https://www.arredo.com.uy/");
        cy.wait(10000);
        cy.intercept({
          method: "GET",
          url:
            "https://u.braindw.com/vtex/buscaautocompleteids/arredo-uy/?maxRows=100&productNameContains=sabana&suggestionsStack=&sc=2",
        }).as("apiCheck");
        cy.get(".fulltext-search-box").type("sabana{enter}", { force: true });
        cy.wait("@apiCheck").then((interception) => {
          assert.isNotNull(interception.response.body, "1st API call has data");
        });
      });
      it("Busqueda trae resultados", () => {
        cy.visit("https://www.arredo.com.uy/");
        cy.wait(10000);
        cy.get(".fulltext-search-box").type("sabana{enter}", { force: true });
        cy.wait(10000);
        cy.get(".box-item");
      });
    });
  });
  describe("Gondola checkout", () => {
    it("Agrego un producto al carro", () => {
      cy.visit("https://www.arredo.com.uy/habitacion/sabanas");
      cy.wait(5000);
      cy.get(".product-link").eq(0).click({ force: true });
      cy.wait(15000);
      cy.get(".buy-in-page-button").eq(0).click({ force: true });
    });
    it("Aparece gondola en checkout", () => {
      cy.visit("https://www.arredo.com.uy/checkout#/cart");
      cy.wait(10000);
      cy.getIframeBody("Braindw45").find(".owl-item:not(.cloned)");
    });
  });
  describe("Gondolas pagina de producto", () => {
    describe("Producto 1", () => {
      it("Aparece Gondola También podría interesarte", () => {
        cy.visit("https://www.arredo.com.uy/habitacion/sabanas");
        cy.wait(5000);
        cy.get(".product-link").eq(0).click({ force: true });
        cy.wait(15000);
        cy.getIframeBody("Braindw14").find(".owl-item:not(.cloned)");
      });
      it("Aparece Gondola Personas que se interesan en este producto compran", () => {
        cy.visit("https://www.arredo.com.uy/habitacion/sabanas");
        cy.wait(5000);
        cy.get(".product-link").eq(0).click({ force: true });
        cy.wait(15000);
        cy.getIframeBody("Braindw15").find(".owl-item:not(.cloned)");
      });
    });
    describe("Producto 2", () => {
      it("Aparece Gondola También podría interesarte", () => {
        cy.visit("https://www.arredo.com.uy/habitacion/sabanas");
        cy.wait(5000);
        cy.get(".product-link").eq(1).click({ force: true });
        cy.wait(15000);
        cy.getIframeBody("Braindw14").find(".owl-item:not(.cloned)");
      });
      it("Aparece Gondola Personas que se interesan en este producto compran", () => {
        cy.visit("https://www.arredo.com.uy/habitacion/sabanas");
        cy.wait(5000);
        cy.get(".product-link").eq(1).click({ force: true });
        cy.wait(15000);
        cy.getIframeBody("Braindw15").find(".owl-item:not(.cloned)");
      });
    });
    describe("Producto 3", () => {
      it("Aparece Gondola También podría interesarte", () => {
        cy.visit("https://www.arredo.com.uy/habitacion/sabanas");
        cy.wait(5000);
        cy.get(".product-link").eq(2).click({ force: true });
        cy.wait(15000);
        cy.getIframeBody("Braindw14").find(".owl-item:not(.cloned)");
      });
      it("Aparece Gondola Personas que se interesan en este producto compran", () => {
        cy.visit("https://www.arredo.com.uy/habitacion/sabanas");
        cy.wait(5000);
        cy.get(".product-link").eq(2).click({ force: true });
        cy.wait(15000);
        cy.getIframeBody("Braindw15").find(".owl-item:not(.cloned)");
      });
    });
  });
  describe("Gondola pagina categoria", () => {
    it("Categoria habitacion", () => {
      cy.visit("https://www.arredo.com.uy/habitacion");
      cy.wait(10000);
      cy.getIframeBody("Braindw12").find(".owl-item:not(.cloned)");
    });
    it("Categoria sabanas", () => {
      cy.visit("https://www.arredo.com.uy/habitacion/sabanas");
      cy.wait(10000);
      cy.getIframeBody("Braindw12").find(".owl-item:not(.cloned)");
    });
  });
  describe("Home", () => {
    it("Aparece caja de registro", () => {
      cy.visit("https://www.arredo.com.uy/");
      cy.wait(10000);
      cy.get("#braindw_register");
    });
    it("Gondola con imagen a la izquierda", () => {
      cy.visit("https://www.arredo.com.uy/");
      cy.wait(10000);
      cy.getIframeBody("Braindw4").find(".owl-item:not(.cloned)");
    });
    it("Gondola te podria interesar", () => {
      cy.visit("https://www.arredo.com.uy/");
      cy.wait(10000);
      cy.getIframeBody("Braindw3").find(".owl-item:not(.cloned)");
    });
    it("Gondola recomendado para vos", () => {
      cy.visit("https://www.arredo.com.uy/");
      cy.wait(10000);
      cy.getIframeBody("Braindw8").find(".owl-item:not(.cloned)");
    });
    it("Gondola ultimos vistos", () => {
      cy.visit("https://www.arredo.com.uy/");
      cy.wait(10000);
      cy.getIframeBody("Braindw9").find(".owl-item:not(.cloned)");
    });
  });
});

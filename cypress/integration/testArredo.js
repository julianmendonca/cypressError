context("Arredo", () => {
  describe("Gondolas Productos", () => {
    describe("Home", () => {
      it("No Aparece la Caja de Registro", () => {
        cy.visit("https://www.arredo.com.ar/");
        cy.wait(15000);
        cy.get("body").find("#braindw_register");
      });
    });
    describe("Producto 1", () => {
      it("Aparece Gondola Completa tu compra", () => {
        cy.visit(
          "https://www.arredo.com.ar/reposera-multifuncion-63111l60766/p"
        );
        cy.wait(15000);
        cy.getIframeBody("Braindw17").find(".owl-item:not(.cloned)");
      });
      it("Aparece Gondola Personas que se interesan Compran", () => {
        cy.visit(
          "https://www.arredo.com.ar/reposera-multifuncion-63111l60766/p"
        );
        cy.wait(15000);
        cy.getIframeBody("Braindw16").find(".owl-item:not(.cloned)");
      });
    });
    describe("Producto 2", () => {
      it("Aparece Gondola Completa tu compra", () => {
        cy.visit("https://www.arredo.com.ar/banco-taburete-leaf-63471z20782/p");
        cy.wait(15000);
        cy.getIframeBody("Braindw74").find(".owl-item:not(.cloned)");
      });
      it("Aparece Gondola Los Que Compraron Compran", () => {
        cy.visit("https://www.arredo.com.ar/banco-taburete-leaf-63471z20782/p");
        cy.wait(15000);
        cy.getIframeBody("Braindw16").find(".owl-item:not(.cloned)");
      });
    });
    describe("Producto 3", () => {
      it("Aparece Gondola Completa tu compra", () => {
        cy.visit(
          "https://www.arredo.com.ar/reposera-multifuncion-63111l60766/p"
        );
        cy.wait(15000);
        cy.getIframeBody("Braindw17").find(".owl-item:not(.cloned)");
      });
      it("Aparece Gondola Los Que Compraron Compran", () => {
        cy.visit(
          "https://www.arredo.com.ar/reposera-multifuncion-63111l60766/p"
        );
        cy.wait(15000);
        cy.getIframeBody("Braindw16").find(".owl-item:not(.cloned)");
      });
    });
  });

  describe("Gondolas Home", () => {
    it("Aparece Gondola te podria interesar", () => {
      cy.visit("https://www.arredo.com.ar/");
      cy.wait(20000);
      cy.getIframeBody("Braindw3").find(".owl-item:not(.cloned)");
    });

    it("Aparece Gondola baño", () => {
      cy.visit("https://www.arredo.com.ar/");
      cy.wait(20000);
      cy.getIframeBody("Braindw4").find(".owl-item:not(.cloned)");
    });

    it("Aparece Gondola Recomendado Para Vos", () => {
      cy.visit("https://www.arredo.com.ar/");
      cy.wait(20000);
      cy.getIframeBody("Braindw8").find(".owl-item:not(.cloned)");
    });

    it("Aparece Gondola Mixta", () => {
      cy.visit("https://www.arredo.com.ar/");
      cy.wait(20000);
      cy.getIframeBody("Braindw9").contains("AGREGAR");
    });
  });
});

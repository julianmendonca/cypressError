context("locatel", () =>{ 
  describe("Gondola cross checkout", () => {
    it("Agrego un producto al carro", () => {
      cy.visit("https://www.locatelcolombia.com/maternidad-bebe/higiene-bebes/aceites");
      cy.wait(10000)
      cy.get(".btnAcepto").click({ force: true });
      cy.wait(5000)
      cy.get(".product-add-to-cart").first().click({ force: true });
    })
  })
  describe("Buscador Brain 'crema'", () => {
    it("Trae resultados la busqueda", () => {
      cy.server();
      cy.route("**search/locatelcolombia**").as("busqueda");
      cy.visit("https://www.locatelcolombia.com/");
      cy.wait(10000)
      cy.get("#x-autocomplete-input").type("crema");
      cy.wait(5000)
      cy.get("#buscadorBox .info-busca").first()
    })

  });

  describe("Buscador Brain 'ibupofreno'", () => {
    it("Aparece Los Mas Vistos", () => {
      cy.visit("https://www.locatelcolombia.com/Sistema/buscavazia?ft=ibupofreno");
      cy.wait(12000)
      cy.getIframeBody("Braindw28").find(".owl-item:not(.cloned)");
    })

    it("Aparece Te Puede Interesar", () => {
      cy.visit("https://www.locatelcolombia.com/Sistema/buscavazia?ft=ibupofreno");
      cy.wait(12000)
      cy.getIframeBody("Braindw38").find(".owl-item:not(.cloned)");
    })
  });

  describe("Buscador Brain 'asdasdasdas'", () => {
    it("Aparece Los Mas Populares", () => {
      cy.visit("https://www.locatelcolombia.com/Sistema/buscavazia?ft=asdasdasdasd");
      cy.wait(12000)
      cy.getIframeBody("Braindw27").find(".owl-item:not(.cloned)");
    })

    it("Aparece Te Puede Interesar", () => {
      cy.visit("https://www.locatelcolombia.com/dispositivos-medicos-en-casa/equipos-medicos-diagnostico/basculas")
      cy.wait(4000)
      cy.visit("https://www.locatelcolombia.com/Sistema/buscavazia?ft=asdasdasdasd");
      cy.wait(12000)
      cy.getIframeBody("Braindw40").find(".owl-item:not(.cloned)");
    })
  });
  describe("Gondolas de 2 productos", function () {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    describe("producto 7702057012724-benzirin-verde-solucion--oral-x-120ml/p", function () {
      it("Aparece la gondola Los mas vistos", function () {
        cy.visit(
          "https://www.locatelcolombia.com/7702057012724-benzirin-verde-solucion--oral-x-120ml/p"
        );
        cy.wait(10000);
        cy.getIframeBody("Braindw22").find(".owl-item:not(.cloned)");
      });
      it("Aparece la gondola productos relacionados", function () {
        cy.visit(
          "https://www.locatelcolombia.com/7702057012724-benzirin-verde-solucion--oral-x-120ml/p"
        );
        cy.wait(10000);
        cy.getIframeBody("Braindw31").find(".owl-item:not(.cloned)");
      });
      it("Aparece la gondola Completa tu compra", () => {
        cy.visit(
          "https://www.locatelcolombia.com/7702057012724-benzirin-verde-solucion--oral-x-120ml/p"
        );
        cy.wait(10000);
        cy.getIframeBody("Braindw61").find(".owl-item:not(.cloned)");
      })
     
    });

    describe("producto diagnostico-y-medicion-pulsoximetro-pulsoximetro-homelife-adulto-pediatrico-purpura/p", function () {
      it("Aparece la gondola Los mas vistos", function () {
        cy.visit(
          "https://www.locatelcolombia.com/diagnostico-y-medicion-pulsoximetro-pulsoximetro-homelife-adulto-pediatrico-purpura/p"
        );
        cy.wait(10000);
        cy.getIframeBody("Braindw22").find(".owl-item:not(.cloned)");
      });
      it("Aparece la gondola productos relacionados", function () {
        cy.getIframeBody("Braindw31").find(".owl-item:not(.cloned)");
      });
      it("Aparece la gondola otros tambien vieron", () => {
        cy.getIframeBody("Braindw60").find(".owl-item:not(.cloned)");
      })
      
    });
  });

  describe("Gondolas Home", () => {
    it('Aparece "Ultimos vistos"', () => {
      cy.wait(20000);
      cy.visit("https://www.locatelcolombia.com/");
      cy.wait(20000);
      cy.getIframeBody("Braindw4").find("#braindw_gondvis");
    });
    it('Aparece "Te puede interesar"', () => {
      cy.getIframeBody("Braindw4").find(".cont-products-slider");
    });

    describe("Navego otro producto", () => {
      it("Aparece en la gondola", () => {
        var productName = "pulsoximetro";
        cy.visit("https://www.locatelcolombia.com/");
        cy.wait(30000);
        cy.getIframeBody("Braindw4")
          .contains(productName);
      });
    });
  });

  describe("Gondola Las mejores ofertas", () => {
    it("Aparece la gondola", () => {
      cy.visit("https://www.locatelcolombia.com/");
      cy.wait(10000);
      cy.getIframeBody("Braindw7").find(".owl-item:not(.cloned)");
    });

    it("Los productos los mismos que los de la api", function () {
      cy.visit("https://www.locatelcolombia.com/");
      cy.wait(5000);
      cy.checkApiIframe(
        "https://u.braindw.com/Vtex/GetSearch?token=&idcategory=12&company=locatelcolombia&ext=json&sc=1&idproduct=&limit=16&minprice=&maxprice=&order=1&sale=0&minstock=1",
        "Braindw7",
        ".owl-item:not(.cloned) a[bw-sku=",
        6,
        "Sku"
      );
    });
  });

  describe("Gondola Recomendados", () => {
    it("Aparece la gondola", () => {
      cy.visit("https://www.locatelcolombia.com/");
      cy.wait(10000);
      cy.getIframeBody("Braindw6").find(".owl-item:not(.cloned)");
    });
  });

  describe("Gondola Categorìa padre mas vendidos", () => {
    it("Aparece la gondola", () => {
      cy.visit("https://www.locatelcolombia.com/dermocosmetica");
      cy.wait(10000);
      cy.getIframeBody("Braindw35")
        .find(".owl-item:not(.cloned)")
        ;
    });

    it("Los productos son los mismos que en la api", function () {
      cy.visit("https://www.locatelcolombia.com/dermocosmetica");
      cy.wait(5000);
      cy.checkApiIframe(
      "https://a.braindw.com/api/get/GetProductsTopCartByCategoryParent?hash=locatel_produccion_xvbqr&parentcode=2&limitProducts=12&refreshMetaData=true&branchOffice=1",
      "Braindw35",
      ".owl-item:not(.cloned) a[bw-sku=",
      6,
      "Sku"
    );
    });
  });

  describe("Gondola Categorìa padre mejores ofertas", () => {
    it("Aparece la gondola", () => {
      cy.visit("https://www.locatelcolombia.com/dermocosmetica");
      cy.wait(10000);
      cy.getIframeBody("Braindw34")
        .find(".owl-item:not(.cloned)")
        ;
    });

    it("Los productos no son los mismos que en la api", function () {
      cy.visit("https://www.locatelcolombia.com/dermocosmetica");
      cy.wait(5000);
      cy.checkApiIframe(
      "https://u.braindw.com/Vtex/GetSearch?token=&limit=16&sale=0&idcategory=2&minstock=1&company=locatelcolombia&ext=json&sc=",
      "Braindw34",
      ".owl-item:not(.cloned) a[bw-sku=",
      6,
      "Sku"
    );
    });
  });

  describe("Gondola Categorìa padre mas vistos", () => {
    it("Aparece la gondola", () => {
      cy.visit("https://www.locatelcolombia.com/dermocosmetica");
      cy.wait(10000);
      cy.getIframeBody("Braindw36")
        .find(".owl-item:not(.cloned)")
        ;
    });

    it("Los productos son los mismos que en la api", function () {
      cy.visit("https://www.locatelcolombia.com/dermocosmetica");
      cy.wait(5000);
      cy.checkApiIframe(
      "https://a.braindw.com/api/get/GetProductsByCategories?hash=locatel_produccion_xvbqr&categories=2&limitProducts=16&refreshMetaData=true&branchOffice=1",
      "Braindw36",
      ".owl-item:not(.cloned) a[bw-sku=",
      6,
      "Sku"
    );
    });
  });

  describe("Banner Header Categoria", () => {
    it("Aparece la gondola", () => {
      cy.visit("https://www.locatelcolombia.com/dermocosmetica/cuidado-solar");
      cy.wait(10000);
      cy.getIframeBody("Braindw17").find(".owl-item:not(.cloned)");
    });

    it("Los productos no son los mismos que en la api", function () {
      cy.visit("https://www.locatelcolombia.com/dermocosmetica/cuidado-solar");
      cy.wait(5000);
      cy.checkApiIframe(
      "https://u.braindw.com/Vtex/GetSearch?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9hbm9ueW1vdXMiOiIiLCJuYmYiOjE1ODkyNDc4MzEsImV4cCI6MTU4OTI0ODEzMSwiaWF0IjoxNTg5MjQ3ODMxfQ.B_FJyFEHcM3AGNRnjqMby3b57PHWsz_IKakGvei8_Hk&limit=8&sale=0&idcategory=17&productclusterids=&minstock=1&company=locatelcolombia&ext=json&sc=1",
      "Braindw17",
      ".owl-item:not(.cloned) a[bw-sku=",
      6,
      "Sku"
    );
    });
  });

  describe("Gondola Ficha producto Los mas vistos-Directa", () => {
    it("Aparece la gondola", () => {
      cy.visit(
        "https://www.locatelcolombia.com/190679000187-acondicionador-herbal-essences-argan-de-morocco-oil-x400ml/p"
      );
      cy.wait(10000);
      cy.getIframeBody("Braindw22").find(".owl-item:not(.cloned)");
    });
    it("Aparecen los mismos productos que la API", () => {
      cy.visit("https://www.locatelcolombia.com/190679000187-acondicionador-herbal-essences-argan-de-morocco-oil-x400ml/p");
      cy.wait(5000);
      cy.checkApiIframe(
        "https://a.braindw.com/api/get/GetProductsByCategories?hash=locatel_produccion_xvbqr&branchOffice=1&refreshMetaData=true&limitproducts=16&minstock=0&categories=64&order=0&excludebreadcrumbcategories=",
        "Braindw22",
        ".owl-item:not(.cloned) a[bw-sku=",
        6,
        "Sku"
      );
    })
  });

  describe('Gondolas de chekout', () => {
    it("Aparecen las gondolas de chekout", () => {
      cy.visit("https://www.locatelcolombia.com/checkout/#/cart")
      cy.wait(30000)
      cy.getIframeBody("Braindw41").find(".owl-item:not(.cloned)");
    })
  })
})
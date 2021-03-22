beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});
context(
  "Farmaonline",
  {
    baseUrl: "https://www.farmaonline.com/",
    defaultCommandTimeout: 10000,
  },
  () => {
    describe("Gondolas Home", () => {
      /*
        describe('Gondola Home', () => {
            it('Aparece Gondola 9 Productos Destacados', () => {
                cy.visit('/');
                cy.wait(15000);
                cy.checkGondolaIframe("Braindw9")
                
            })
            it("Los productos son los mismos que en la api", function () {
                cy.visit("/");
                cy.wait(5000);
                cy.checkApiIframe(
                "https://u.braindw.com/Vtex/GetSearch?token=&idcategory=70300&company=farmaonline&ext=json&sc=&productids=&prioritysku=&idproduct=&limit=40&minprice=&maxprice=&order=1&sale=0&minstock=1",
                "Braindw9",
                ".owl-item:not(.cloned) a[bw-sku=",
                4,
                "Sku"
              );
            })  
        })
        */
      describe("Gondola Home Ultimos navegados", () => {
        it("Producto 1 Directa Aparece Gondola Quizas te pueda interesae en la-roche-posay-cicaplast ", () => {
          cy.visit(
            "/la-roche-posay-cicaplast-baume-b5-multi-reparador-40-ml8016376/p"
          );
          cy.checkGondolaIframe("Braindw16");
        });
        it("Los productos son los mismos que en la api", function () {
          cy.visit(
            "/la-roche-posay-cicaplast-baume-b5-multi-reparador-40-ml8016376/p"
          );
          cy.checkApiIframe(
            "https://a.braindw.com/api/get/GetProductsByCategories?hash=farmaonline_produccion_ifh6p&branchOffice=&refreshMetaData=true&excludekey=&prioritysku=&limitproducts=16&minstock=1&categories=70200&order=0&excludebreadcrumbcategories=",
            "Braindw16",
            ".owl-item:not(.cloned) a[bw-sku=",
            5,
            "Sku"
          );
        });
        it("Producto 1 Intermedia  Aparece Gondola Los Que Compraron Compran en la-roche-posay-cicaplast", () => {
          cy.visit(
            "/la-roche-posay-cicaplast-baume-b5-multi-reparador-40-ml8016376/p"
          );
          cy.checkGondolaIframe("Braindw17");
        });
        it("Producto 1 Cross Algoritmo  Aparece Gondola Quienes vieron este producto miraron en la-roche-posay-cicaplast", () => {
          cy.visit(
            "/la-roche-posay-cicaplast-baume-b5-multi-reparador-40-ml8016376/p"
          );
          cy.checkGondolaIframe("Braindw39");
        });

        it("Producto 2 Directa Aparece Gondola Quizas te pueda interesae en dove-shampoo-regeneracion ", () => {
          cy.visit("/dove-shampoo-regeneracin-extrema-200-ml8042051/p");
          cy.checkGondolaIframe("Braindw16");
        });

        it("Producto 2 Intermedia  Aparece Gondola Los Que Compraron Compran en la-roche-posay-cicaplast", () => {
          cy.visit("/dove-shampoo-regeneracin-extrema-200-ml8042051/p");
          cy.checkGondolaIframe("Braindw17");
        });
        it("Producto 3 Directa Aparece Gondola Quizas te pueda interesae en pampers-paales-confort ", () => {
          cy.visit("/pampers-paales-confort-sec-pants-talle-p-8040409/p");
          cy.checkGondolaIframe("Braindw16");
        });
        it("Producto 3 Intermedia  Aparece Gondola Los Que Compraron Compran en la-roche-posay-cicaplast", () => {
          cy.visit("/pampers-paales-confort-sec-pants-talle-p-8040409/p");
          cy.checkGondolaIframe("Braindw17");
        });
        it("Aparece Gondolas Utlimos Navegados", () => {
          cy.visit("/");
          cy.checkGondolaIframe("Braindw8");
        });
        it("Aparece Gondolas Utlima Categoria Navegada", () => {
          cy.visit("/");
          cy.checkGondolaIframe("Braindw1");
        });
        /*
            it('Aparece Gondolas Los mas buscados', () => {
                cy.visit('/');
                cy.wait(15000);
                cy.checkGondolaIframe("Braindw10")
            })
            */
      });
      describe("Banner Header", () => {
        it("Aparece Banner Header Categoria Principal ", () => {
          cy.visit("/dermocosmetica");
          cy.checkGondolaIframe("Braindw14");
        });
      });
      describe("Gondolas Search", () => {
        it("Aparece Gonodola API Search con Meibilain ", () => {
          cy.visit("/Sistema/buscavazia?ft=meibilain");
          cy.checkGondolaIframe("Braindw48");
        });
        it("Aparece Gonodola Sugeridos con Meibilain ", () => {
          cy.visit("/Sistema/buscavazia?ft=meibilain");
          cy.checkGondolaIframe("Braindw21");
        });
        it("Aparece Gonodola Los mas vistos con Larroch ", () => {
          cy.visit("/Sistema/buscavazia?ft=larroch");
          cy.checkGondolaIframe("Braindw22");
        });
        it("Aparece Gonodola Ultima categoria Navegada con Larroch ", () => {
          cy.visit("/Perfumes---Fragancias/Mujer-Importado");
          cy.visit("/Sistema/buscavazia?ft=larroch");
          cy.checkGondolaIframe("Braindw23");
        });
      });
    });
  }
);

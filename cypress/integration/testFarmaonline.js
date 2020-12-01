context('Farmaonline', () => {


    describe('Gondolas Home', () => {
        /*
        describe('Gondola Home', () => {
            it('Aparece Gondola 9 Productos Destacados', () => {
                cy.visit('https://www.farmaonline.com/');
                cy.wait(15000);
                cy.getIframeBody("Braindw9").find(".owl-item:not(.cloned)");
                
            })
            it("Los productos son los mismos que en la api", function () {
                cy.visit("https://www.farmaonline.com/");
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
        describe('Gondola Home Ultimos navegados', () => {
            it('Producto 1 Directa Aparece Gondola Quizas te pueda interesae en la-roche-posay-cicaplast ', () => {
                cy.visit('https://www.farmaonline.com/la-roche-posay-cicaplast-baume-b5-multi-reparador-40-ml8016376/p');
                cy.wait(15000);
                cy.getIframeBody("Braindw16").find(".owl-item:not(.cloned)");
            })
            it("Los productos son los mismos que en la api", function () {
                cy.visit("https://www.farmaonline.com/la-roche-posay-cicaplast-baume-b5-multi-reparador-40-ml8016376/p");
                cy.wait(5000);
                cy.checkApiIframe(
                "https://a.braindw.com/api/get/GetProductsByCategories?hash=farmaonline_produccion_ifh6p&branchOffice=&refreshMetaData=true&excludekey=&prioritysku=&limitproducts=16&minstock=1&categories=70200&order=0&excludebreadcrumbcategories=",
                "Braindw16",
                ".owl-item:not(.cloned) a[bw-sku=",
                5,
                "Sku"
              );
            })  
            it('Producto 1 Intermedia  Aparece Gondola Los Que Compraron Compran en la-roche-posay-cicaplast', () => {
                cy.visit('https://www.farmaonline.com/la-roche-posay-cicaplast-baume-b5-multi-reparador-40-ml8016376/p');
                cy.wait(15000);
                cy.getIframeBody("Braindw17").find(".owl-item:not(.cloned)");
            })
            it('Producto 1 Cross Algoritmo  Aparece Gondola Quienes vieron este producto miraron en la-roche-posay-cicaplast', () => {
                cy.visit('https://www.farmaonline.com/la-roche-posay-cicaplast-baume-b5-multi-reparador-40-ml8016376/p');
                cy.wait(15000);
                cy.getIframeBody("Braindw39").find(".owl-item:not(.cloned)");
            })
            
            it('Producto 2 Directa Aparece Gondola Quizas te pueda interesae en dove-shampoo-regeneracion ', () => {
                cy.visit('https://www.farmaonline.com/dove-shampoo-regeneracin-extrema-200-ml8042051/p');
                cy.wait(15000);
                cy.getIframeBody("Braindw16").find(".owl-item:not(.cloned)");
            }) 
            
            it('Producto 2 Intermedia  Aparece Gondola Los Que Compraron Compran en la-roche-posay-cicaplast', () => {
                cy.visit('https://www.farmaonline.com/dove-shampoo-regeneracin-extrema-200-ml8042051/p');
                cy.wait(15000);
                cy.getIframeBody("Braindw17").find(".owl-item:not(.cloned)");
            }) 
            it('Producto 3 Directa Aparece Gondola Quizas te pueda interesae en pampers-paales-confort ', () => {
                cy.visit('https://www.farmaonline.com/pampers-paales-confort-sec-pants-talle-p-8040409/p');
                cy.wait(15000);
                cy.getIframeBody("Braindw16").find(".owl-item:not(.cloned)");
            }) 
            it('Producto 3 Intermedia  Aparece Gondola Los Que Compraron Compran en la-roche-posay-cicaplast', () => {
                cy.visit('https://www.farmaonline.com/pampers-paales-confort-sec-pants-talle-p-8040409/p');
                cy.wait(15000);
                cy.getIframeBody("Braindw17").find(".owl-item:not(.cloned)");
            })
            it('Aparece Gondolas Utlimos Navegados', () => {
                cy.visit('https://www.farmaonline.com/');
                cy.wait(15000);
                cy.getIframeBody("Braindw8").find(".owl-item:not(.cloned)");
            })
            it('Aparece Gondolas Utlima Categoria Navegada', () => {
                cy.visit('https://www.farmaonline.com/');
                cy.wait(15000);
                cy.getIframeBody("Braindw1").find(".owl-item:not(.cloned)");
            })
            /*
            it('Aparece Gondolas Los mas buscados', () => {
                cy.visit('https://www.farmaonline.com/');
                cy.wait(15000);
                cy.getIframeBody("Braindw10").find(".owl-item:not(.cloned)");
            })
            */
        })    
        describe('Banner Header', () => {
            it('Aparece Banner Header Categoria Principal ', () => {
                cy.visit('https://www.farmaonline.com/dermocosmetica');
                cy.wait(15000);
                cy.getIframeBody("Braindw14").find(".owl-item:not(.cloned)");
            }) 
                   
        })
        describe('Gondolas Search', () => {
            it('Aparece Gonodola API Search con Meibilain ', () => {
                cy.visit('https://www.farmaonline.com/Sistema/buscavazia?ft=meibilain');
                cy.wait(15000);
                cy.getIframeBody("Braindw48").find(".owl-item:not(.cloned)");
            })
            it('Aparece Gonodola Sugeridos con Meibilain ', () => {
                cy.visit('https://www.farmaonline.com/Sistema/buscavazia?ft=meibilain');
                cy.wait(15000);
                cy.getIframeBody("Braindw21").find(".owl-item:not(.cloned)");
            })
            it('Aparece Gonodola Los mas vistos con Larroch ', () => {
                cy.visit('https://www.farmaonline.com/Sistema/buscavazia?ft=larroch');
                cy.wait(15000);
                cy.getIframeBody("Braindw22").find(".owl-item:not(.cloned)");
            }) 
            it('Aparece Gonodola Ultima categoria Navegada con Larroch ', () => {
                
                cy.visit("https://www.farmaonline.com/Perfumes---Fragancias/Mujer-Importado");
                cy.wait(5000)
                cy.visit('https://www.farmaonline.com/Sistema/buscavazia?ft=larroch');
                cy.wait(15000);
                cy.getIframeBody("Braindw23").find(".owl-item:not(.cloned)");
            }) 
                   
        })
        
    })
     
})
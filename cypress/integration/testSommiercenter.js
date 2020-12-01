context("Sommiercenter", () => {
    describe("Gondola Ultimos navegados", () => {

        it('Producto 1 Cross Algoritmo', function () {
            cy.visit("https://sommiercenter.com/colchon-1-plaza-80x190-sealy-linen-resorte");
            cy.wait(10000);
            cy.getIframeBody('Braindw37').find('.owl-item:not(.cloned)')
        })
        it('Producto 1 Intermedia', function () {
            cy.visit("https://sommiercenter.com/colchon-1-plaza-80x190-sealy-linen-resorte");
            cy.wait(10000);
            cy.getIframeBody('Braindw17').find('.owl-item:not(.cloned)')
        })
        it('Producto 1 Custom Categoria', function () {
            cy.visit("https://sommiercenter.com/colchon-1-plaza-80x190-sealy-linen-resorte");
            cy.wait(10000);
            cy.getIframeBody('Braindw39').find('.owl-item:not(.cloned)')
        })
        it('Producto 2 Intermedia', function () {
            cy.visit("https://sommiercenter.com/colchones");
            cy.wait(10000);
            cy.get(".product-item-photo").eq(2).click();
            cy.wait(10000);
            cy.getIframeBody('Braindw17').find('.owl-item:not(.cloned)')
        })
        it('Producto 2 Custom Categoria', function () {
            cy.visit("https://sommiercenter.com/colchones");
            cy.wait(10000);
            cy.get(".product-item-photo").eq(2).click();
            cy.wait(10000);
            cy.getIframeBody('Braindw39').find('.owl-item:not(.cloned)')
        })
        it('Producto 3 Intermedia', function () {
            cy.visit("https://sommiercenter.com/colchones");
            cy.wait(10000);
            cy.get(".product-item-photo").eq(3).click();
            cy.wait(10000);
            cy.getIframeBody('Braindw17').find('.owl-item:not(.cloned)')
        })
        it('Producto 3 Custom Categoria', function () {
            cy.visit("https://sommiercenter.com/colchones");
            cy.wait(10000);
            cy.get(".product-item-photo").eq(3).click();
            cy.wait(10000);
            cy.getIframeBody('Braindw39').find('.owl-item:not(.cloned)')
        })
        it('Producto 4 Intermedia', function () {
            cy.visit("https://sommiercenter.com/colchones");
            cy.wait(10000);
            cy.get(".product-item-photo").eq(4).click();
            cy.wait(10000);
            cy.getIframeBody('Braindw17').find('.owl-item:not(.cloned)')
        })
        it('Producto 4 Custom Categoria', function () {
            cy.visit("https://sommiercenter.com/colchones");
            cy.wait(10000);
            cy.get(".product-item-photo").eq(4).click();
            cy.wait(10000);
            cy.getIframeBody('Braindw39').find('.owl-item:not(.cloned)')
        })
        it('Producto 5 Intermedia', function () {
            cy.visit("https://sommiercenter.com/colchones");
            cy.wait(10000);
            cy.get(".product-item-photo").eq(5).click();
            cy.wait(10000);
            cy.getIframeBody('Braindw17').find('.owl-item:not(.cloned)')
        })
        it('Producto 5 Custom Categoria', function () {
            cy.visit("https://sommiercenter.com/colchones");
            cy.wait(10000);
            cy.get(".product-item-photo").eq(5).click();
            cy.wait(10000);
            cy.getIframeBody('Braindw39').find('.owl-item:not(.cloned)')
        })
        it('Aparece Gondola Ultima Categoria Navegada"', function () {
            cy.visit("https://sommiercenter.com/");
            cy.wait(10000);
            cy.getIframeBody('Braindw1').find('.owl-item:not(.cloned)')
        })
        it('Aparece Gondola Ultimos navegados"', function () {
            cy.visit("https://sommiercenter.com/");
            cy.wait(30000);
            cy.getIframeBody('Braindw2').find('.owl-item:not(.cloned)')
        })
    })    
    describe("Banner Headers", () => {

        it('Aparece banner header en Categoria Sommier y Colcho"', function () {
            cy.visit("https://sommiercenter.com/sommier-y-colchon");
            cy.wait(10000);
            cy.getIframeBody('Braindw40').find('.owl-item:not(.cloned)')
        })    
    })
    
      describe("Gondolas Search", () => {

        it('Aparece Gondola Recuperacion con termino Conchon"', function () {
            cy.visit("https://sommiercenter.com/catalogsearch/result/?q=almuada");
            cy.wait(10000);
            cy.getIframeBody('Braindw19').find('.owl-item:not(.cloned)')
        })
        it('Aparece Gondola con resultado no encontrado "', function () {
            cy.visit("https://sommiercenter.com/catalogsearch/result/?q=cdddss");
            cy.wait(10000);
            cy.getIframeBody('Braindw20').find('.owl-item:not(.cloned)')
        })  
        it('Aparece Gondola Ultima Categoria Navegada "', function () {
            cy.visit("https://sommiercenter.com/catalogsearch/result/?q=cdddss");
            cy.wait(10000);
            cy.getIframeBody('Braindw21').find('.owl-item:not(.cloned)')
        })  
    })          
})
/*
context("Sodimac AR", () => {
    let polyfill

    // grab fetch polyfill from remote URL, could be also from a local package
    before(() => {
        const polyfillUrl = 'https://unpkg.com/unfetch/dist/unfetch.umd.js'

        cy.request(polyfillUrl)
            .then((response) => {
                polyfill = response.body
            })
    })

/*
    describe("Gondola Los Mas Vendidos", () => {

        it('Cargo la gondola "Los Mas Vendidos"', function () {
            cy.visit("https://www.sodimac.com.ar/sodimac-ar/");
            cy.wait(10000);
            cy.getIframeBody('Braindw3').find('.owl-item:not(.cloned)').should('exist')
        })
        it("Los productos son los mismos que en la api", function () {
            cy.visit("https://www.sodimac.com.ar/sodimac-ar/");
            cy.wait(5000);
            cy.checkApiIframe(
            "https://a.braindw.com/api/get/GetProductCartGlobal?hash=sodimac_produccion_lsfhn&branchOffice=3109&refreshMetaData=true&excludekey=&prioritysku=&limitproducts=15&minstock=1&order=7&sort=&excludebreadcrumbcategories=&notinsku=2390604",
            "Braindw3",
            ".owl-item:not(.cloned) a[bw-sku=",
            6,
            "Sku"
           );
          });

    })
    describe("Gondola Destacados", () => {

        it('Cargo la gondola "Los Destacados"', function () {
            cy.visit("https://www.sodimac.com.ar/sodimac-ar/");
            cy.wait(10000);
            cy.getIframeBody('Braindw4').find('.owl-item:not(.cloned)').should('exist')
        })
        it("Los productos son los mismos que en la api", function () {
            cy.visit("https://www.sodimac.com.ar/sodimac-ar/");
            cy.wait(5000);
            cy.checkApiIframe(
            "https://u.braindw.com/get/sodimac?ext=json&sc=3109&productids=2592886,227969X,2387972,2387921,2547252,231617X,225168X,148172X,1000578,2645335,2467054,2353342,2459515,1847341,2288192&prioritysku=&productids=2592886,227969X,2387972,2387921,2547252,231617X,225168X,148172X,1000578,2645335,2467054,2353342,2459515,1847341,2288192&limit=15&minprice=&maxprice=&order=5&sale=0&minstock=1&sort=&pricegroup=5021",
            "Braindw4",
            ".owl-item:not(.cloned) a[bw-sku=",
            6,
            "Sku"
           );
          });

    })

    describe('Gondola de 3 productos', function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        describe('Producto 1 Termotanque-a-gas-75-l-natural', function () {
            it("Aparece la gondola categoria directa", function () {
                cy.visit("https://www.sodimac.com.ar/sodimac-ar/product/2459345/Termotanque-a-gas-75-l-natural/2459345");
                cy.wait(10000);
                cy.getIframeBody('Braindw13').find('.owl-item:not(.cloned)')
            })
            
            })  
        describe('Producto 2 Cemento-cpc-50-kg', function () {
            it("Aparece la gondola categoria directa", function () {
                cy.visit("https://www.sodimac.com.ar/sodimac-ar/product/1568868/Cemento-cpc-50-kg/1568868");
                cy.wait(10000);
                cy.getIframeBody('Braindw13').find('.owl-item:not(.cloned)')
            })
            it("Aparece la gondola categoria custom", function () {
                cy.visit("https://www.sodimac.com.ar/sodimac-ar/product/1568868/Cemento-cpc-50-kg/1568868");
                cy.wait(10000);
                cy.getIframeBody('Braindw23').find('.owl-item:not(.cloned)')
            })
              
            })
            describe('Producto 3 Cemento-albanileria-plasticor', function () {
                it("Aparece la gondola categoria", function () {
                    cy.visit("https://www.sodimac.com.ar/sodimac-ar/product/1035061/Cemento-albanileria-plasticor-40-kg/1035061");
                    cy.wait(10000);
                    cy.getIframeBody('Braindw13').find('.owl-item:not(.cloned)')
            
                })
            }) 
            describe('Producto 4 Placa-estandar-95-mm', function () {
                it("Aparece la gondola algoritmo", function () {
                    cy.visit("https://www.sodimac.com.ar/sodimac-ar/product/1110187/Placa-estandar-95-mm-120-x-240-cm/1110187");
                    cy.wait(10000);
                    cy.getIframeBody('Braindw23').find('.owl-item:not(.cloned)')
            
                })
            })  

        /*
        describe('Ultimos Vistos Gondola Mixta Producto 1', () => {
            it('Aparece En La Gondola El Producto Nuevo Agregado', () => {
                cy.visit('https://www.sodimac.com.ar/sodimac-ar/product/2541890/Inodoro-largo-blanco-con-deposito/2541890?cid=bnchom8443')
                cy.wait(20000);
                cy.visit('https://www.sodimac.com.ar/sodimac-ar/');
                cy.wait(20000);
                cy.getIframeBody('Braindw1').find('#braindw_braindw-gondola-0_2541890')
                
            })
        })
        describe('Ultimos Vistos Gondola Mixta Producto 2', () => {
            it('Aparece En La Gondola El Producto Nuevo Agregado Cemento', () => {
                cy.visit('https://www.sodimac.com.ar/sodimac-ar/product/1568868/Cemento-cpc-50-kg/1568868?cid=homhom121')
                cy.wait(20000);
                cy.visit('https://www.sodimac.com.ar/sodimac-ar/');
                cy.wait(20000);
                cy.getIframeBody('Braindw1').find('#braindw_braindw-gondola-0_1568868')
            })
        })
        
    })
    describe('Banner PLP Root Plomeria', function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        describe('Categoria Plomeria', function () {
            it("Aparece la gondola categoria directa", function () {
                cy.visit("https://www.sodimac.com.ar/sodimac-ar/category/cat20992/Plomeria");
                cy.wait(10000);
                cy.getIframeBody('Braindw22').find('.owl-item:not(.cloned)')
            })
            
            })
        })
    describe('Banner PLP Calefones y Termotanques', function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        describe('Categoria Calefones y Termotanques', function () {
            it("Aparece la gondola categoria directa", function () {
                cy.visit("https://www.sodimac.com.ar/sodimac-ar/category/cat20526/Calefones-y-termotanques");
                cy.wait(10000);
                cy.getIframeBody('Braindw22').find('.owl-item:not(.cloned)')
            })
            
            })
        })
        
})
*/
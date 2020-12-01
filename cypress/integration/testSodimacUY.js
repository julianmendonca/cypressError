/*
context("Sodimac UY", () => {
    let polyfill

    // grab fetch polyfill from remote URL, could be also from a local package
    before(() => {
        const polyfillUrl = 'https://unpkg.com/unfetch/dist/unfetch.umd.js'

        cy.request(polyfillUrl)
            .then((response) => {
                polyfill = response.body
            })
    })

    describe('Gondolas y Banners', function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        describe('Banner Header PLP Root Sanitarios', function () {
            it("Aparece el Banner Header", function () {
                cy.visit("https://www.sodimac.com.uy/sodimac-uy/category/cat20568/Sanitarios");
                cy.wait(10000);
                cy.getIframeBody('Braindw15').find('.owl-item:not(.cloned)')
            })
            
            })  
        describe('Banner Header PLP Lavavajillas', function () {
            it("Aparece la gondola categoria directa", function () {
                cy.visit("https://www.sodimac.com.uy/sodimac-uy/category/cat1670077/Lavavajillas");
                cy.wait(10000);
                cy.getIframeBody('Braindw15').find('.owl-item:not(.cloned)')
            })
              
            })
            describe('Gondola Cross Directa Sierra Caladora', function () {
                it("Aparece la gondola categoria los que vieron tambien compraron", function () {
                    cy.visit("https://www.sodimac.com.uy/sodimac-uy/product/2388359/Sierra-caladora-600-w-SK6701/2388359");
                    cy.wait(10000);
                    cy.getIframeBody('Braindw13').find('.owl-item:not(.cloned)')
                  }) 
                }) 
            })
        })
*/
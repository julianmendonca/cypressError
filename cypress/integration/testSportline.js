context('Sportline', () => {
    describe('Gondolas Home', () => {
        describe('Gondolas Home generales', () => {
            it('Aparece Gondola Los mas vistos', () => {
                cy.visit('https://www.sportline.com.ar/');
                cy.wait(10000);
                cy.get('#main_braindw_slider .owl-item');
            })
            it('Aparece Gondola Puma', () => {
                cy.visit('https://www.sportline.com.ar/');
                cy.wait(10000);
                cy.get('#main_braindw_slider .owl-item');
            })
            it('Aparece Gondola No te lo pierdas', () => {
                cy.visit('https://www.sportline.com.ar/');
                cy.wait(10000);
                cy.get("#main_braindw_slider .gondola_ID2_home")
            })
            it('Aparece Gondola Under armour', () => {
                cy.visit('https://www.sportline.com.ar/');
                cy.wait(10000);
                cy.get("#main_braindw_slider .gondola_ID3_home")
            })
            it('Aparece Gondola Aprovecha', () => {
                cy.visit('https://www.sportline.com.ar/');
                cy.wait(10000);
                cy.get("#main_braindw_slider .gondola_ID4_home")
            })
        describe('Banner PLP Zapatillas Hombre', () => {
            it('Aparece Banner PDP Zapatillas', () => {
                cy.visit('https://www.sportline.com.ar/hombre/calzados/ZAPATILLAS?order=OrderByTopSaleDESC&pageNumber=1');
                cy.wait(10000);
                cy.get('.main_braindw_bigbannercategoria');
                })    
            })
        describe('Gondolas en PDP cross Nike court royale', () => {
            it('Aparece Gondola categoria intermedia Completa tu compra', () => {
                cy.visit('https://www.sportline.com.ar/nike-court-royale-tab-077025cj9263400/p');
                cy.wait(10000);
                cy.get('.braindw-gondola-categoria-intermedia-producto');
                       
                })
            })
            it('Aparece Gondola Te puede interesar', () => {
                cy.visit('https://www.sportline.com.ar/nike-court-royale-tab-077025cj9263400/p');
                cy.wait(10000);
                cy.get('.braindw-gondola-categoria-directa-producto');
                       
            })    
        })
        
    })
})
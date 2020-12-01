
beforeEach(() => {
    cy.restoreLocalStorageCache();
});

afterEach(() => {
    cy.saveLocalStorageCache();
});

context('MusimundoAr', () => {
    describe("Home Caja registro", () => {
        it("/ Aparece la Caja de Registro", () => {
            cy.visit("https://www.musimundo.com/");
            cy.wait(15000)
            cy.get("#braindw_register")
        })
    })
    describe('Home Gondolas', () => {
        describe('Los mas vistos del sitio', () => {
            it('Aparece Gondola Los mas vistos', () => {
                cy.visit('https://www.musimundo.com/');
                cy.wait(15000);
                cy.get('#braindw_container .owl-item');
            })
        })
        describe('Los mas vendidos del sitio', () => {
            it('Aparece Gondola Los mas vendidos', () => {
                cy.visit('https://www.musimundo.com/');
                cy.wait(15000);
                cy.get('#braindw_container .gondola_masvendidos');
            })
        })
    })     
        describe('Los ultimos productos navegados', () => {
            it('Ir a Producto 1 heladera-cycle-defrost-patrick-hpk135b01-blanco 00015002, aparece Cross Intermedia', () => {
                cy.visit('https://www.musimundo.com/marcas/patrick/heladera-cycle-defrost-patrick-hpk135b01-blanco/p/00015002');
                cy.wait(15000);
                cy.get('#braindw_container .braindw_owl-carousel');
            })
            it('Ir a Producto 2 calefactor-caloventor-conqueror-cnq-ca14 00005858, aparece Cross Intermedia', () => {
                cy.visit(' https://www.musimundo.com/climatizacion/calefactores/calefactor-caloventor-conqueror-cnq-ca14/p/00005858');
                cy.wait(15000);
                cy.get('#braindw_container .braindw_owl-carousel');
            })
            it('Ir a Producto 3 Lavarropas-semi-automatico-drean-family 0000594 , aparece Cross Intermedia', () => {
                cy.visit('https://www.musimundo.com/telefonia/telefonos-celulares/celulares-liberados/telefono-liberado-alcatel-alcatel-1-negro/p/00216018');
                cy.wait(15000);
                cy.get('#braindw_container .braindw_owl-carousel');
            })
            it('Ir a Producto 4 Smart-tv-philips-43-pulgadas-4k-uh 00181173, aparece Cross Intermedia', () => {
                cy.visit('https://www.musimundo.com/climatizacion/aire-acondicionado/aire-acondicionado-ventana-surrey-ucve09r8f1-frio-solo-2300/p/00158019');
                cy.wait(15000);
                cy.get('#braindw_container .braindw_owl-carousel');
            })
            it('Ir a Producto 5 Heladera-cycle-defrost-standard-electric 00151155, aparece Cross Intermedia', () => {
                cy.visit('https://www.musimundo.com/electrohogar/lavarropas/lavarropas-standard-electric-ste-5515-5-5-blanco/p/00239019');
                cy.wait(15000);
                cy.get('#braindw_container .braindw_owl-carousel');
            })
            it('Aparece Gondola Ultimos productos navegados', () => {
                cy.visit('https://www.musimundo.com/');
                cy.wait(15000);
                cy.getIframeBody('braindw-mi-mundo-home-productos-vistos').find('.owl-item')
            })
        })
        describe('Categoria intermedias', () => {
            describe('Banner Header Categoria Televisores 57', () => {
                it('Aparece Banner Header en Categoria Intermedia Televisores', () => {
                    cy.visit('https://www.musimundo.com/climatizacion/aire-acondicionado/c/21');
                    cy.wait(15000);
                    cy.get('#carousel-braindw_1 .carousel-inner');
                })
                it("Aparecen almenos 6 productos de la api", () => {
                    cy.visit('https://www.musimundo.com/climatizacion/aire-acondicionado/c/21');
                    cy.wait(5000);
                    cy.checkApi(
                        "https://u.braindw.com/Get/MusimundoApi?ext=json&idcategory=57&sale=0&company=amba&limit=8&minprice=9500&maxprice=25000&order=1&minstock=0&exclusive=0&_=1591742520267",
                        "#carousel-braindw_1 a[bw-code=",
                        6
                      );
                })
            })
            describe('Gondola mas vistos Categoria Televisores 57', () => {
                it('Aparece Gondola mas vistos en Categoria Intermedia Televisores', () => {
                    cy.visit('https://www.musimundo.com/climatizacion/aire-acondicionado/c/21');
                    cy.wait(15000);
                    cy.get('#braindw_container .section-bdw');
                })
            })
        })
        describe("Gondola cross checkout", () => {
            it("Agrego un producto al carro", () => {
              cy.visit("https://www.musimundo.com/telefonia/telefonos-celulares/celulares-liberados/telefono-liberado-alcatel-alcatel-1-negro/p/00216018");
              cy.wait(10000)
              cy.get("#addToCartButton").click({ force: true });
              cy.wait(5000)
              cy.get(".addToCartButton").first().click({ force: true });
            })
            it("Aparece la Gondola de Checkout", () => {
                cy.visit("https://www.musimundo.com/cart");
                cy.wait(10000)
                cy.get('#braindw_container .gondola_masvistos_checkout');
              })
        })
        describe('Mi Musimundo', () => {
            it('Aparece el boton Mi-Musimundo', () => {
                
                cy.visit('https://www.musimundo.com/');
                cy.wait(10000);
                cy.get('#mi-musimundo-nav .mi-musimundo-icon').click();
            })
            it('Aparece Mi Musimundo', () => {
                cy.visit('https://www.musimundo.com/mi-mundo');
                cy.wait(10000);
                cy.getIframeBody('braindw-mi-musimundo').find('.owl-item')
            })
            it('Aparece carrusel en el Header', () => {
                cy.visit('https://www.musimundo.com/mi-mundo');
                cy.wait(10000);
                cy.getIframeBody('braindw-mi-musimundo').find('.carousel-small-img')
            })
            it('Aparece Ultimas categorias navegadas', () => {
                cy.visit('https://www.musimundo.com/mi-mundo');
                cy.wait(10000);
                cy.getIframeBody('braindw-mi-musimundo').find('#ultimas-4-categorias')
            })
            it('Aparece Ultimos productos navegados', () => {
                cy.visit('https://www.musimundo.com/mi-mundo');
                cy.wait(10000);
                cy.getIframeBody('braindw-mi-musimundo').find('#productos-vistos')
            })

        })            
})
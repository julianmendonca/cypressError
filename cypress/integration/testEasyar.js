beforeEach(() => {
    cy.restoreLocalStorageCache();
});

afterEach(() => {
    cy.saveLocalStorageCache();
});

context('EasyAr', () => {

    describe("Home", () => {
        it("Aparece la Caja de Registro", () => {
            cy.visit("https://www.easy.com.ar/webapp/wcs/stores/servlet/es/easyar");
            cy.wait(15000)
            cy.get(".ventana_flotante")
        })
    })
    
    describe("Gondola en la pagina de categoria", () => {
        it("Aparece la gondola en Griferia", () => {
            cy.visit("https://www.easy.com.ar/tienda/es/easyar/search/griferia-cocina");
            cy.wait(15000);
            cy.getIframeBody("Braindw14").find(".owl-item")
        })
    })

    describe("Gondola en la pagina de Termotanques", () => {
        it("Aparece la gondola en áridos", () => {
            cy.visit("https://www.easy.com.ar/tienda/es/easyar/search/termotanques");
            cy.wait(15000);
            cy.getIframeBody("Braindw14").find(".owl-item")
        })
    })

    describe('Gondolas Productos', () => {

        it('Producto 1 Quienes vieron este producto compraron algoritmo', () => {
            cy.visit('https://www.easy.com.ar/tienda/es/easyar/curva-plana-s-sep-p--unicanal-tapa-1013010');
            cy.wait(10000);
            cy.get('body').then(($body) => {
                if ($body.find('#Braindw18').length) {
                    cy.getIframeBody("Braindw18").find(".owl-item");
                } else {
                    cy.getIframeBody("Braindw17").find(".owl-item");
                }
              })
        })
        it('Producto 1 Aparece Gondola Tambien te podria interesar-Directa', () => {
            cy.visit('https://www.easy.com.ar/tienda/es/easyar/curva-plana-s-sep-p--unicanal-tapa-1013010');
            cy.wait(10000);
            cy.getIframeBody("Braindw16").find(".owl-item");
        })
        it('Producto 2 Aparece Gondola Productos Relacionados-Intermedia', () => {
            cy.visit("https://www.easy.com.ar/tienda/es/easyar/search/griferia-cocina");
            cy.wait(5000);
            cy.get(".itemhover").eq(2).click();
            cy.wait(15000);
            cy.get('body').then(($body) => {
                if ($body.find('#Braindw18').length) {
                    cy.getIframeBody("Braindw18").find(".owl-item");
                } else {
                    cy.getIframeBody("Braindw17").find(".owl-item");
                }
              })
        })
        it('Producto 3 Aparece Gondola Productos Relacionados-Intermedia', () => {
            cy.visit("https://www.easy.com.ar/tienda/es/easyar/search/griferia-cocina");
            cy.wait(5000);
            cy.get(".itemhover").eq(3).click();
            cy.wait(15000);
            
            cy.get('body').then(($body) => {
                if ($body.find('#Braindw18').length) {
                    cy.getIframeBody("Braindw18").find(".owl-item");
                } else {
                    cy.getIframeBody("Braindw17").find(".owl-item");
                }
              })
        })
        it('Producto 4 Aparece Gondola Productos Relacionados-Intermedia', () => {
            cy.visit("https://www.easy.com.ar/tienda/es/easyar/search/griferia-cocina");
            cy.wait(5000);
            cy.get(".itemhover").eq(4).click();
            cy.wait(15000);
            
            cy.get('body').then(($body) => {
                if ($body.find('#Braindw18').length) {
                    cy.getIframeBody("Braindw18").find(".owl-item");
                } else {
                    cy.getIframeBody("Braindw17").find(".owl-item");
                }
              })
        })
        it('Producto 5 Aparece Gondola Productos Relacionados-Intermedia', () => {
            cy.visit("https://www.easy.com.ar/tienda/es/easyar/search/griferia-cocina");
            cy.wait(5000);
            cy.get(".itemhover").eq(5).click();
            cy.wait(15000);
            
            cy.get('body').then(($body) => {
                if ($body.find('#Braindw18').length) {
                    cy.getIframeBody("Braindw18").find(".owl-item");
                } else {
                    cy.getIframeBody("Braindw17").find(".owl-item");
                }
              })
        })
        it('Producto 6 Aparece Gondola Productos Relacionados-Intermedia', () => {
            cy.visit("https://www.easy.com.ar/tienda/es/easyar/search/griferia-cocina");
            cy.wait(5000);
            cy.get(".itemhover").eq(6).click();
            cy.wait(15000);
            
            cy.get('body').then(($body) => {
                if ($body.find('#Braindw18').length) {
                    cy.getIframeBody("Braindw18").find(".owl-item");
                } else {
                    cy.getIframeBody("Braindw17").find(".owl-item");
                }
              })
        })
        it('Producto 7 Aparece Gondola Productos Relacionados-Intermedia', () => {
            cy.visit("https://www.easy.com.ar/tienda/es/easyar/search/cablecanal-y-accesorios");
            cy.wait(5000);
            cy.get(".itemhover").eq(0).click();
            cy.wait(15000);
            
            cy.get('body').then(($body) => {
                if ($body.find('#Braindw18').length) {
                    cy.getIframeBody("Braindw18").find(".owl-item");
                } else {
                    cy.getIframeBody("Braindw17").find(".owl-item");
                }
              })
        })
    }) 
    describe("Home buscador", () => {
        it("Busco Taladro", ()=>{
            cy.visit('https://www.easy.com.ar/tienda/es/SearchDisplay?storeId=10151&catalogId=10051&langId=-5&pageSize=12&beginIndex=0&searchSource=Q&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&pageView=image&searchTerm=taladro')
            cy.wait(10000);
        })
        
    })
    
    describe("Gondola cross checkout", () => {
        it("Agrego un producto al carro - 1181366", () => {
            cy.visit("https://www.easy.com.ar/tienda/es/easyar/-monocomando-cocina-pared-ext-bilbao-1181366");
            cy.wait(10000)
            cy.get(".addtocart").click({ force: true });
            cy.wait(5000)
        })
        it("Agrego un producto al carro", () => {
          cy.visit("https://www.easy.com.ar/tienda/es/easyar/v-po-e118-camion-granza-mezcla-1m3-1004232");
          cy.wait(10000)
          cy.get(".addtocart").click({ force: true });
          cy.wait(5000)
        })
        
    })    
    describe('Gondolas Home', () => {
        
        it('Aparece Gondola Ultimas categorias Navegadas', () => {
            cy.visit('https://www.easy.com.ar/webapp/wcs/stores/servlet/es/easyar');
            cy.wait(20000);
            cy.getIframeBody("braindw-mi-easy-home-categorias-navegadas").find(".owl-item:not(.cloned)");
        })
        it('Aparece Gondola Ultimos productos agregados', () => {
            cy.visit('https://www.easy.com.ar/webapp/wcs/stores/servlet/es/easyar');
            cy.wait(20000);
            cy.getIframeBody("braindw-mi-easy-home-productos-vistos").find(".owl-item:not(.cloned)");
        })
        it('Aparece Gondola Ultimos Productos Navegados', () => {
            cy.visit('https://www.easy.com.ar/webapp/wcs/stores/servlet/es/easyar');
            cy.wait(20000);
            cy.getIframeBody("braindw-mi-easy-home-productos-vistos").find(".owl-item:not(.cloned)");
        })
        it('Carga gondola En base a tu ultima busqueda', () => {
            cy.visit('https://www.easy.com.ar/tienda/es/easyar');
            cy.wait(20000);
            cy.getIframeBody('braindw-mi-easy-home-busqueda').find(".bdw-item")
        }) 
        
        it('Carga banner carousel principal', () => {
            cy.visit('https://www.easy.com.ar/tienda/es/easyar');
            cy.wait(20000);
            cy.getIframeBody('braindw-mi-easy-home-banner-last').find(".gondola-banner-image-holder-a")
        })
        it('Aparece gondolas Los mas vistos 10seg', () => {
            cy.visit('https://www.easy.com.ar/webapp/wcs/stores/servlet/es/easyar/');
            cy.wait(10000);
            cy.getIframeBody('Braindw5').find(".owl-item")
        })
        it('Aparece gondolas Los mas vistos 15seg', () => {
            cy.visit('https://www.easy.com.ar/webapp/wcs/stores/servlet/es/easyar/');
            cy.wait(15000);
            cy.getIframeBody('Braindw5').find(".owl-item")
        })
        it('Aparece gondolas Los mas vistos 20seg', () => {
            cy.visit('https://www.easy.com.ar/webapp/wcs/stores/servlet/es/easyar/');
            cy.wait(20000);
            cy.getIframeBody('Braindw5').find(".owl-item")
        })
    }) 
    
    describe('Mi Easy', () => {
        it('Funciona boton Mi-Easy', () => {
            
            cy.visit('https://www.easy.com.ar/tienda/es/easyar/search/griferia-cocina');
            cy.wait(10000);
            cy.get('#topmenu-inner').contains('Mi Easy').click();
        })
        it('Carga gondola de banner', () => {
            cy.visit('https://www.easy.com.ar/tienda/es/easyar/mi-easy');
            cy.wait(10000);
            cy.getIframeBody('braindw-mi-easy').find('.single-carousel-holder .gondola-banner-data')
        })

        describe('Gondola categorias navegadas', () => {
            it('Aparece gondola categorias', () => {
                cy.visit('https://www.easy.com.ar/tienda/es/easyar/mi-easy');
                cy.wait(10000);
                cy.getIframeBody('braindw-mi-easy').find('.topC-holder .topC-image')
            })
            it("Hago click en una categoria y viene la gondola", () => {
                cy.visit('https://www.easy.com.ar/tienda/es/easyar/mi-easy');
                cy.wait(10000);
                cy.getIframeBody('braindw-mi-easy').find('.topC-holder .topC-image:not(.topC-image-clicked)').first().click();
                cy.getIframeBody('braindw-mi-easy').find('.topC-carousel .bdw-item');
            })
        })

        describe('Gondola categorias vistas', () => {
            it('Aparece gondola categorias', () => {
                cy.visit('https://www.easy.com.ar/tienda/es/easyar/mi-easy');
                cy.wait(10000);
                cy.getIframeBody('braindw-mi-easy').find('.categorias-carousel .small-item')
            })
            it("Hago click en una categoria y viene la gondola", () => {
                cy.visit('https://www.easy.com.ar/tienda/es/easyar/mi-easy');
                cy.wait(10000);
                cy.getIframeBody('braindw-mi-easy').find('.categorias-carousel .small-item:not(.small-item-clicked)').first().click();
                cy.getIframeBody('braindw-mi-easy').find('.categorias-ofertas-carousel .bdw-item-holder');
            })
        })
    })
})
context('InkafarmaPe', () => {

    describe("Banner Header Categoria", () => {
        it("Aparece Banner Header Categoria ppal Belleza", () => {
            cy.visit("https://inkafarma.pe/categoria/belleza");
            cy.wait(15000)
            cy.getIframeBody("Braindw17").find("#braindw_container .owl-item");
        })
        it("Aparece Banner Header Categoria ppal Cuidado Personal", () => {
            cy.visit("https://inkafarma.pe/categoria/cuidado-personal");
            cy.wait(15000)
            cy.getIframeBody("Braindw17").find("#braindw_container .owl-item");
        })
    })    
    describe("Fichas de producto Gondolas Cross Selling Ensure Advance", () => {
        it("Aparece Gondola Cat. Directa Tambien te podria interesar", () => {
            cy.visit("https://inkafarma.pe/producto/Ensure-Advance-Sabor-Vainilla/010808");
            cy.wait(15000)
            cy.getIframeBody("Braindw13").find("#braindw_container .owl-item");
        })
        it("Aparece Gondola Cat. Intermedia Otros tambien vieron", () => {
            cy.visit("https://inkafarma.pe/producto/Ensure-Advance-Sabor-Vainilla/010808");
            cy.wait(15000)
            cy.getIframeBody("Braindw14").find("#braindw_container .owl-item");
        })
        it("Aparece Gondola Cat. SKU Algoritmo Completa tu compra", () => {
            cy.visit("https://inkafarma.pe/producto/Ensure-Advance-Sabor-Vainilla/010808");
            cy.wait(15000)
            cy.getIframeBody("Braindw27").find("#braindw_container .owl-item");
        })    
    })
    describe("Fichas de producto Gondolas Cross Selling Pañal Babysec Super Premium Talla M", () => {
        it("Aparece Gondola Cat. Directa Tambien te podria interesar", () => {
            cy.visit("https://inkafarma.pe/producto/Pa%C3%B1al-Babysec-Super-Premium-Talla-M/012525");
            cy.wait(15000)
            cy.getIframeBody("Braindw13").find("#braindw_container .owl-item");
        })        
        it("Aparece Gondola Cat. Intermedia Otros tambien vieron", () => {
            cy.visit("https://inkafarma.pe/producto/Pa%C3%B1al-Babysec-Super-Premium-Talla-M/012525");
            cy.wait(15000)
            cy.getIframeBody("Braindw14").find("#braindw_container .owl-item");
        })
        it("Aparece Gondola Cat. SKU Algoritmo Completa tu compra", () => {
            cy.visit("https://inkafarma.pe/producto/Pa%C3%B1al-Babysec-Super-Premium-Talla-M/012525");
            cy.wait(15000)
            cy.getIframeBody("Braindw14").find("#braindw_container .owl-item");
        })
    })    
    describe("Gondola de Ultimos productos navegados - 6 productos", () => {
        it("Prod. 1 Aparece Gondola Cat. Directa Tambien te podria interesar Crema-Dental-Colgate-Triple", () => {
            cy.visit("https://inkafarma.pe/producto/Crema-Adhesiva-Para-Protesis-Dentales-Corega-Ultra/425350");
            cy.wait(10000)
            cy.getIframeBody("Braindw13").find(".owl-item");
        })
        it("Prod. 2 Aparece Gondola Cat. Directa Tambien te podria interesar Jabon en barra Nivea", () => {
            cy.visit("https://inkafarma.pe/producto/jabon-en-barra-nivea-proteina-de-leche-3un/424012");
            cy.wait(10000)
            cy.getIframeBody("Braindw13").find(".owl-item");
        })
        it("Prod. 3 Aparece Gondola Cat. Directa Tambien te podria interesar Crema-Hidratante-Cetaphil", () => {
            cy.visit("https://inkafarma.pe/producto/Crema-Hidratante-Cetaphil-para-Piel-Sensible/425313");
            cy.wait(10000)
            cy.getIframeBody("Braindw13").find(".owl-item");
        })
        it("Prod. 4 Aparece Gondola Cat. Directa Tambien te podria interesar Nido Protectus Etapas", () => {
            cy.visit("https://inkafarma.pe/producto/Nido-Protectus-Etapas-1%2B/012003");
            cy.wait(10000)
            cy.getIframeBody("Braindw13").find(".owl-item");
        })
        it("Prod. 5 Aparece Gondola Cat. Directa Tambien te podria interesar Crema para peinar Pantene", () => {
            cy.visit("https://inkafarma.pe/producto/Crema-Para-Peinar-Restauraci%C3%B3n-Pantene-Pro-V/007852");
            cy.wait(10000)
            cy.getIframeBody("Braindw13").find(".owl-item");
        })
        it("Prod. 6 Aparece Gondola Cat. Directa Tambien te podria interesar Quita Esmalte Limon Portugal", () => {
            cy.visit("https://inkafarma.pe/producto/Quita-Esmalte-Lim%C3%B3n-Portugal/912367");
            cy.wait(10000)
            cy.getIframeBody("Braindw13").find(".owl-item");
        })
        it("Aparece Gondola Ultimos productos navegados", () => {
            cy.visit("https://inkafarma.pe/");
            cy.wait(20000)
            cy.getIframeBody("Braindw6").find(".owl-item");
        })
    describe("Banner Header de Los mas comprados en Listados", () => {
            it("Aparece Los mas agregados al carro en Nutricion a precios bajos", () => {
                cy.visit("https://inkafarma.pe/lista/lo-mejor-en-nutricion-a-precios-bajos");
                cy.wait(10000)
                cy.getIframeBody("Braindw37").find(".owl-item");
            })
        })         
    })
    describe("Buscador Brain 'sahmpu'", () => {
        it("Trae resultados la busqueda", () => {
          cy.server();
          cy.route("**/buscador?keyword=**").as("busqueda");
          cy.visit("https://inkafarma.pe/");
          cy.wait(10000)
          cy.get(".main-header-search-input").type("sahmpu",{ force: true });
        })
      }); 
      describe("Buscador Brain API Search 'sahmpu'", () => {
        it("Aparece Resultados de busqueda", () => {
          cy.visit("https://inkafarma.pe/buscador?keyword=sahmpu");
          cy.wait(12000)
          cy.getIframeBody("Braindw39").find(".owl-item:not(.cloned)");
        })
      describe("Buscador Brain Busqueda vacia 'ascasovcneojvbs'", () => {
        it("Aparece Los Mas Vistos", () => {
          cy.visit("https://inkafarma.pe/buscador?keyword=ascasovcneojvbs");
          cy.wait(12000)
          cy.getIframeBody("Braindw34").find(".owl-item:not(.cloned)");
        })
        it("Aparece Ultima categoria navegada Cuidado de la piel", () => {
          cy.visit("https://inkafarma.pe/categoria/cuidado-personal/cuidado-de-la-piel");
          cy.wait(12000)
          cy.visit("https://inkafarma.pe/buscador?keyword=ascasovcneojvbs");
          cy.wait(10000)
          cy.getIframeBody("Braindw35").find(".owl-item:not(.cloned)");
        })
        })  
    })              
    

    describe("Gondolas Home", () => {
        it("Aparece Gondola 2", () => {
            cy.visit("https://inkafarma.pe/");
            cy.wait(15000)
            cy.getIframeBody("Braindw2").find("#braindw_container .owl-item");
        })
        it("Aparece Gondola 6", () => {
            cy.visit("https://inkafarma.pe/");
            cy.wait(15000)
            cy.getIframeBody("Braindw6").find("#braindw_container .owl-item");
        })
        it("Aparece Gondola 5", () => {
            cy.visit("https://inkafarma.pe/");
            cy.wait(15000)
            cy.getIframeBody("Braindw5").find("#braindw_container .owl-item");
        })
        it("Aparece Gondola 19", () => {
            cy.visit("https://inkafarma.pe/");
            cy.wait(15000)
            cy.getIframeBody("Braindw19").find("#braindw_container .owl-item");
        })
        it("Aparece Gondola 3", () => {
            cy.visit("https://inkafarma.pe/");
            cy.wait(15000)
            cy.getIframeBody("Braindw3").find("#braindw_container .owl-item");
        })
    })    
})
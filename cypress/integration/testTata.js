context('Tata', () => {

    describe("Home buscador 10seg", () => {
        it("Busco Cocholate y verifico Chocolate", ()=>{
            cy.visit('https://www.tata.com.uy/');
            cy.wait(10000);
            cy.get('.native-input').eq(0).type("cocholate",{force:true});
            cy.wait(10000);
            cy.get(".styles__SearchResults-sc-1qa8c8h-2").contains("Chocolate")
        })
        it("Veo en resultado de grilla Chocolate", ()=>{
            cy.visit('https://www.tata.com.uy/buscar?text=chocolate');
            cy.wait(10000);
            cy.get('.styles__Container-tyimju-1').contains("Chocolate")
        })
    }) 
    describe("Home buscador 10seg", () => {
        it("Busco calletitas y verifico Galletas", ()=>{
            cy.visit('https://www.tata.com.uy/');
            cy.wait(10000);
            cy.get('.native-input').eq(0).type("calletitas",{force:true});
            cy.wait(10000);
            cy.get(".styles__SearchResults-sc-1qa8c8h-2").contains("Galletas")
        })
        it("Veo en resultado de grilla Galletas", ()=>{
            cy.visit('https://www.tata.com.uy/buscar?text=calletitas');
            cy.wait(10000);
            cy.get('.styles__Container-tyimju-1').contains("Galletas")
        })
    })
    describe("Gondola Producto", () => {
        it("Gondola 'Tambien te puede interesar'", () => {
            cy.visit("https://www.tata.com.uy/refresco-coca-cola-no-retornable-3-litros/p");
            cy.wait(10000)
            cy.getIframeBody("Braindw9")
            .find(".owl-item:not(.cloned)")
            ;
        })
        it("Gondola 'Productos relacionados'", () => {
            cy.visit("https://www.tata.com.uy/refresco-coca-cola-no-retornable-3-litros/p");
            cy.wait(10000)
            cy.getIframeBody("Braindw10")
            .find(".owl-item:not(.cloned)")
            ;
        })
        it("Gondola 'Completa tu compra'", () => {
            cy.visit("https://www.tata.com.uy/refresco-coca-cola-no-retornable-3-litros/p");
            cy.wait(10000)
            cy.getIframeBody("Braindw13")
            .find(".owl-item:not(.cloned)")
            ;
        })
    })
    describe("Headers", () => {
        it("Categoria general", () => {
            cy.visit("https://www.tata.com.uy/almacen");
            cy.wait(10000)
            cy.getIframeBody("Braindw19")
            .find(".owl-item:not(.cloned)")
            ;
        })
        it("Categoria catalogo", () => {
            cy.visit("https://www.tata.com.uy/almacen/snacks");
            cy.wait(10000)
            cy.getIframeBody("Braindw7")
            .find(".owl-item:not(.cloned)")
            ;
        })
    })

    describe("Gondolas busqueda vacia", () => {
        it("Gondola 'Quiza te pueda interesar'", () => {
            cy.visit("https://www.tata.com.uy/buscar?text=dfsdfsdf");
            cy.wait(10000)
            cy.getIframeBody("Braindw18")
            .find(".owl-item:not(.cloned)")
            ;
        })
        it("Gondola 'Los mas vistos'", () => {
            cy.visit("https://www.tata.com.uy/buscar?text=dfsdfsdf");
            cy.wait(10000)
            cy.getIframeBody("Braindw17")
            .find(".owl-item:not(.cloned)")
            ;
        })
    })
})
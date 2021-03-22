beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});

context(
  "Dia",
  {
    baseUrl: "https://diaonline.supermercadosdia.com.ar/",
    defaultCommandTimeout: 10000,
  },
  () => {
    describe("Productos", () => {
      describe("Producto 1", () => {
        it("Te puede interesar (categoria directa)", () => {
          cy.setCookie("braindw_abtest", "bdw-yes");
          cy.visit("/azucar-plus-dia-comun-tipo-a-1-kg-130321/p");
          cy.checkGondolaIframe("Braindw16");
        });
        it("Productos relacionados (categoria intermedia)", () => {
          cy.setCookie("braindw_abtest", "bdw-yes");
          cy.visit("/azucar-plus-dia-comun-tipo-a-1-kg-130321/p");
          cy.checkGondolaIframe("Braindw17");
        });
        it("Completá tu compra  (cruce de categorias)", () => {
          cy.setCookie("braindw_abtest", "bdw-yes");
          cy.visit("/azucar-plus-dia-comun-tipo-a-1-kg-130321/p");
          cy.checkGondolaIframe("Braindw19");
        });
        it("Productos que pueden ser de tu interes (algoritmo)", () => {
          cy.setCookie("braindw_abtest", "bdw-yes");
          cy.visit("/azucar-plus-dia-comun-tipo-a-1-kg-130321/p");
          cy.checkGondolaIframe("Braindw18");
        });
      });
      describe("Producto 2", () => {
        it("Te puede interesar (categoria directa)", () => {
          cy.setCookie("braindw_abtest", "bdw-yes");
          cy.visit("/turron-arcor-con-mani-25-gr-17929/p");
          cy.checkGondolaIframe("Braindw16");
        });
        it("Productos relacionados (categoria intermedia)", () => {
          cy.setCookie("braindw_abtest", "bdw-yes");
          cy.visit("/turron-arcor-con-mani-25-gr-17929/p");
          cy.checkGondolaIframe("Braindw17");
        });
        it("Completá tu compra  (cruce de categorias)", () => {
          cy.setCookie("braindw_abtest", "bdw-yes");
          cy.visit("/turron-arcor-con-mani-25-gr-17929/p");
          cy.checkGondolaIframe("Braindw19");
        });
        it("Productos que pueden ser de tu interes (algoritmo)", () => {
          cy.setCookie("braindw_abtest", "bdw-yes");
          cy.visit("/turron-arcor-con-mani-25-gr-17929/p");
          cy.checkGondolaIframe("Braindw18");
        });
      });
    });
    describe("Headers Categoria", () => {
      it("Header en categoria (productos destacados)", () => {
        cy.setCookie("braindw_abtest", "bdw-yes");
        cy.visit("/almacen");
        cy.checkGondolaIframe("Braindw32");
      });
      it("Header en subcategorias", () => {
        cy.setCookie("braindw_abtest", "bdw-yes");
        cy.visit("/almacen/aceites-y-aderezos/aceites-de-oliva");
        cy.checkGondolaIframe("Braindw14");
      });
      it("Header en coleccion", () => {
        cy.setCookie("braindw_abtest", "bdw-yes");
        cy.visit("/Productos-DIA?collid=564");
        cy.checkGondolaIframe("Braindw25");
      });
    });
    describe("Gondolas Home", () => {
      it("últimos navegados (navega 1 producto)", () => {
        cy.setCookie("braindw_abtest", "bdw-yes");
        cy.visit("/");
        cy.checkGondolaIframe("Braindw41");
      });
      it("Ofertas en Almacén (mejores ofertas de una categoria)", () => {
        cy.setCookie("braindw_abtest", "bdw-yes");
        cy.visit("/");
        cy.checkGondolaIframe("Braindw4");
      });
      it("Descuento en Bebida: (mas vistos de una categoria)", () => {
        cy.setCookie("braindw_abtest", "bdw-yes");
        cy.visit("/");
        cy.checkGondolaIframe("Braindw10");
      });
      it("Los Mas agregados al carrito (Más agregados del sitio)", () => {
        cy.setCookie("braindw_abtest", "bdw-yes");
        cy.visit("/");
        cy.checkGondolaIframe("Braindw7");
      });
    });
    describe("URL ofertas", () => {
      it("Los mas agregados al carrito", () => {
        cy.setCookie("braindw_abtest", "bdw-yes");
        cy.visit("/especial-ofertas");
        cy.checkGondolaIframe("Braindw35");
      });
      it("Ofertas cuidado del hogar (mejores descuentos categoría)", () => {
        cy.setCookie("braindw_abtest", "bdw-yes");
        cy.visit("/especial-ofertas");
        cy.checkGondolaIframe("Braindw37");
      });
      it("Los más vistos", () => {
        cy.setCookie("braindw_abtest", "bdw-yes");
        cy.visit("/especial-ofertas");
        cy.checkGondolaIframe("Braindw38");
      });
    });
    describe("Buscador", () => {
      it("Desplegable busqueda 'cerveza'", () => {
        cy.setCookie("braindw_abtest", "bdw-yes");
        cy.visit("/");
        cy.intercept("*cerveza*").as("busqueda");
        cy.get("#search").eq(0).type("cerveza", { force: true });
        cy.wait("@busqueda");
        cy.get(".complexSearch__Products__List li");
      });
    });
    describe("Checkout", () => {
      it("Sumá estos productos a tu carrito (mejores descuento categoría)", () => {
        cy.setCookie("braindw_abtest", "bdw-yes");
        cy.visit("/cerveza-roja-andes-en-lata-473-ml-265812/p");
        for (let i = 0; i < 6; i++) {
          cy.get(".btn--up").eq(0).click({ force: true });
        }
        cy.get(".grid-buy-button").eq(0).click({ force: true });

        cy.setCookie("braindw_abtest", "bdw-yes");
        cy.visit("/checkout/#/cart");
        cy.checkGondolaIframe("Braindw31");
      });
    });
  }
);

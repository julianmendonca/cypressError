# AutomatedTest

Proyecto que contiene el desarrollo de pruebas automatizadas sobre braindw.

# SetUp

Para utilizar el proyecto se debe tener instalado Node.js, luego clonar el repositorio y desde la terminal escribir **npm install**

# Correr el proceso

ejecutar **node runCommand** parado sobre la ruta del proyecto, el archivo runCommand hace un schedule para que se ejecuten los tests

**node runCommand** para corre el proceso con el schedule o **npm run test** para correrlo 1 sola vez

# Archivos importantes

runCommand.js: Se encarga de setear el schedule para correr los tests

s3_uploader.js: Se encarga de subir los archivos del reporte generado por mochawesome al s3 de amazon, y luego envia un mail con el link al html.

cypress.json: Acá se definen settings de los test, como mochawesome para los reportes, que no saque screenshots ni videos, y el viewport

# Crear nuevos tests

Los tests deben estar dentro de /cypress/integration, cada archivo es un cliente distinto (Tomar un test existente como ejemplo).

# Metodos custom

Los metodos custom se definen dentro de cypress/support/commands, los existenes son:

Obtener nodos dentro de un iframe: 
```
cy.getIframeBody("iframeID").find("query selector for iframe dom");

Ejemplo: 

cy.getIframeBody("Braindw7").find(".owl-item:not(.cloned)").should("exist");
```

Comparar elementos de una api con el DOM:
```
cy.checkApiIframe(
    "apiURL",
    "iframeID",
    ".owl-item:not(.cloned) a[bw-sku=",
    cantidad_minima_que_debe_matchear,
    "atributo de la respuesta de la api que se compara"
);

Ejemplo: 
cy.checkApiIframe(
    "https://u.braindw.com/Vtex/GetSearch?token=&idcategory=12&company=locatelcolombia&ext=json&sc=1&idproduct=&limit=16&minprice=&maxprice=&order=1&sale=0&minstock=1",
    "Braindw7",
    ".owl-item:not(.cloned) a[bw-sku=",
    6,
    "Sku"
    );
```

# WhiteList de cache y localStorage

El cache y localStorage se elimina entre test y test, para mantenerlo hay que agregar los normbres de las variables en localStorage y cache que quieras conservar, se agregan en el array en el archivo **cypress/support/index.js**

    
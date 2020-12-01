Cypress.Commands.add("useIphone", (device) => {
  Cypress.on("window:before:load", (win) => {
    Object.defineProperty(win.navigator, "userAgent", {
      value:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1",
    });
  });
  cy.viewport(device);
});

Cypress.Commands.add("getIframeDocument", (id) => {
  return cy
    .get("#" + id)
    .its("0.contentDocument")
    .should("exist");
});
Cypress.Commands.add("getIframeBody", (id) => {
  return cy
    .getIframeDocument(id)
    .its("body")
    .should("not.be.undefined")
    .then(cy.wrap);
});

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorageCache", () => {
  if (Object.keys(localStorage)) {
    Object.keys(localStorage).forEach((key) => {
      LOCAL_STORAGE_MEMORY[key] = localStorage[key];
    });
  }
});

Cypress.Commands.add("restoreLocalStorageCache", () => {
  if (Object.keys(LOCAL_STORAGE_MEMORY)) {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
      localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
    });
  }
});

Cypress.Commands.add("clearLocalAndCookies", () => {
  Cypress.Cookies.defaults({
    preserve: [],
  });

  //Clear localStrage
  cy.clearLocalStorage();

  //Clear Cookies
  cy.clearCookies({ domain: null });

  // Set defaults
  Cypress.Cookies.defaults({
    preserve: /cd_user_id.*|kampyleSessionPageCounter.*|guid.*/,
  });
});

Cypress.Commands.add("replaceIFrameFetchWithXhr", (id) => {
  let polyfill;

  // grab fetch polyfill from remote URL, could be also from a local package
  before(() => {
    const polyfillUrl = "https://unpkg.com/unfetch/dist/unfetch.umd.js";

    cy.request(polyfillUrl).then((response) => {
      polyfill = response.body;
    });
  });
  const getIframeWindow = (id) => {
    return cy.get("#" + id);
  };
  getIframeWindow(id).then((iframeWindow) => {
    delete iframeWindow.fetch;
    // since the application code does not ship with a polyfill
    // load a polyfilled "fetch" from the test
    iframeWindow.eval(polyfill);
    iframeWindow.fetch = iframeWindow.unfetch;

    // BUT to be able to spy on XHR or stub XHR requests
    // from the iframe we need to copy OUR window.XMLHttpRequest into the iframe
    cy.window().then((appWindow) => {
      iframeWindow.XMLHttpRequest = appWindow.XMLHttpRequest;
    });
  });
});

Cypress.Commands.add("sendMail", (empresa) => {
  cy.exec("node sender" + empresa + ".js ", { failOnNonZeroExit: false });
});

Cypress.Commands.add("checkApi", (url, query, qt) => {
  cy.request(url).then((response) => {
    let itemsFound = 0;
    cy.wrap(response.body).each((item, index) => {
      cy.get("body").then(($body) => {
        if ($body.find(query + item.IdArticulo + "]").length) {
          itemsFound++;

          if (index == response.body.length - 1) {
            if (qt > response.body.length) {
              expect(itemsFound).to.be.greaterThan(response.body.length - 1);
            } else {
              expect(itemsFound).to.be.greaterThan(qt);
            }
          }
        }
      });
    });
  });
});

Cypress.Commands.add("checkApiIframe", (url, iframeID, query, qt, property) => {
  cy.request(url).then((response) => {
    let itemsFound = 0;
    if (!Array.isArray(response.body)) {
      throw new Error("Response is not an array");
      return;
    }
    cy.wrap(response.body).each((item, index) => {
      cy.getIframeBody(iframeID).then(($body) => {
        if ($body.find(query + item[property] + "]").length) {
          itemsFound++;
          if (index == response.body.length - 1) {
            expect(itemsFound).to.be.greaterThan(
              $body.find(".owl-item:not(.cloned)").length < qt
                ? $body.find(".owl-item").length - 1
                : qt - 1
            );
          }
        } else if (index == response.body.length - 1) {
          expect(itemsFound).to.be.greaterThan(qt);
        }
      });
    });
  });
});

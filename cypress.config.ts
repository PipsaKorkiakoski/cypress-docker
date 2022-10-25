import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    width: 1000,
    height: 1280
  },
  chromeWebSecurity: false,
  reporter: 'mochawesome',
  reporterOptions: {
    charts: true,
    overwrite: false,
    html: false,
    json: true,
    reportDir: "cypress/reports/mocha",
  },
  e2e: {
    // viewportHeight: Cypress.env('CYPRESS_height') || 1000,
    // viewportWidth: Cypress.env('CYPRESS_width') || 1280,
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
  },
});

import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1000,
  viewportHeight: 1280,
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
      console.log(config)
      // implement node event listeners here
    },
  },
});

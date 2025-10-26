import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Assumes Next.js dev server
    setupNodeEvents(on, config) {
      // Implement node event listeners here if needed (e.g., for plugins)
    },
    supportFile: "src/cypress/support/commands.ts", // Custom commands
    specPattern: "src/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Test file pattern
    viewportWidth: 1280,
    viewportHeight: 720,
  },
  component: {
    // Optional: If you want component testing later, but we're focusing on E2E
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});

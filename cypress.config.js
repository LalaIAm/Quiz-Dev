import { defineConfig } from 'cypress';
import vitePreprocessor from 'cypress-vite';
import { installPlugin } from '@chromatic-com/cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      installPlugin(on, config);
      on('file:preprocessor', vitePreprocessor());
    },
  },
});

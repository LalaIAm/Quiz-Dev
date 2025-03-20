import { defineConfig } from 'cypress';
import vitePreprocessor from 'cypress-vite';
import { installPlugin } from '@chromatic-com/cypress';

export default defineConfig({
  projectId: 'cprj7p',
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/results-[hash].xml',
  },
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      // implement node event listeners here
  
      on('file:preprocessor', vitePreprocessor());
      on('task', {
        log(message) {
          console.log(message)
          return null;
        }
      })
    },
  },
});

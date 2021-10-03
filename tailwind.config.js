const { guessProductionMode } = require('@ngneat/tailwind');

module.exports = {
    prefix: '',
    purge: {
      enabled: guessProductionMode(),
      content: [
        // './src/**/*.{html,ts}',
        './projects/defang/src/**/*.{html,ts}',
        './projects/portfolio/src/**/*.{html,ts}',
        './projects/widgets/**/*.{html,ts}'
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
};

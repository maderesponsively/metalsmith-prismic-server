const env = require('process').env;

module.exports = {
  /**
   * The port to run the server on
   */
  port: 3000,

  /**
   * The port to host the liveReload js file and service on. (dev server only)
   */
  liveReloadPort: 3001,

  /**
   * whether or not to open a browser on the local machine on startup. (dev
   * server only)
   */
  open: true,

  /**
   * The root path of the project
   */
  buildPath: './',

  /**
   * Specification of files to watch for changes. (dev server only)
   */
  watchPaths: {
    'src/**/*': '**/*',
    'layouts/**/*': '**/*',
    'partials/**/*': '**/*'
  },

  /**
   * Expiration age of generated previews (in ms, prod server only)
   */
  previewAge: 1000 * 60 * 60,

  /**
   * The root of the project
   */
  inputPath: './',

  /**
   * Plugins for metalsmith
   */
  plugins: [],

  /**
   * Url of prismic repo api
   */
  prismicUrl: env.PRISMIC_URL,

  /**
   * prismic repo access token
   */
  prismicToken: env.PRISMIC_TOKEN,

  /**
   * prismic repo build webhook secret
   */
  prismicSecret: env.PRISMIC_SECRET,

  /**
   * prismic repo branch to build
   */
  release: 'master',

  /**
   * link resolver (see: https://prismic.io/docs/link-resolver#?lang=node)
   * (required)
   */
  linkResolver: null,
};
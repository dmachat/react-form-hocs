## Webpack Configuration

### DLLs

We split out static third party assets for two reasons: improved ability to leverage client-side caching, and to avoid parsing and bundling in the development environment to speed up incremental builds.

### Assets

Basic asset loaders being leveraged:

* **file-loader**: All app-level imports of jpg|png|svg|woff|eot assets can be made relatively. They are hashed and output to the static public path. _Note_: `css-loader` requires a `~` prefix for module imports.
* **svg-sprite-loader**: We treat `/img/icons` a little differently, using a contextual require to import all icons at once and provide a map of `iconName -> id hash` for `use` attributes.
* **extract-text-pluging**: In production mode, exports an `app.css` static file, instead of leaving imported css in the Javascript bundle.

### Global Variables

A few global variables are set by environment and are available in the app via the `DefinePlugin`. They are:

* `process.env.NODE_ENV`: Used by several third party libraries to optimize prod bundles, or switch app behavior.

### Hot reloading

Hot reloading is switched on in development mode by a combination of `webpack-dev-server` settings, babel plugin, and development only scripts prepended to the bundle. Hot reloading artifacts either removed by dead-code elimination or are set to pass-through in production.

### Analyze

Webpack has a useful (bundle analysis tool)[http://webpack.github.io/analyse] for visualizing the output. Run `npm run visualize` to generate the json file to upload.

# docs

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Environment Variables

- `DC_DOCS_ENV: development | staging | production`: Configures deployment specific options. This is used instead of `NODE_ENV` to allow decoupled configuration of these options

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

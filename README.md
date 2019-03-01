## Webpack 4 (4.29.5) Vanilla Javascript Starter Pack

Generator pozwala za pomocą jednej komendy npm wygenerować boilerplate aplikacji z już skonfigurowanym środowiskiem `dev, test, pros`.

Idealny do tworzenia prostych stron oraz aplikacji na początku swojej przygody z webdev.
Narzędzie, pomimo iż z założenia przeznaczone głównie dla początkujących, może być śmiało wykorzystywane przez bardziej doświadczonych developerów, którzy nie mają czasu na ręczną konfigurację webpacka. 
W projekcie można doszukać się analogii do reactowego CRA.

## Boilerplate Generator
### v2.0-alpha.1:
#### Zmiany:
- instalacja poprzez pakiet npm: `npm i webpack-js-starter`
- webpack-js-starter dodaje wpisy w package.json:
```bash
"start": "webpack-dev-server --config webpack.dev.js",
"develop": "NODE_ENV=develop",
"build": "webpack --config webpack.prod.js"
"test": "jest",
"debug": "NODE_ENV=debug npm test",
```

- webpack-js-starter konfiguruje dla użtkownika:
```bash
webpack
babel
prettier
eslint
postcss
```

- webpack-js-starter tworzy również przykładową strukturę katalogów wraz z plikami:
```bash
|  src
|    | index.html
|    | scripts
|    |    | index.js
|    |    
|    | styles
|    |    | main.scss
|    |    | base
|    |    |     | _base.scss
|    |    |     | _typography.scss
|   
| tests
|    | example.test.js
```


### Jak korzystać:

- `npm install -D webpack-js-starter`
- `npm start` - developing on `http://localhost:8080`
- `npm test` - runs tests
- `npm run build` - bundling to prod

### Includes:

- Hot reloading
- Dev / Prod separation builds
- Some build optimalizations (work still in progress)
- Sass
- Source maps on
- Turned off side effects,
- Babel-loader
- Eslint config
- Images / fonts bundling

### Testing

- Puppeteer https://github.com/GoogleChrome/puppeteer
- Jest-Pupeteer https://github.com/smooth-code/jest-puppeteer
- Pixelmatch https://github.com/mapbox/pixelmatch

### Todo
- [ ] Add Travis CI
- [ ] Transform template files using template engine
- [ ] Add ability to do a post processing (optional)
- [ ] (Optional) Add ability to specify options from the command line 
- [ ] stworzenie przyjaznej dokumentacji
- [ ] dodanie przykładowych projektów w folderze `examples'
- [ ] dodać osobne readme do templatek

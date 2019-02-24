## Webpack 4 (4.29.5) Vanilla Javascript Starter Pack

Generator pozwala za pomocą jednej komendy npm wygenerować boilerplate aplikacji z już skonfigurowanym środowiskiem:
- developerskim
- testowym
- produkcyjnym
Idealny do tworzenia prostych stron oraz aplikacji na początku swojej przygody z webdeveloperką.
Narzędzie pomimo iż przeznaczone głównie dla początkujących, może być śmiało wykorzystywane przez bardziej doświadczonych developerów, którym zależy na oszczędności czasu który musieliby poświęcić na ręczną konfigurację webpacka. Można doszukać się analogii do reactowego CRA.

## Boilerplate Generator
### v2.0-alpha.1:
#### Zmiany:
- instalacja poprzez pakiet npm: `npm i webpack-js-starter`
- webpack-js-starter dodaje wpisy w package.json:
```bash
"test": "jest",
"debug": "NODE_ENV=debug npm test",
"develop": "NODE_ENV=develop",
"start": "webpack-dev-server --config webpack.dev.js",
"build": "webpack --config webpack.prod.js"
```
- cały config webpacka jest ukryty dla uytkownika
- webpack-js-starter konfiguruje również pliki:
```bash
.babelrc
.prettierrc
postcss.config.js
```
- webpack-js-starter tworzy również katalogi wraz z przykładowymi plikami:
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
- stworzenie przyjaznej dokumentacji
- dodanie przykładowych projektów w folderze `examples'


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

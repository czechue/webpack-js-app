# TEMPORARY BROKEN

## Webpack 4 (4.29.6) Vanilla Javascript Starter Pack

Generator pozwala za pomocą jednej komendy npm wygenerować boilerplate aplikacji
ze skonfigurowanymi środowiskami `dev, test, pros`.

Idealny boilerplate do tworzenia prostych stron oraz aplikacji webowych w czystym JS.
Narzędzie, pomimo iż z założenia przeznaczone głównie dla początkujących, może być śmiało wykorzystywane przez bardziej
doświadczonych developerów, którzy nie mają czasu na ręczną konfigurację webpacka.

## Instalacja:

## Development

- `npm i -D webpack-js-starter`
- `npm start` - developing on `http://localhost:8080`
- `npm test` - runs tests
- `npm run build` - bundling to prod


## Konfiguracje

### Porównanie

|                          | webpack-onepage-js-starter | webpack-app-js-starter |
| :----------------------- | :------------------------: | :--------------------: |
| Hot Module Replacement   |     :white_check_mark:     |   :white_check_mark:   |
| Dev Environment          |     webpack-dev-server     |   webpack-dev-server   |
| Basic prod minification  |     :white_check_mark:     |   :white_check_mark:   |
| CSS Preprocessor         |        Sass (scss)         |      Sass (scss)       |
| Autoprefixer             |     :white_check_mark:     |   :white_check_mark:   |
| Normalize.css            |     :white_check_mark:     |   :white_check_mark:   |
| Writing code in template |     :white_check_mark:     |          :x:           |
| Writing code in js       |     :white_check_mark:     |   :white_check_mark:   |
| Unit Tests Setup         |            :x:             |   :white_check_mark:   |
| E2E Tests Setup          |            :x:             |   :white_check_mark:   |
| Eslint                   |            :x:             |   :white_check_mark:   |
| Prettier                 |            :x:             |   :white_check_mark:   |

### webpack-onepage-js-starter

- minimalistyczny, idealny do tworzenia stron typu one page,
- kod (strukturę) strony można w całości pisać zarówno w plikach index.html bądź javascript,
- domyślnie przygotowany preprocesor css - Sass (scss),
- zapewnia build produkcyjny oraz środowisko developerskie z hot reloadem,
- w razie potrzeby config można bardzo prosto rozbudować o wszelkie funkcjonalności,

### webpack-app-js-starter

- idealny do tworzenia aplikacji SPA,
- kod strony pisany w JS,
- skonfigurowane środowisko testowe,
- bardziej skupiony na web performance,

### struktura

```
|-- package.json
|-- config
|-- dist
|-- src
|    |-- index.html
|    |-- scripts
|    |    |-- index.js
|    |
|    |-- styles
|    |    |-- main.scss
|    |    |-- base
|    |    |     |-- _base.scss
|    |    |     |-- _typography.scss
|    |
|    |-- assets
|

// webpack-app-js-starter has also:

|-- __e2e__
|    |-- example.test.js
|
|-- src
|    |-- scripts
|    |    |-- index.js
|    |    |-- index.test.js
|
|-- .eslintrc.json
|-- .prettierrc
```

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

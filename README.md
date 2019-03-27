## Webpack JS App - built with webpack 4 (4.29.6) javascript boilerplate

Generator pozwala za pomocą jednej komendy npm wygenerować boilerplate aplikacji
ze skonfigurowanymi środowiskami `dev, test, pros`.

Idealny boilerplate do tworzenia prostych stron oraz aplikacji webowych w czystym JS.
Narzędzie, pomimo iż z założenia przeznaczone głównie dla początkujących, może być śmiało wykorzystywane przez bardziej
doświadczonych developerów, którzy nie mają czasu na ręczną konfigurację webpacka.

## Instalacja:

Node 11.10+
```
npm i -g webpack-js-app
cd <projects>
create-js-app
  > choose boilerplate
  > name a project
  
cd my-app
npm install
```

## Development

- `npm start` - startuje środowisko dev na: `http://localhost:8080`
- `npm run build` - buduje wersję produkcyjną

## Konfiguracje

### Porównanie

|                         | webpack-onepage-js-starter | webpack-spa-js-starter (TBD) |
| :---------------------- | :------------------------: | :--------------------: |
| Hot Module Replacement  |     :white_check_mark:     |   :white_check_mark:   |
| Dev Environment         |     webpack-dev-server     |   webpack-dev-server   |
| Basic prod minification |     :white_check_mark:     |   :white_check_mark:   |
| CSS Preprocessor        |        Sass (scss)         |      Sass (scss)       |
| Autoprefixer            |     :white_check_mark:     |   :white_check_mark:   |
| Normalize.css           |     :white_check_mark:     |   :white_check_mark:   |
| Html template           |     :white_check_mark:     |          :x:           |
| Write code in JS        |     :white_check_mark:     |   :white_check_mark:   |
| Unit Tests              |            :x:             |   :white_check_mark:   |
| E2E Tests               |            :x:             |   :white_check_mark:   |
| Eslint                  |            :x:             |   :white_check_mark:   |
| Prettier                |            :x:             |   :white_check_mark:   |

### Webpack-onepage-js-starter

- minimalistyczny, idealny do tworzenia stron typu one page,
- kod (strukturę) strony można w całości pisać zarówno w plikach index.html bądź javascript,
- w razie potrzeby config można bardzo prosto rozbudować o wszelkie funkcjonalności dostępne w webpack-spa-js-starter,

### Webpack-spa-js-starter (TBD)

- idealny do tworzenia aplikacji SPA,
- kod strony pisany w JS,
- skonfigurowane środowisko testowe,
- bardziej skupiony na web performance,

### Struktura katalogów

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

// webpack-spa-js-starter has also:

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

### Testy (TBD)

Webpack-spa-js-starter korzysta z następujących narzędzi:

- Jest https://github.com/facebook/jest
- DOM-Testing-Library https://github.com/kentcdodds/dom-testing-library
- Puppeteer https://github.com/GoogleChrome/puppeteer
- Jest-Pupeteer https://github.com/smooth-code/jest-puppeteer
- Pixelmatch https://github.com/mapbox/pixelmatch

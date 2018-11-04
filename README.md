## Webpack 4 (4.23.0) Vanilla Javascript Starter Pack

- `npm install`
- `npm start` - developing on `http://localhost:8080`
- `npm test` - runs tests
- `npm run build` - bundling to prod

### Includes:

- Hot reloading
- Dev / Prod separation builds
- Some build optimalizations (work still in progress)
- Sass
- Source maps on
- turned off side effects,
- babel-loader
- jpg / fonts bundling

### Links

#### Testing

- Puppeteer https://github.com/GoogleChrome/puppeteer
- Jest-Pupeteer https://github.com/smooth-code/jest-puppeteer
- Pixelmatch https://github.com/mapbox/pixelmatch

### TODO

- [ ] make the api looks like https://github.com/cristianbote/hnpwa-vanilla
- [ ] improve documentation,
- [ ] clean src folder and add adnotations,
- [ ] add demo app (todo / hacker news clone etc.),
- [ ] add comments to config files,
- [ ] work on build performance, https://webpack.js.org/guides/build-performance/ ,
- [ ] add caching,
- [ ] add PWA config ?,
- [ ] add TypeScript starter version,
- [ ] add testing envi (Jest, Jasmine, Mocha, other...?),
  - [x] analizing (Jest is the winner)
  - [x] add Jest with babel config
  - [x] add integration with puppeteer
- [ ] improve html build https://github.com/jantimon/html-webpack-plugin ,
- [ ] changing html in template doesn't hot refresh page (I used some temporary fix but not sure if it's bugless) https://github.com/webpack/webpack-dev-server/issues/1271 ,
- [ ] check if something interesting can be added from https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1
- [ ] checklist final project with this list https://github.com/thedaviddias/Front-End-Checklist
- [x] add .editorconfig file
- [x] add babel presets

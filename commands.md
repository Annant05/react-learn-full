npm install -g live-server
live-server public/

npm install -g yarn
npm install -g babel-cli@6.24.1

yarn init
yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2

babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

# ReproApp

execute steps in this order:
- yarn install --force
- yarn build-lib
- yarn i18n

steps used to publish lib (just as a fyi):
- cd dist/example-library
- npm publish --access public

steps used to initialize server
- yarn start


If you comment out the usage of "nodeModulesThirdPartyTranslation" everything works properly.

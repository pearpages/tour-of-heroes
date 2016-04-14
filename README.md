## tsconfig.json

The **tsconfig.json** file guides the TypeScript compiler.

[Typescript Configuration](https://angular.io/docs/ts/latest/guide/typescript-configuration.html#!#tsconfig)

## typings.json

> Many JavaScript libraries extend the JavaScript environment with features and syntax that the TypeScript compiler doesn't recognize natively. We teach it about these capabilities with TypeScript type definition files — d.ts files — which we identify in a typings.json file.

[Typescript Configuration](https://angular.io/docs/ts/latest/guide/typescript-configuration.html#!#tsconfig)

## package.json

We execute most npm scripts in the following way: ```npm run + script-name```. Some commands (such as start don't require the run keyword).

- npm start
- npm run tsc
- npm run tsc:w
- npm run lite
- npm run typings
- npm run postinstall

## Behing a proxy

Create the **.tyingsrc** file and add the following (editing the parameters):

```
proxy=http://proxy.example.com:8080
rejectUnauthorized=false
```

## app.component.ts

AppComponent is the root of the application.

Every Angular app has at least one root component, conventionally named AppComponent, that hosts the client user experience.

## Bootstraping

```typescript
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';

bootstrap(AppComponent);
```

Bootstrapping isn't core because there isn't a single way to bootstrap the app. True, most applications that run in a browser call the bootstrap function from this library.

But it is possible to load a component in a different environment. We might load it on a mobile device with Apache Cordova or NativeScript. We might wish to render the first page of our application on the server to improve launch performance or facilitate SEO.

These targets require a different kind of bootstrap function that we'd import from a different library.
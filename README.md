# is-primitive-array

Check if a javascript array contains only primitive values

```javascript

    // If you want it to be a dev dependency
    npm i -D is-primitive-array

    // If you want it to be a dependency
    npm i -S is-primitive-array

    // If you want it to be a global install
    npm i -g is-primitive-array

```

## Usage

```javascript

    // look into spec/

    const primitiveArray = [1, 'a', 0, '', true, false]
    isPrimitiveArray(primitiveArray)) // true

    const nonPrimitiveArray = [1, 'a', 0, '', true, false, {}]
    isPrimitiveArray(nonPrimitiveArray)) // false

```

## Test

```bash

    npm run test

    // or

    jasmine

```

## Lint

```bash

    npm run lint

    // or

    eslint index.js spec/**/*.spec.js

```

## Development

Feel free to send a pull request.

## License

MIT &copy; Anubhav Saini 2017

# GraphQL Codegen Graphjin Error

1. Download https://github.com/dosco/graphjin/tree/f47065f9856ac1c81aef82dd78c557a53f4b0429/examples/webshop (latest example commit to master as of 7/6/2023 6:25 PM CDT)
2. `cd examples/webshop`
3. `docker-compose run api db reset` (Note: latest is used, which is currently equivalent to v3.0.12)
4. `docker-compose up`
5. Change to this repo and run `yarn codegen`

Outputs the below error
```terminal
rpham@hourpham-mb9DKD code-gen-test % yarn codegen
yarn run v1.22.19
$ graphql-codegen --config codegen.ts
✔ Parse Configuration
⚠ Generate outputs
  ❯ Generate to src/graphql/generated.ts
    ✖
      Failed to load schema from http://localhost:8080/api/v1/graphql:
      Schema must contain uniquely named types but contains multiple types named "rolesEnum".
      Error: Schema must contain uniquely named types but contains multiple types named "rolesEnum".
      at new GraphQLSchema (/Users/rpham/Documents/repos/code-gen-test/node_modules/graphql/type/schema.js:219:15)
      at mapSchema (/Users/rpham/Documents/repos/code-gen-test/node_modules/@graphql-tools/utils/cjs/mapSchema.js:14:12)
      at createWrappingSchema (/Users/rpham/Documents/repos/code-gen-test/node_modules/@graphql-tools/wrap/cjs/wrapSchema.js:16:34)
      at wrapSchema (/Users/rpham/Documents/repos/code-gen-test/node_modules/@graphql-tools/wrap/cjs/wrapSchema.js:11:20)
      at memoized (/Users/rpham/Documents/repos/code-gen-test/node_modules/@graphql-tools/utils/cjs/memoize.js:9:30)
      at UrlLoader.load (/Users/rpham/Documents/repos/code-gen-test/node_modules/@graphql-tools/url-loader/cjs/index.js:228:51)
      at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
      at async /Users/rpham/Documents/repos/code-gen-test/node_modules/@graphql-tools/load/cjs/load-typedefs/load-file.js:15:39
      at async Promise.all (index 5)
      at async loadFile (/Users/rpham/Documents/repos/code-gen-test/node_modules/@graphql-tools/load/cjs/load-typedefs/load-file.js:13:9)
      GraphQL Code Generator supports:
      - ES Modules and CommonJS exports (export as default or named export "schema")
      - Introspection JSON File
      - URL of GraphQL endpoint
      - Multiple files with type definitions (glob expression)
      - String in config file
      Try to use one of above options and run codegen again.
    ◼ Load GraphQL documents
    ◼ Generate
  ❯ Generate to src/graphql/graphql.schema.json
    ✖
      Failed to load schema from http://localhost:8080/api/v1/graphql:
      Schema must contain uniquely named types but contains multiple types named "rolesEnum".
      Error: Schema must contain uniquely named types but contains multiple types named "rolesEnum".
      at new GraphQLSchema (/Users/rpham/Documents/repos/code-gen-test/node_modules/graphql/type/schema.js:219:15)
      at mapSchema (/Users/rpham/Documents/repos/code-gen-test/node_modules/@graphql-tools/utils/cjs/mapSchema.js:14:12)
      at createWrappingSchema (/Users/rpham/Documents/repos/code-gen-test/node_modules/@graphql-tools/wrap/cjs/wrapSchema.js:16:34)
      at wrapSchema (/Users/rpham/Documents/repos/code-gen-test/node_modules/@graphql-tools/wrap/cjs/wrapSchema.js:11:20)
      at memoized (/Users/rpham/Documents/repos/code-gen-test/node_modules/@graphql-tools/utils/cjs/memoize.js:9:30)
      at UrlLoader.load (/Users/rpham/Documents/repos/code-gen-test/node_modules/@graphql-tools/url-loader/cjs/index.js:228:51)
      at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
      at async /Users/rpham/Documents/repos/code-gen-test/node_modules/@graphql-tools/load/cjs/load-typedefs/load-file.js:15:39
      at async Promise.all (index 5)
      at async loadFile (/Users/rpham/Documents/repos/code-gen-test/node_modules/@graphql-tools/load/cjs/load-typedefs/load-file.js:13:9)
      GraphQL Code Generator supports:
      - ES Modules and CommonJS exports (export as default or named export "schema")
      - Introspection JSON File
      - URL of GraphQL endpoint
      - Multiple files with type definitions (glob expression)
      - String in config file
      Try to use one of above options and run codegen again.
    ◼ Load GraphQL documents
    ◼ Generate
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
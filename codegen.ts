
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8080/api/v1/graphql",
  generates: {
    "src/graphql/generated.ts": {
      plugins: ["typescript", "typescript-document-nodes"]
    },
    "src/graphql/graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;

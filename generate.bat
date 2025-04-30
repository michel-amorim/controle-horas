curl http://localhost:3000/api-docs.json -o openapi.json

npx openapi-generator-cli generate -i openapi.json -g typescript-axios -o src/api-client


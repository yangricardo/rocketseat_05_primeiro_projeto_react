# rocketseate_primeiro_projeto_react

- `create-react-app nome-do-projeto --template=typescript` cria app react com typescript
- Foi removido diversos arquivos do template padrão (App.css, index.css logo.svg, serviceWorker.ts),
- cuidado com comando eject
- configuração do [editor config](https://www.notion.so/EditorConfig-5f494ae4b47248c1b16681ff74d6766c),[eslint](https://www.notion.so/ESLint-7e455a7ac78b424892329ee064feaf99#c76fc9ceba6d4944a80c134aa16c61c5) e [prettier](https://www.notion.so/Prettier-e2c6a3ec188c4cce8890a3e16a0d6425#da104f9b05964ec1aaac067ab2bf8a54)
- `yarn add eslint-plugin-react @typescript-eslint/eslint-plugin eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react-hooks @typescript-eslint/parser eslint-import-resolver-typescript -D` dependencias do eslint
- `yarn add prettier eslint-config-prettier eslint-plugin-prettier -D` prettier
- [Figma Github Explorer](https://www.figma.com/file/HOCmxfrElzLpI75LdzFLia/Github-Explorer?node-id=0%3A1)

- tipos de routes
  - Browser router: utiliza somente a `/` como ponto de rota
    - atributo exact garante que a rota seja acessada
  - HashRouter: utiliza `#` como ponto de roteamento

# Acqio Challenge
## Váriaveis de ambiente
Antes de rodar o projeto é preciso criar um arquivo **env.example** e setar as variáveis de ambiente, se não possuir as próprias variáveis, pode usar as padrões:

>REACT_APP_GOOGLE_ID=944956267300-ikigvi5ciuojodkd8mik7nn271hj988b.apps.googleusercontent.com
>REACT_APP_API_URL=http://localhost:3001/v1/

## Como rodar o projeto

1. Na pasta raíz do projeto rode o comando **npm install**

2. Em seguida, rode **npm run mock-backend** para subir o mock do back-end

3. E por último rode **npm start** para subir o projeto front-end

## Decisões do projeto

Foi decidido adotar a arquitetura de páginas com componentes auxiliares para compor essas páginas, e temos duas páginas principais, a de login que é integrado com o SSO do Google e a de Transactions que é exibida todas informações sobre as transações

## Bibliotecas

- React - Framework principal para gerenciar a aplicação
- Typescript - Tipagem da linguagem JavaScript
- ReactRouter - Gerenciar as rotas disponíveis na aplicação
- ESlint - Garantir padrão e qualidade do código
- Sass - Pré-processador de CSS para garantirar reaproveitamento de código e facilidade ao codar CSS
- ReactGoogleLogin - Integração com o SSO do Google
- Axios - Realizar requisições para o back-end
- FakeHTTP - Biblioteca que faz possível subir um back-end mockado
- Faker - Biblioteca para gerar os dados mockados randomicamente

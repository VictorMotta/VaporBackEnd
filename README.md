# Projeto Back-End da Loja Virtual de Jogos

Este é o repositório do projeto back-end da nossa loja virtual de jogos inspirada na Steam. Trabalhamos em equipe utilizando o Git como sistema de controle de versão. Aqui estão algumas das principais features e tecnologias utilizadas no desenvolvimento:

## Features

1. **Página Principal com Rolagem Infinita:** A página principal da loja apresenta uma rolagem infinita de itens, permitindo que os usuários naveguem pelos jogos disponíveis de forma contínua e intuitiva.

2. **Carrossel de Promoções:** Implementamos um carrossel que exibe 4 itens aleatórios em promoção na página principal. Isso ajuda a destacar os jogos com desconto e atrair a atenção dos usuários.

3. **Página de Produto:** Cada jogo possui uma página de produto dedicada, que exibe informações detalhadas sobre o jogo, incluindo imagens, descrição, requisitos do sistema e outros detalhes relevantes.

4. **Carrinho de Compras:** Implementamos uma funcionalidade de carrinho de compras, onde os usuários podem adicionar jogos ao carrinho e finalizar a compra posteriormente. Os produtos do carrinho são armazenados no localStorage do navegador, permitindo que os usuários continuem suas compras em diferentes sessões.

5. **Página de Pagamento Teórico:** Implementamos uma página de pagamento teórico, que é responsável por armazenar as informações da compra. Neste momento, a funcionalidade de pagamento real não foi desenvolvida, mas essa página é uma base para futuras implementações.

## Tecnologias Utilizadas

- **Framework React.js:** O desenvolvimento do front-end foi realizado utilizando o React.js como base. Utilizamos conceitos importantes como Context API para o gerenciamento de estado, React Router para a criação de rotas, requisições Axios para interagir com o banco de dados e a biblioteca Styled-components para estilização dos componentes.

- **Node.js:** Utilizamos o Node.js para o desenvolvimento do back-end. Ele nos proporciona uma plataforma flexível para criar aplicações web escaláveis e eficientes.

- **Boas Práticas de Back-End:** Seguimos as boas práticas de desenvolvimento em camadas, utilizando middlewares para a manipulação das requisições, organizando as rotas de forma modular e aplicando conceitos de segurança.

- **Dotenv:** Utilizamos o Dotenv para proteger informações sensíveis, como chaves de API ou credenciais de acesso ao banco de dados. Ele nos permite armazenar essas informações em variáveis de ambiente, tornando-as mais seguras.

- **MongoDB:** Utilizamos o MongoDB como banco de dados para nossa aplicação. Ele é um banco de dados NoSQL flexível e escalável, adequado para armazenar informações relacionadas aos jogos, usuários e outras entidades do sistema.

## Como Inicializar o Projeto

Caso você precise abrir o projeto em sua máquina, siga as etapas abaixo:

1. Certifique-se de ter o Node.js instalado em sua máquina. Você pode fazer o download da versão mais recente do Node.js em: [https://nodejs.org](https://nodejs.org)

2. Faça o clone deste repositório para o diretório de sua preferência em sua máquina.

3. Abra o terminal ou prompt de comando e navegue até o diretório do projeto.

4. No diretório raiz do projeto, execute o comando `npm install` para instalar todas as dependências necessárias.

5. Após a conclusão da instalação, execute o comando `npm run dev` para iniciar o servidor back-end.

6. O servidor estará disponível no endereço `http://localhost:3000`.

Agora você pode explorar o projeto localmente e fazer quaisquer modificações ou melhorias necessárias. Se tiver alguma dúvida ou sugestão, por favor, entre em contato com a equipe. Agradecemos o seu interesse em nosso projeto!

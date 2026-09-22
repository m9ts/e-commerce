# Mouse House 

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-663399?style=for-the-badge&logo=css&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JSON](https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white)](https://www.json.org/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![Cloudflare R2](https://img.shields.io/badge/Cloudflare-R2-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://developers.cloudflare.com/r2/)

Loja virtual de mouses desenvolvida com **React e Vite** para o desafio **Minha Loja no Ar**, do Bootcamp AI/R — Trilha Commerce.

O projeto reúne catálogo de produtos, busca, filtros, carrinho de compras e checkout fictício em uma interface com identidade visual própria.

**[Acesse a loja](https://mouse-house.pages.dev/)** · **[Veja como foi desenvolvida](https://mouse-house.pages.dev/como-fiz)**

## Sobre o projeto

A proposta do desafio era construir e publicar uma mini-loja, mantendo o catálogo separado da interface e explicando as decisões técnicas em vídeo.

A Mouse House foi desenvolvida para praticar a construção de interfaces com React, a manipulação de dados em JSON e o gerenciamento das interações de uma experiência de compra. Além da vitrine, o projeto inclui um fluxo de carrinho e finalização de pedido.

**Este é um projeto educacional: o checkout é fictício e não realiza cobranças ou compras reais.**

## Funcionalidades

- Catálogo de produtos em arquivo JSON separado da interface.
- Busca por nome e filtro por categoria.
- Ordenação por preço, do menor para o maior e do maior para o menor.
- Modal com detalhes e especificações dos produtos.
- Carrinho com adição e remoção de produtos, alteração de quantidades e cálculo do total.
- Indicador de itens no carrinho no cabeçalho.
- Checkout fictício com opção de retornar ao carrinho para revisar os itens.
- Página `/como-fiz` com vídeo de apresentação e resumo das decisões do projeto.

## Tecnologias

| Tecnologia | Uso no projeto |
| --- | --- |
| React | Construção da interface e gerenciamento de estado |
| JavaScript | Lógica da aplicação e interação com os dados |
| Vite | Ambiente de desenvolvimento e geração do build |
| React Router | Navegação entre as páginas |
| HTML e CSS | Estrutura e estilização da interface |
| JSON | Organização do catálogo de produtos |
| Cloudflare Pages | Hospedagem do site |
| Cloudflare R2 | Armazenamento do vídeo de apresentação |

## Decisões de desenvolvimento

### Catálogo separado da interface

Os produtos ficam no arquivo `products.json`, carregado via `fetch`. Assim, os dados do catálogo ficam separados dos componentes responsáveis pela apresentação da vitrine.

Essa organização exercita a separação entre dados e apresentação discutida no desafio. Nesta versão, o catálogo é estático; não há uma plataforma de comércio ou um backend próprio fornecendo os produtos.

### Identidade visual

A interface utiliza uma paleta minimalista com roxo como cor principal e a fonte **Space Grotesk**. A vitrine prioriza os produtos, com acesso à busca, aos filtros e ao carrinho.

### Fluxo de compra

O carrinho permite revisar produtos e quantidades antes da finalização. A opção de voltar ao carrinho a partir do checkout foi incluída para facilitar ajustes durante a navegação.

### Publicação e vídeo

O site é publicado no Cloudflare Pages. O vídeo da página `/como-fiz` fica no Cloudflare R2 e é reproduzido na própria página.

## Como executar localmente

É necessário ter **Git, Node.js e npm** instalados. Utilize uma versão do Node.js compatível com a versão do Vite declarada no `package.json`.

```bash
# Clone o repositório
git clone https://github.com/m9ts/e-commerce.git

# Acesse a pasta da aplicação
cd e-commerce/mouse-house

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Abra no navegador o endereço informado pelo terminal.

Os comandos acima consideram a aplicação na subpasta `mouse-house` e o script `dev` do Vite. Se a organização do repositório mudar, execute a instalação e a inicialização na pasta que contém o `package.json` da aplicação e confira os scripts disponíveis nesse arquivo.

## Apresentação do desenvolvimento

A página **[Como fiz](https://mouse-house.pages.dev/como-fiz)** apresenta o projeto e as principais decisões de implementação, incluindo a organização do código, o catálogo em JSON e uma discussão sobre hospedagem, cache, Lighthouse e possíveis aplicações de IA.

Também aborda onde um **BFF — Backend for Frontend** poderia entrar em uma evolução da loja: entre a interface e serviços de catálogo, estoque ou pedidos, reunindo os dados necessários para cada tela. Essa arquitetura é uma proposta de evolução e não faz parte da implementação atual.

## Possíveis melhorias

- Simulação de entrega a partir do CEP.
- Expansão do catálogo para outros periféricos.
- Recomendações de produtos relacionados.
- Assistente para dúvidas sobre os produtos.
- Integração com uma API para catálogo, estoque e pedidos.

## Autor

Desenvolvido por **Mateus Gois**.

[GitHub](https://github.com/m9ts)

# ChatBot FURIA - Desafio #1
Descrição do Projeto
Este projeto foi desenvolvido como parte do Desafio #1 - Experiência Conversacional FURIA para criar uma interface conversacional para os fãs do time de Counter-Strike (CS) da FURIA Esports. A solução foi desenvolvida com o objetivo de criar uma experiência interativa e informativa para os fãs do time, oferecendo um chatbot inteligente que responde a perguntas sobre a FURIA Gaming.

O chatbot foi implementado com React e está integrado com a API Gemini do Google, que processa as perguntas dos usuários, fornecendo respostas detalhadas sobre a equipe de esports, estatísticas, curiosidades e outros aspectos relacionados à FURIA. A landing page do site foi projetada para ter a estética visual do time, garantindo uma interface atraente e alinhada à identidade visual da FURIA.

Funcionalidades
ChatBot Interativo: O chatbot permite que os usuários façam perguntas sobre a FURIA Gaming, com o bot respondendo de forma inteligente e personalizada. Ele utiliza a API Gemini do Google para processar as mensagens e fornecer respostas.

Histórico de Conversa: Todas as interações do usuário com o chatbot são armazenadas no histórico de chat, para que o usuário possa acompanhar as perguntas e respostas.

Respostas Dinâmicas: As respostas do chatbot são geradas dinamicamente e podem incluir informações sobre o time, estatísticas e curiosidades.

Aparência Personalizada: O design do chatbot segue a estética da FURIA, com o uso de cores, fontes e imagens representativas do time.

Como Funciona
## 1. Componentes:
ChatBot: Componente principal que gerencia o estado de abertura/fechamento do chatbot, o histórico de mensagens e a comunicação com a API.

ChatForm: Componente que permite ao usuário inserir novas perguntas no chatbot.

ChatMessage: Componente responsável por exibir as mensagens de cada usuário ou do bot.

LogoImage: Logo da FURIA que aparece na interface do chatbot.

## 2. Processo de Resposta:
Quando o usuário envia uma mensagem, a função generateBotResponse é acionada. Essa função prepara a mensagem do usuário para ser enviada à API Gemini do Google, que retorna uma resposta.

A resposta é exibida no chat, junto com o histórico de mensagens.

## 3. Interação com a API:
A API Gemini do Google recebe a pergunta do usuário e envia uma resposta relacionada à FURIA, como curiosidades, estatísticas ou informações sobre o time.

A função de resposta do bot simula uma conversa, exibindo a mensagem "Pensando..." enquanto processa a solicitação.

## 4. Estética e Design:
A interface é completamente personalizada com as cores e logo da FURIA. Foi implementada uma landing page que introduz o chatbot, explicando como ele funciona e destacando a importância do time.

O design segue uma estrutura moderna e simples, mas atraente para os fãs do time, com um layout limpo e intuitivo.

Tecnologias Utilizadas
React: Framework utilizado para desenvolver a interface do chatbot.

Context API: Gerencia o estado global de visibilidade do chatbot (aberto ou fechado).

Fetch API: Utilizada para enviar e receber dados da API Gemini do Google que processa as mensagens.

CSS: Para o design visual do chatbot, garantindo uma experiência agradável e compatível com a identidade da FURIA.

Material Icons: Ícones de interface para interações do usuário, como abrir/fechar o chatbot.

Como Usar
## 1. Executar Localmente:
Para executar o projeto localmente, siga os passos abaixo:

### 1. Clone o repositório:

git clone https://github.com/seu-usuario/furia-chatbot.git

### 2.Instale as dependências:

cd furia-chatbot
npm install

### 3.Inicie o servidor de desenvolvimento:

npm run dev

### 4.Abra o navegador e acesse o projeto:

## 2. Hospedagem:

O chatbot foi hospedado na Netlify, e você pode acessar o projeto diretamente no link da plataforma de hospedagem: https://furia-chatbot.netlify.app/

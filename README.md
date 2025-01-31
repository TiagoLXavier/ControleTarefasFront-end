## README - Projeto React + Vite

Este projeto foi desenvolvido utilizando React com Vite e Node.js versão 23.6.1.

## Configuração da URL da API

Para configurar a URL da API, siga os seguintes passos:

1.  Abra o arquivo `vite.config.js`.
2.  Na linha 9 (ou na linha que define o `target`), ajuste a URL para o seu backend. Por exemplo:

```javascript
target: 'http://localhost:5106'
```

Certifique-se de que a URL corresponda à URL do seu backend.

## Instalação das dependências

No terminal, digite o seguinte comando para instalar todas as dependências do projeto:

```bash
npm install
```

## Executando a aplicação

No terminal, digite o seguinte comando para rodar a aplicação:

```bash
npm run dev
```

## Acessando a aplicação

Após executar o comando `npm run dev`, o terminal exibirá as informações do host local, como no exemplo abaixo:

```
Re-optimizing dependencies because vite config has changed

VITE v6.0.11 ready in 885 ms

➜ Local: http://localhost:5173/
➜ Network: use --host to expose
➜ press h + enter to show help
```

Para acessar a aplicação, pressione Ctrl e clique na URL exibida no terminal (http://localhost:5173/ no exemplo) ou copie e cole a URL no seu navegador.

## Observações

*   Certifique-se de ter o Node.js versão 23.6.1 instalado em sua máquina.
*   Caso a porta 5173 já esteja em uso, o Vite irá automaticamente usar outra porta. Verifique a mensagem exibida no terminal para saber a porta correta.
*   Para expor o servidor para acesso externo, utilize a opção `--host` ao executar o comando `npm run dev`.

Este README fornece as informações necessárias para configurar e executar o projeto. Em caso de dúvidas, consulte a documentação do React e do Vite.

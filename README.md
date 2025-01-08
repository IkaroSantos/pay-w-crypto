# Pay w/ Crypto (MetaMask)

Este é um projeto simples que conecta a MetaMask, permite fazer pagamentos com Ethereum e exibe o valor em reais (BRL). O valor em BRL é convertido para Ethereum usando uma taxa de câmbio atual, e o pagamento é feito via MetaMask.

## Como Usar

### Requisitos

- [Node.js v18](https://nodejs.org/en/)
- [MetaMask](https://metamask.io/) (extensão do navegador)

### Passos para Configuração

1. **Clone o repositório:**

   Se você ainda não fez o clone do projeto, clone o repositório usando o comando:

   ```bash
   git clone https://github.com/SEU_USUARIO/nome-do-repositorio.git
   cd nome-do-repositorio
Instale as dependências:

Para instalar as dependências do projeto, execute o comando abaixo:

bash
Copiar código
npm install
Substitua o Endereço da Carteira:

No arquivo app.js, você encontrará a linha onde o pagamento será enviado. Substitua <RECEIVER_ADDRESS> pelo endereço da sua carteira Ethereum, ou seja, o endereço para o qual você deseja enviar o pagamento.

javascript
Copiar código
const tx = await web3.eth.sendTransaction({
  from: userAccount,
  to: '<RECEIVER_ADDRESS>',  // Substitua por seu endereço de carteira
  value: weiAmount,
});
Importante: Certifique-se de que o endereço de carteira Ethereum que você está usando seja válido e tenha fundos suficientes.

Inicie o Servidor:

Para iniciar o servidor, use o Node.js v18. Execute o seguinte comando:

bash
Copiar código
node server.js
Isso vai iniciar o servidor local. Agora você pode acessar o aplicativo no seu navegador. Normalmente, ele estará disponível em http://localhost:8080.

Como Funciona
O projeto usa a biblioteca Web3.js para interagir com a blockchain Ethereum através da MetaMask.
Quando o usuário conecta a MetaMask, o endereço da carteira é capturado e mostrado na tela.
O valor em BRL (Reais) é digitado no campo de entrada e automaticamente convertido para ETH (Ethereum) usando uma taxa de câmbio obtida via API da CoinGecko.
O usuário pode então clicar no botão "Pagar com Ethereum" para fazer o pagamento usando o Ethereum da sua carteira.
Atualização da Taxa de Câmbio
A taxa de câmbio de BRL para ETH é obtida da API da CoinGecko. No código, a função fetchBrlToEthRate consulta a API para obter a taxa atual. Você pode alterar o valor do brlToEthRate diretamente no código, caso deseje usar uma taxa fixa.

Contribuições
Sinta-se à vontade para fazer contribuições ou melhorias no projeto. Para isso, basta criar um fork, realizar as mudanças e enviar um pull request.

Licença: MIT

markdown
Copiar código

### O que está incluído:
- **Instruções de configuração** para o projeto (como clonar e instalar dependências).
- **Instruções sobre como substituir o endereço da carteira** na variável `<RECEIVER_ADDRESS>`.
- **Como iniciar o projeto** com o comando `node server.js`.
- **Explicação do funcionamento básico** do projeto.
- **Instruções para atualizações de taxa de câmbio**.

Esse `README.md` deve cobrir os pontos principais e fornecer uma explicação clara para quem quiser configurar e rodar o projeto.
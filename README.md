# Pay w/ Crypto (MetaMask)

Este é um projeto simples que conecta a MetaMask, permite fazer pagamentos com Ethereum e exibe o valor em reais (BRL). O valor em BRL é convertido para Ethereum usando uma taxa de câmbio atual, e o pagamento é feito via MetaMask.

## Como Usar

### Requisitos

- [Node.js v18](https://nodejs.org/en/)
- [MetaMask](https://metamask.io/) (extensão do navegador)

### Passos para Configuração

Instale as dependências:

Para instalar as dependências do projeto, execute o comando abaixo:

```bash
npm install
```
Substitua o Endereço da Carteira:

No arquivo app.js, você encontrará a linha onde o pagamento será enviado. Substitua `<RECEIVER_ADDRESS>` pelo endereço da sua carteira Ethereum, ou seja, o endereço para o qual você deseja enviar o pagamento.

```javascript
const tx = await web3.eth.sendTransaction({
  from: userAccount,
  to: '<RECEIVER_ADDRESS>',  // Substitua por seu endereço de carteira
  value: weiAmount,
});
```
Importante: Certifique-se de que o endereço de carteira Ethereum que você está usando seja válido e tenha fundos suficientes.

Inicie o Servidor:

Para iniciar o servidor, use o Node.js v18. Execute o seguinte comando:

```bash
node server.js
```

Isso vai iniciar o servidor local. Agora você pode acessar o aplicativo no seu navegador. Normalmente, ele estará disponível em `http://localhost:3000`.

### Como Funciona
O projeto usa a biblioteca Web3.js para interagir com a blockchain Ethereum através da MetaMask.
Quando o usuário conecta a MetaMask, o endereço da carteira é capturado e mostrado na tela.
O valor em BRL (Reais) é digitado no campo de entrada e automaticamente convertido para ETH (Ethereum) usando uma taxa de câmbio obtida via API da CoinGecko.
O usuário pode então clicar no botão "Pagar com Ethereum" para fazer o pagamento usando o Ethereum da sua carteira.
Atualização da Taxa de Câmbio
A taxa de câmbio de BRL para ETH é obtida da API da CoinGecko. No código, a função fetchBrlToEthRate consulta a API para obter a taxa atual. Você pode alterar o valor do brlToEthRate diretamente no código, caso deseje usar uma taxa fixa.

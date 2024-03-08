const inputProduto = document.getElementById("input-produto");

const respostaH4 = document.getElementById("resposta-preco");

var morango = {nome: "Morango", valor: 1.99}
var banana = {nome: "Banana", valor: 2.99 };
var abacaxi = {nome: "Abacaxi", valor: 3.99 };
var mamao = {nome: "Mamao", valor: 4.99 };


function consultarPreco() {
  const cod = inputProduto.value;
  const resposta = precos(cod);
  respostaH4.innerText = `Preço: ${resposta.nome}: R$${resposta.valor}`;
}

function precos(cod) {
  var cod = document.getElementById("input-produto").value;

  switch (cod) {
    case "1":
      return (morango);
    case "2":
      return (banana);
    case "3":
      return (abacaxi);
    case "4":
      return (mamao);
    default:
      alert('Cógido não encontrado. Digite um código válido.')
  }
}


var carrinho = [];

function addCarrinho() {
  const cod = inputProduto.value;
  const produto = precos(cod);
  if (produto) {
    carrinho.push(produto);
    alert(`${produto.nome} adicionado ao carrinho.`);
    atualizaCarrinho();
  }
}

function atualizaCarrinho() {
  let total = 0;
  carrinho.forEach((item) => {
    total += parseFloat(item.valor);
  });
  const totalCarrinhoElement = document.getElementById("itensCarrinho");
  totalCarrinhoElement.textContent = `Total do carrinho: R$${total.toFixed(2)}`;
}
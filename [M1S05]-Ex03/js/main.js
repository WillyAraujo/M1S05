const inputProduto = document.getElementById("input-produto");

const respostaH4 = document.getElementById("resposta-preco");

function consultarPreco() {
  const cod = inputProduto.value;
  const resposta = precos(cod);
  respostaH4.innerText = resposta;
}

function precos(cod) {
  switch (cod) {
    case "1":
      return "Morango: R$1,99/kg";
    case "2":
      return "Banana: R$2,99/kg";
    case "3":
      return "Abacaxi: R$3,99/kg";
    case "4":
      return "Mamão: R$4,99/kg";
    default:
      return "Código não encontrado. Tente novamente";
  }
}

const carrinho = [];

function addCarrinho() {
  const cod = inputProduto.value;
  const resposta = precos(cod);
  if (resposta !== "Código não encontrado. Tente novamente") {
    carrinho.push({
      nome: resposta.split(":")[0],
      preco: resposta.split(":")[1].trim(),
    });
    console.log("Produto adicionado ao carrinho:", carrinho);
    alert("Produto adicionado ao carrinho!");
  } else {
    console.log("Código não encontrado. Tente novamente");
    alert("Código não encontrado. Tente novamente");
  }
}
const inputProduto = document.getElementById("input-produto");

const respostaH4 = document.getElementById("resposta-preco");

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

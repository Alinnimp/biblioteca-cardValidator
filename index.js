function cardValidator(numCartao) {
  if (!numCartao) {
    throw new Error("Não pode ser vazio");
  }
  if (typeof numCartao === "string") {
    throw new Error("Não pode conter letras");
  }
  if (numCartao.toString().length < 10) {
    throw new Error("Tem que haver mais que 1 digito")
  }

  let cardNum = numCartao.toString().split("").reverse();
  let sumTotal = 0;

  for (let i = 0; i < cardNum.length; i++) {
    if (i % 2 === 1){
      let quantNum = parseInt(cardNum[i]) * 2;
      if (quantNum >= 10) {
        sumTotal += parseInt(quantNum / 10) + (quantNum % 10);
      }
    } else {
        sumTotal += parseInt(cardNum[i]);
      }
  }

  if (sumTotal % 10 === 0) {
    return true;
  } else {
    return false;
  }
}
module.exports.cardValidator = cardValidator;

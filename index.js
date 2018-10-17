function cardValidator(numCartao) {
    if (!numCartao) {
        throw new Error("Can not be empty");
    }
    if (typeof numCartao === "string") {
        throw new Error("Contains string");
    }
    if (numCartao.toString().length < 10) {
        throw new Error("Digits smaller than expected");
    }

    let numCard = numCartao.toString().split("").reverse();
    let total = 0;

    for (let i = 0; i < numCard.length; i++) {
        if (i % 2 === 1) {
            let quantNum = parseInt(numCard[i]) * 2;
            if (quantNum >= 10) {
                total += parseInt(quantNum / 10) + (quantNum % 10);
            }
        } else {
            total += parseInt(numCard[i]);
        }
    }
    if (total % 10 === 0) {
      return (total % 10 === 0);
    }
  }
module.exports.cardValidator = cardValidator;

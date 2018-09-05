function cardValidator(numCartao) {
    if (!numCartao) {
        throw new Error("Não pode ser vazio");
    }
    if (typeof numCartao === "string") {
        throw new Error("Contém string");
    }
    if (numCartao.toString().length < 10) {
        throw new Error("Digitos menor do que o esperado");
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
        return true;
    } else {
        return false;
    }
}
module.exports.cardValidator = cardValidator;

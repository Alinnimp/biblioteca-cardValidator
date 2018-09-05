const chai = require('chai');
const expect = chai.expect;
const validator = require('../index');

describe('validator', function() {
  describe('#cardValidator()', function() {
    describe('Quando nao houver parametro deve lancar um erro.', function(){
      it('Deve lançar um erro', function() {
        let badFn = function () { validator.cardValidator(); };
        expect(badFn).to.throw(Error);
      });
    });
    describe('Quando o numero for uma string deve lancar um erro', function(){
      it('Deve lançar um erro', function() {
        let badFn = function () { validator.cardValidator(); };
        expect(badFn).to.throw(Error);
      });
    });
    describe('Quando o numero for um inteiro e houver um digito deve lancar um erro', function(){
      it('Deve lançar um erro', function() {
        let badFn = function () { validator.cardValidator(); };
        expect(badFn).to.throw(Error);
      });
    });
    describe('Quando o numero for um inteiro e for um cartão válido deve retornar true.', function(){
      it('Deve lançar um erro', function() {
        expect(validator.cardValidator(5555666677778884)).to.be.true;
      });
    });
    describe('Se o cartao for invalido deve retornar false.', function(){
      it('Deve lançar um erro', function() {
        expect(validator.cardValidator(5390830298398279)).to.be.false;
      });
    });
  });
});

const chai = require('chai');
const expect = chai.expect;
const validator = require('../index');

describe('card', function () {
 describe('#cardValidator', function () {
   describe('When there is no parameter.', function () {
     it('Must show an error.', function () {
       let badFn = function () { validator.cardValidator(); };
       expect(badFn).to.throw(Error);
     });
   });

   describe('When its a string.', function () {
     it('Must show an error.', function () {
       let badFn = function () { validator.cardValidator('Teste'); };
       expect(badFn).to.throw(Error);
     });
   });

   describe('When the number is integer and there is only one digit.', function () {
     it('Must show an error..', function () {
       let badFn = function () { validator.cardValidator(12345); };
       expect(badFn).to.throw(Error);
     });
   });

   describe('When the number is valid it should return true.', function () {
     it('Must show an error..', function () {
       expect(validator.cardValidator(5555666677778884)).to.be.true;
     });
   });

   describe('If the card is invalid it should return false.', function () {
     it('Must show an error.', function () {
       expect(validator.cardValidator(5390830298398279)).to.be.false;
     });
   });
 });
});

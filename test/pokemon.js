var expect = require('chai').expect;
require('mocha-sinon');
const Pokemon = require('../index.js').Pokemon;

describe("Pokemon", () => {
describe("show", () => {
	beforeEach(function() {
    var log = console.log;
    this.sinon.stub(console, 'log').callsFake(function() {
    return log.apply(log, arguments);
  });
  });

  it("Корректный ввод", () => {
  	new Pokemon("Метапод", 1).show();
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith('Имя: Метапод, уровень: 1')).to.be.true;
  });

   it("Первый аргумент", () => {
  	new Pokemon("Метапод").show();
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith('Имя: Метапод, уровень: undefined')).to.be.true;
  });

     it("Второй аргумент", () => {
  	new Pokemon("", 1).show();
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith('Имя: , уровень: 1')).to.be.true;
  });

   it("Без аргументов", () => {
  	new Pokemon().show();
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith('Имя: undefined, уровень: undefined')).to.be.true;
  });

});
});
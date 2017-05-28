const assert = require('assert');
var expect = require('chai').expect;
require('mocha-sinon');
const Pokemon = require('../index.js').Pokemon;
const PokemonList = require('../index.js').PokemonList;

describe("PokemonList", () => {

  let list;

    beforeEach(function() {
    list = new PokemonList (new Pokemon("Метапод", 1), new Pokemon("Видл", 2), new Pokemon("Эканс", 3));
  });

describe("add", () => {
  it("проверка наличия покемона в массиве", () => {
    list.add ("Нидоран", 4);
    assert(list[3] != undefined, "покемона нет в массиве");
  });

    it("данные покемона корректны", () => {
    list.add ("Нидоран", 4);
    assert(list[3].name == "Нидоран" && list[3].level == 4, "данные покемона некорректны");
  });
});


describe("show", () => {
  beforeEach(function() {
    var log = console.log;
    this.sinon.stub(console, 'log').callsFake(function() {
    return log.apply(log, arguments);
  });
  });

  it("Корректный показ одного покемона", () => {
  	list = new PokemonList (new Pokemon("Метапод", 1));
    list.show();
    expect(console.log.calledWith('Имя: Метапод, уровень: 1')).to.be.true;
    expect(console.log.calledWith('Всего покемонов: 1')).to.be.true;
  });

   it("Корректный показ нескольких покеномов", () => {
  	list.show();
    expect(console.log.calledWith('Имя: Метапод, уровень: 1')).to.be.true;
    expect(console.log.calledWith('Имя: Видл, уровень: 2')).to.be.true;
    expect(console.log.calledWith('Имя: Эканс, уровень: 3')).to.be.true;
    expect(console.log.calledWith('Всего покемонов: 3')).to.be.true;
  });


});



describe("max", () => {

  it("вернет покемона с максимальным уровнем", () => {
    result = list.max;
    expect(result.name == "Эканс" && result.level == 3).to.be.true;
  });


  it("вернет undefined, если список пуст", () => {
    list = new PokemonList ();
    result = list.max;
    expect(result).to.be.undefined;
  });


});



});
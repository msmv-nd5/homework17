'use strict';

class Pokemon {
	constructor (name, level) {
		this.name = name;
		this.level = level;
	}
	show(){
		console.log (`Имя: ${this.name}, уровень: ${this.level}`);
	}
	get getName (){
		return this.name;
	}
	get getLevel (){
		return this.level;
	}

	valueOf() {
    return this.level;
  }
}

class PokemonList extends Array {
	constructor (...pokemons) {
		return super(...pokemons);
	}

	add (name, level) {
		let newPokemon = new Pokemon (name, level);
		this.push(newPokemon);
	}

	show(){
		for (let pokemon of this) {
			pokemon.show();
		}
		console.log ("Всего покемонов: " + this.length);
	}
	get max (){
		var maxLevel = Math.max (...this);
		for (var pokemon of this) {
			if (pokemon.getLevel == maxLevel) {return pokemon;}
		}
	}

}

/*
Создать два списка покемонов и сохранить их в переменных lost и found. Имена и уровни придумайте самостоятельно.

var lost =  new PokemonList (new Pokemon("Метапод", 1), new Pokemon("Видл", 2), new Pokemon("Эканс", 3));
var found = new PokemonList (new Pokemon("Нидоран", 4), new Pokemon("Голбат", 5), new Pokemon("Оддиш", 6));


/*
Добавить несколько новых покемонов в каждый список.

lost.add ("Парас", 8);
lost.add ("Венонат", 7);
found.add ("Дагтрио", 9);
found.add ("Зубат", 10);

/*
Перевести одного из покемонов из списка lost в список found

var i = 0;
for (var pokemon of lost) {
			if (pokemon.getName == "Венонат") {
				found.add(pokemon.getName, pokemon.getLevel);
				lost.splice(i,1);
				break;
			}
			i++;
		}

/*
Выводим информацию

console.log("Lost: ");
lost.show();
console.log("Максимальный уровень: " + lost.max.getLevel + " (покемон "+lost.max.getName+")\n");
console.log("Found: ");
found.show();
console.log("Максимальный уровень: " + found.max.getLevel + " (покемон "+found.max.getName+")");
*/

module.exports = {
    Pokemon,
    PokemonList
}
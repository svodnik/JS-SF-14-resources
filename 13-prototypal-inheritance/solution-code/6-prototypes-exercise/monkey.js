/*
  Create a `Monkey` constructor that has the following attributes:
  * name - (a string)
  * species - (a string)
  * foodsEaten - (an array)

  And the following methods:
  * eat(food) - adds the food (a string) to the list of foods eaten
  * introduce() - introduces self, with name, species, and what it's eaten.

  ## Goal

  Make sure to use the Monkey prototype so that you're not creating multiple copies of the functions for your monkeys

  ## Bonus

  WHen logging the foods eaten, make the sentence grammatical, including commas and "and" when appropriate.
*/

let Monkey = function(name,species){
  this.name = name;
  this.species = species;
}
Monkey.prototype.foodsEaten = [];
Monkey.prototype.eat = function(food){
  this.foodsEaten.push(food);
}
Monkey.prototype.introduce = function(){
  return "Hello! My name is " + this.name + " and I am a " + this.species + ". I have eaten " + this.foodsEaten.join(", ")
}
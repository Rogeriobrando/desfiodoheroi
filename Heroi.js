class description{
    constructor(name, age, kindOfHero, kindOfMagic){
        this.name = name
        this.age = age
        this.kindOfHero = kindOfHero
        this.kindOfMagic = kindOfMagic
    }

    warior() {
    return `O heroi ${this.name} de ${this.age} anos \n Do tipo ${this.kindOfHero} atacou usando ${this.kindOfMagic}`
    }   

    magen() {
    return `O heroi ${this.name} de ${this.age} anos \n Do tipo ${this.kindOfHero} atacou usando ${this.kindOfMagic}`
    } 

    monkn() {
    return `O heroi ${this.name} de ${this.age} anos \n Do tipo ${this.kindOfHero} atacou usando ${this.kindOfMagic}`
    } 

    ninja() {
    return `O heroi ${this.name} de ${this.age} anos \n Do tipo ${this.kindOfHero} atacou usando ${this.kindOfMagic}`
    } 


}

var descriptionWarrior = new description('Ragnar', '35', 'Guerreiro', 'Espada');
var descriptionMagen = new description('Roderick', '50', 'Mago', 'Magia');
var descriptionMonk = new description('Shaolin', '30', 'Monge', 'Artes marciais');
var descriptionNinja = new description('Hattori', '40', 'Ninja', 'Shuriken');

console.log(descriptionWarrior.warior());
console.log(descriptionMagen.magen());
console.log(descriptionMonk.monkn());
console.log(descriptionNinja.ninja());

    



    






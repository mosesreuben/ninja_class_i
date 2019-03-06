function Ninja(name) {
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;

    this.sayName = function () {
        console.log("My ninja name is" + this.name);
    }

    this.showStats = function () {
        console.log("Name: " + this.name + " - Health: " + this.health + " - Speed: " + this.speed + " - Strength: " + this.strength);
    }

    this.drinkSake = function () {
        this.health += 10;
        console.log(this.name + " drinks some sake. Health is now " + this.health);
    }
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
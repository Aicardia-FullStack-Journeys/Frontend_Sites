class Fruits{
    constructor(fruit){
        this.fruit = fruit;
    }

    getName(){
        return this.fruit;
    }

    setName(name){
        this.fruit = name;
    }
}

module.exports = new Fruits("Banana"); //instance of class export
//module.exports = Fruits; //whole class export
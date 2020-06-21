class Character {
    constructor(number, name, image, key) {
        this.number = number;
        this.name = name;
        this.image = image;
        this.key = key;
    }

    getNumber(){
        return this.number;
    }

    getName(){
        return this.name;
    }

    getImage(){
        return this.image;
    }

    getKey(){
        return this.key;
    }

}

export default Character;
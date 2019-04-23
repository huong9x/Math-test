class MathSet {
    constructor (elements) {
        this.elements = elements;
    }
    getForce() {
        return this.elements.length;
    }
    getElements (){
        return this.elements;
    }
    
    Union (other) {
        let unionedElements= this.elements.concat(other.getElements);
        return new MathSet(unionedElements);
    }
}
module.exports = MathSet;
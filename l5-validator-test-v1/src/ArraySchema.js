export default class ArraySchema {
    constructor() {
        this.rules = [
            'array'
        ]
    }
    isValid(el){ 
        let test = true
        console.log(el)
        test &&= Array.isArray(el)
        if (this.rules.length == 2){
            test &&= el.length == this.rules[1]
        }
        return test
    }
    length(len) {
        this.rules.push(len)
        return this
    }
}
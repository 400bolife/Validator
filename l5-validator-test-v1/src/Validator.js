import NumberSchema from 'NumberSchema.js';
import ObjectSchema from 'Objectschema.js';
import StringSchema from 'StringSchema.js';
import ArraySchema from 'ArraySchema.js';
export default class  Validator { 
    constructor() {
        this.rules = []
    }

    number() {
        return new NumberSchrma()
    }
    array() {
        return new ArraySchema()
    }
    string() {
        return new StringSchema()
    }
    object() {
        return new ObjectSchema()
    }
}


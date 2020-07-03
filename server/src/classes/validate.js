'uses strict'

module.exports =  class Validate {
    constructor() {
        this.errors = [];
    }

    getErrors() {
        return this.errors;
    }

    validateData(_data) {}
};
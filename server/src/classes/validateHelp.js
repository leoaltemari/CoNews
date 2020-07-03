'uses strict'

var Validate = require('./validate');

module.exports = class ValidateHelp extends Validate {
    constructor(_data) {
        super(_data);
    }

    validateName(_name) {
        if(!_name) {
            throw new Error('Nome vazio');
        }
        if(_name.length < 5) {
            this.errors.push('Nome deve conter mais de 5 caracteres');
        }
    }

    validatePhoneNumber(_phoneNumb) {
        if(!_phoneNumb) {
            throw new Error('Numero de telefone vazio');
        }
        if(_phoneNumb.length != 10) {
            this.errors.push('Telefone deve ter o formato (dd) 3333-3333');
        }
    }

    equals(var1, var2) {
        return var1 === var2
    }
    validateState(_state) {
        if(!_state) {
            throw new Error('Estado vazio');
        }
        if(_state.length != 2) {
            this.errors.push('Sigla do estado invalida');
        }

        
        let States = require('./states/states');
        let objStates = new States().getStates();
        for(let i = 0; i < objStates.length; i++) {
            if(objStates[i].sigla === _state) {
                var find = true;
            }
        }

        if(!find) {
            this.errors.push('Sigla do estado invalida');
        }
    }
    
    validateData(_data) {
        this.errors = [];
        const dataName = _data.name;
        const dataPhoneNumb = _data.phoneNumber;
        const dataState = _data.state;

        try {
            this.validateName(dataName);
            this.validatePhoneNumber(dataPhoneNumb);
            this.validateState(dataState);
        } catch(err) {
            console.log("Error: ", err.message);
        }
    }
}
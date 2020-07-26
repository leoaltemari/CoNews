'uses strict'

var Validate = require('./validate');

module.exports = class ValidateHelp extends Validate {
    constructor(_data) {
        super(_data);
    }

    validateName(_name) {
        if(!_name) {
            this.errors.push('Nome vazio');
            return;
        }
        if(_name.length < 5) {
            this.errors.push('Nome deve conter mais de 5 caracteres');
        }
    }

    validatePhoneNumber(_phoneNumb) {
        if(!_phoneNumb) {
            this.errors.push('Numero de telefone vazio');
            return;
        }
        if(_phoneNumb.length != 14 && _phoneNumb !== 'Não possui') {
            this.errors.push('Telefone deve ter o formato (dd) 3333-3333');
        }
    }

    equals(var1, var2) {
        return var1 === var2
    }
    validateState(_state) {
        if(!_state) {
            this.errors.push('Estado vazio');
            return;
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
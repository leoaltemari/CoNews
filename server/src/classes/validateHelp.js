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

    validateAddress(_address) {
        if(!_address) {
            throw new Error('Endereço vazio');
        }
        if(_address.length < 10) {
            this.errors.push('Endereço deve ter mais de 10 caracteres');
        }
    }
    validateData(_data) {
        this.errors = [];
        const dataName = _data.name;
        const dataPhoneNumb = _data.phoneNumber;
        const dataAddress = _data.address;


        try {
            this.validateName(dataName);
            this.validatePhoneNumber(dataPhoneNumb);
            this.validateAddress(dataAddress);
        } catch(err) {
            console.log("Error: ", err.message);
        }
    }
}
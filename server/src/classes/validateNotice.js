'uses strict'

let Validate = require('./validate');

module.exports = class ValidateNotice extends Validate {
    constructor(_data) {
        super(_data);
    }

    validateLink(_link) {
        if(!_link) {
            throw new Error('Link em branco');
        }
        if(_link.length < 7) {
            this.errors.push('Link deve ter mais de 7 caracteres');
        }
        if(_link.indexOf('www.') === -1) {
            this.errors.push('Link deve conter \'www.\'');
        }
    };

    validateDate(_date) {
        if(!_date) {
            throw new Error('Data em branco');
        }
        const todaysDate = new Date();
        const day = parseInt(_date.substring(0, 2));
        const month =  parseInt(_date.substring(3, 5));
        const year =  parseInt(_date.substring(6, 9));

        if(_date > todaysDate.getDate()) {
            this.errors.push('Data inválida, entre com uma data atual');
        }
        if(day < 1 || day > 31 ||
            month < 1 || month > 12) {
            this.errors.push('Data inválida, formato deve seguir dd/mm/aa');
        }
        if(year < 19) {
            this.errors.push('Data inválida, entre com um ano maior que 2019');
        } else if(year > todaysDate.getFullYear) {
            this.errors.push('Data inválida, entre com um ano atual');
        }
    }

    validateTitle(_title) {
        if(!_title) {
            throw new Error('Titulo em branco');
        }

        if(_title.length < 10 || _title.length > 20) {
            this.errors.push('Título inválido, entre com um título de no mínimo 5 caracteres e no máximo 20');
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
        const dataLink = _data.link;
        const dataDate = _data.date;
        const dataTitle = _data.title;
        const dataState = _data.state;

        try {
            this.validateLink(dataLink);
            this.validateDate(dataDate);
            this.validateTitle(dataTitle);
            this.validateState(dataState);
        } catch(err) {
            console.log("Error: ", err.message);
        }
    }
}
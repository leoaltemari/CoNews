'uses struct'
const Validator = require('../classes/validateHelp');
const validateHelp = new Validator();

exports.post = (req, res, next) => {
    validateHelp.validateData(req.body);
    
    res.status(200).send(validateHelp.getErrors());
};

exports.get = (req, res,  next) => {
    
};

'uses struct'
const Validator = require('../classes/validateNotice');
const validateNotice = new Validator();

exports.post = (req, res, next) => {
    validateNotice.validateData(req.body);

    res.send(validateNotice.getErrors());
};

exports.get = (req, res,  next) => {
    
};

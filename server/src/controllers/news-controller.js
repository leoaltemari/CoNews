'uses struct'
const Validator = require('../classes/validateNews');
const validateNews = new Validator();

exports.post = (req, res, next) => {
    validateNews.validateData(req.body);

    

    res.send(validateNews.getErrors());
};

exports.get = (req, res,  next) => {
    
};

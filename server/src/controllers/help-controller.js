'uses struct'
const Validator = require('../classes/validateHelp');
const validateHelp = new Validator();
const PostHelp = require('../models/Help');

exports.post = async (req, res, next) => {
    validateHelp.validateData(req.body);
    const post = new PostHelp({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        state: req.body.state
    });

    try {
        const saved = await post.save();
        res.status(200).json(saved);
    } catch(err) {
        res.status(400).json( {message: err });
    }
    
};

exports.get = async (req, res,  next) => {
    // todo: implement the get accordding to the database
};

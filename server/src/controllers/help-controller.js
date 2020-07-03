'uses struct'
const Validator = require('../classes/validateHelp');
const validateHelp = new Validator();
const PostHelp = require('../models/Help');

exports.post = async (req, res, next) => {
    // Validacao de dados
    try {
        validateHelp.validateData(req.body);
    } catch(err) {
        res.status(400).json( {message: err });
    }

    // Crianddo objeto de acordo com o modelo passado(PostHelp)
    const post = new PostHelp({
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        state: req.body.state
    });

    // Salvando no Banco de Dados
    try {
        const saved = await post.save();
        res.status(200).json(saved);
    } catch(err) {
        res.status(400).json( {message: err });
    }
    
};

exports.get = async (req, res,  next) => {
    try {
        const allHelpPosts = await PostHelp.find();
        res.status(200).json(allHelpPosts);
    } catch(err) {
        res.status(400).json( {message: err });
    }
};

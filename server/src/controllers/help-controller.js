'uses struct'
const Validator = require('../classes/validateHelp');
const validateHelp = new Validator();
const PostHelp = require('../models/Help');

exports.post = async (req, res, next) => {
    // Validacao de dados
    try {
        validateHelp.validateData(req.body);

        // Crianddo objeto de acordo com o modelo passado(PostHelp)
        const post = new PostHelp({
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            state: req.body.state
        });

        // Salvando no Banco de Dados
        if(validateHelp.getErrors().length === 0) {
            const saved = await post.save();
        }
        res.status(200).json(validateHelp.getErrors());
    } catch(err) {
        res.status(400).json({ message: err, errors: validateHelp.getErrors() });
    }
};

// Get all 'help' in the collection
exports.get = async (req, res,  next) => {
    try {
        const helpPostsFinded = await PostHelp.find();

        // Se nao encontrar nenhum item no banco
        if(helpPostsFinded.length === 0) {
            res.status(204).json({ message: 'Nenhum item foi encontrado'});
        } else {
            res.status(200).json(helpPostsFinded);
        }
    } catch(err) {
        res.status(400).json( {message: err });
    }
};

exports.delete = async (req, res, next) => {
    if(req.params.state) {
        const state = req.params.state;
        
        const query = { state: state };

        try {
            const helpPostsDeleted = await PostHelp.deleteOne(query)

            if(helpPostsDeleted.length === 0) {
                res.status(204).json({ message: 'Nenhum item foi encontrado'});
            } else {
                res.status(200).json({ message: "Item deleted with success"});
            }
        } catch(err) {
            res.status(400).json({ messaage: err });
        }
    }
};

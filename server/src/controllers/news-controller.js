'uses struct'
const Validator = require('../classes/validateNews');
const validateNews = new Validator();
const PostNews = require('../models/News')

exports.post = async (req, res, next) => {
    // Validacao de dados na requisicao
    try { 
        validateNews.validateData(req.body);

        // Criando objeto pelo modelo(PostNews)
        const post = new PostNews({
            link: req.body.link,
            date: req.body.date,
            title: req.body.title,
            state: req.body.state
        });

        // Salvando no banco
        const saved = await post.save();
        res.status(200).json(saved);

    } catch(err) {
        res.status(400).json({ message: err, errors: validateNews.getErrors() });
    }
};

exports.get = (req, res,  next) => {
    
};

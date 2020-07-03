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

exports.get = async (req, res,  next) => {
    const state = req.params.state;
    const query = { state: state};
    try {
        const newsPostsFinded = await PostNews.find(query);

        // Se nao encontrar nenhum item no banco
        if(newsPostsFinded.length === 0) {
            res.status(200).json({ message: 'Nenhum item foi encontrado'});
        } else {
            res.status(200).json(newsPostsFinded);
        }
    } catch(err) {
        res.status(400).json( {message: err });
    }
};

exports.delete = async(req, res, next) => {
    const link = req.params.link;
    const query = { link: link };
    try {
        const newsPostsDeleted = await PostNews.deleteMany(query);
        
        if(newsPostsDeleted.length === 0) {
            res.status(204).json({ message: 'Nenhum item foi encontrado'});
        } else {
            res.status(200).json({ message: "Item deleted with success"});
        }  
    } catch(err) {
        res.status(400).json({ message: err });
    }
};
'uses struct'
const Validator = require('../classes/validateNews');
const validateNews = new Validator();
const PostNews = require('../models/News');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + Date.now() + path.extname(file.originalname));
    }
})
const upload = multer({ storage });
exports.uploadImage = upload.single('file');

// Controllers routes
exports.post = async (req, res, next) => {
    // Validacao de dados na requisicao
    
    try { 
        validateNews.validateData(req.body);

        // Testa entrada de imagens
        if(req.file == undefined) {
            validateNews.errors.push('Imagem nao selecionada');
        }

        if(validateNews.getErrors().length === 0) {
            // Criando objeto pelo modelo(PostNews)
            let imageId = req.file.filename;
            const post = new PostNews({
                link: req.body.link,
                image: { id: imageId, url: `server/src/public/uploads/${imageId}`} ,
                date: req.body.date,
                title: req.body.title,
                state: req.body.state
            });
            
            // Salvando no banco
            const saved = await post.save();
        }

        res.status(200).json(validateNews.getErrors());

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

exports.getAll = async (req, res,  next) => {
    try {
        const newsPostsFinded = await PostNews.find();

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

exports.delete = async (req, res, next) => {
    const title = req.params.title;
    
    const query = { title: title };
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
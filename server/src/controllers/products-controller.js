'uses struct'

exports.post = (req, res, next) => {
    res.status(200).send(req.body);
};
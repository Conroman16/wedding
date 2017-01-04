var router = require('express').Router();

module.exports = () => {

    router.get('/', (req, res) => {
		res.render('index/index');
    });

    return router;
};

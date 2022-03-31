const express = require('express');
// const req = require('express/lib/request');
const News = require('../models/news');
const router = express.Router();




router.all('*', (req, res, next) => {
    if (!req.session.admin) {
        res.redirect('login');

        return;
    }

    next();
});
/* GET home page. */
router.get('/', (req, res) => {
    News.find({}, (err, data) => {
        console.log(data);
        res.render('admin/index', {
            title: 'Admin',
            data
        });
    })

    // const newsData = new News({
    //     title: 'Test title',
    //     description: 'Test description'
    // })
    // newsData.save((err) => {
    //     console.log('Test err:', err);
    // })
    // console.log('Flag:', req.session.admin);

});

router.get('/news/add', (req, res) => {
    res.render('admin/news-form', {
        title: 'Add news',
        body: {},
        errors: {}
    });

});

router.post('/news/add', (req, res) => {
    const body = req.body;
    console.log(body);
    const newsData = new News(body);
    const errors = newsData.validateSync();

    // console.log(erros);

    newsData.save((err) => {
        console.log('Test err:', err);
        if (err) {
            res.render('admin/news-form', {
                title: 'Add news',
                body,
                errors
            });
            return;
        }
        res.redirect('/admin')
    });

    // console.log('Flag:', req.session.admin);



    // res.render('admin/news-form', {
    //     title: 'Add news',
    //     body,
    //     errors
    // });

});

router.get('/news/delete/:id', (req, res) => {
    News.findByIdAndDelete(req.params.id, (err) => {
        res.redirect('/admin')
    })

});


module.exports = router;
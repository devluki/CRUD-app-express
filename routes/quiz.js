const express = require('express');
const router = express.Router();
// Model import capital letter!
const Quiz = require('../models/quiz')

/* GET home page. */
router.get('/', (req, res) => {
    // Check if vote is already casted
    const show = !req.session.vote;

    Quiz.find({}, (err, data) => {
        // console.log(data);
        let sum = 0;
        data.forEach((item) => {
            sum += item.vote;
        })
        res.render('quiz', {
            title: 'Quiz',
            data,
            show,
            sum
            // quiz.pug conditional statement
        });
    })

});



router.post('/', (req, res) => {
    const id = req.body.quiz;


    Quiz.findOne({
        _id: id
    }, (err, data) => {
        // console.log(data);
        data.vote = data.vote + 1;
        data.save(() => {
            // Store access session data ===> express-session module
            req.session.vote = 1;
            res.redirect('/quiz')
        });
        // console.log(data);


    });

});


module.exports = router;
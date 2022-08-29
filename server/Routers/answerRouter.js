const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.post('/', async (req, res) => {
    const question = req.body.question;
    try {
        if (question === 'hi') {
            return (
                res.status(200).json({
                    status: true,
                    msg: "Answer finded...",
                    data: 'Hi, User'
                })
            );
        } else if (question === 'hello') {
            return (
                res.status(200).json({
                    status: true,
                    msg: "Answer finded...",
                    data: 'Hello, User'
                })
            );
        } else {
            return (
                res.status(200).json({
                    status: true,
                    msg: "Answer finded...",
                    data: 'Try again'
                })
            );
        }
    } catch (error) {
        console.log(error);
        return (
            res.status(401).json({
                status: false,
                msg: "Something went wrong, please try again later...",
                data: error
            })
        );
    }
})

module.exports = router;
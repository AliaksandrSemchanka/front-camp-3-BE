const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Received blogs');
    res.end();
});

router.get('/:id', (req, res) => {
    console.log('Received a blog on id');
    res.end();
});

router.post('/', (req, res) => {
    console.log('Blog added');
    res.end();
});

router.put('/:id', (req, res) => {
    console.log('Blog changed');
    res.end();

});

router.delete('/:id', (req, res) => {
    console.log('Blog deleted');
    res.end();
});

module.exports = router;



const { Router } = require('express')
const Course = require('../models/course')
const Cart = require('../models/cart')
const router = Router()

router.post('/add', async (req, res) => {
    try {
				const course = await Course.getById(req.body.id);
				await Cart.add(course);
				res.redirect('/cart');
    } catch (error) {
				console.error(error);
				res.status(500).send('Server error');
    }
});

router.get('/', async (req, res) => {
    try {
        const cart = await Cart.fetch();
        res.render('cart', {
            title: 'Cart',
            courses: cart.courses,
            price: cart.price,
            isCart: true
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

module.exports = router
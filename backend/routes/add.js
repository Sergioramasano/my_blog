const { Router } = require('express')
const router = Router()

const Course = require('../models/course')

router.get('/', (req, res) => {
  res.render('add', {
    title: 'Add course',
    isAdd: true
  })
});

router.post('/', async (req, res) => {
	const course = req.body

	if (course.title && course.price) {
		const newCourse = new Course(course.title, course.price, course.img)
		
		await newCourse.save()
		res.redirect('/courses')
	} else {
		res.redirect('/add')
	}
});


module.exports = router
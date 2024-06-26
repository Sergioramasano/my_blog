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
		// const newCourse = new Course(course.title, course.price, course.img)
		const newCourse = new Course({
			title: course.title,
			price: course.price,
			img: course.img
		})
		try {
			await newCourse.save()
			res.redirect('/courses')
		} catch (error) {
			console.log('AddCourse error:', error);
		}
		
	} else {
		res.redirect('/add')
	}
});


module.exports = router
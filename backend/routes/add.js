const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.render('add', {
    title: 'Add course',
    isAdd: true
  })
});

router.post('/', (req, res) => {
	const course = req.body
	console.log(course);
	if (course.title && course.price) {
		// courses.push(course)
		res.redirect('/courses')
	} else {
		res.redirect('/add')
	}
});


module.exports = router
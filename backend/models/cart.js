class Cart {

	static async add(course) {
		const courses = await Cart.fetch()
		const idx = courses.findIndex(c => c.id === course.id)
		if (idx >= 0) {
			courses[idx].count++
		} else {
			courses.push(new CartItem(course.id, 1))
		}				
		return new Promise((resolve, reject) => {
			fs.writeFile(path.join(__dirname, '..', 'data', 'cart.json'), JSON.stringify(courses), err => {
				if (err) {
					reject(err)
				} else {
					resolve()
				}
			})
		})
	}

	static async fetch() {
		return new Promise((resolve, reject) => {
			fs.readFile(path.join(__dirname, '..', 'data', 'cart.json'), 'utf-8', (err, content) => {
				if (err) {
					reject(err)
				} else {
					resolve(JSON.parse(content))
				}
			})
		})
	}
}
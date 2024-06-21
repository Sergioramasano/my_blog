const path = require('path')
const fs = require('fs')

const p = path.join(path.dirname(require.main.filename), 'data', 'cart.json');

class Cart {

	static async add(course) {
		const cart = await Cart.fetch()

		const idx = cart?.courses?.length ? cart?.courses?.findIndex(c => c.id === course.id) : false
		const candidate = idx ? cart.courses[idx] : false
		
		if (candidate) {
			candidate.count++
			cart.courses[idx] = candidate
		} else {
			course.count = 1
			cart.courses.push(course)
		}		

		cart.price += +course.price

		return new Promise((resolve, reject) => {
			fs.writeFile(p, JSON.stringify(cart), err => {
				if (err) {
					console.log('Error in adding to cart:', err);
					reject(err)
				} else {
					resolve()
				}
			})
		})
	}

	static async fetch() {
		return new Promise((resolve, reject) => {
			fs.readFile(p, 'utf-8', (err, content) => {
				if (err) {
					reject(err)
				} else {
					const data = content ? JSON.parse(content) : {};
					resolve(data);
				}
			})
		})
	}

	static async remove(id) {
		const cart = await Cart.fetch()
		const idx = cart.courses?.findIndex(c => c.id === id)
		const course = cart.courses[idx]
		cart.courses = cart.courses.filter(c => c.id !== id)
		cart.price -= course.price * course.count
		return new Promise((resolve, reject) => {
			fs.writeFile(p, JSON.stringify(cart), err => {
				if (err) {
					console.log('Error in removing from cart:', err);
					reject(err)
				} else {
					resolve(cart)
				}
			})
		})
	}
}

module.exports = Cart
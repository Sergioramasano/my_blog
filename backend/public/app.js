document.querySelectorAll('.price').forEach(node => {
	node.textContent = new Intl.NumberFormat('en-US', {
		currency: 'USD',
		style: 'currency'
	}).format(node.textContent)
})


const $cart = document.querySelector('#cart');
if ($cart) {
    $cart.addEventListener('click', event => {
        if (event.target.classList.contains('js-remove')) {
            const id = event.target.dataset.id;
            const csrf = event.target.dataset.csrf;

            fetch(`/cart/remove/${id}`, {
                method: 'DELETE',
                headers: {
                    'X-XSRF-TOKEN': csrf,
                    'Content-Type': 'application/json'
                }
            })
							.then(res => res.json())
						.then(cart => {
							if (!cart.courses.length) {
								$cart.innerHTML = '<p>Cart is empty</p>';
							}
						})
            .catch(err => {
                console.error('Error removing item from cart:', err);
            });
        }
    });
}
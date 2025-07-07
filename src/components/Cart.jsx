import { useEffect } from 'react';
import './Cart.css';

function Cart({ closeCart }) {
	const handleClick = function () {
		closeCart();
	};

	useEffect(() => {
		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, []);

	return (
		<div className="cart" onClick={(event) => event.stopPropagation()}>
			<div className="cart__heading">Cart</div>
			<div className="cart__msg">Your cart is empty.</div>
		</div>
	);
}

export default Cart;

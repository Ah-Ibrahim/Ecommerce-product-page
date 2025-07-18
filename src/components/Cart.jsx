import { useContext, useEffect } from 'react';
import './Cart.css';
import Button from './Button';
import { ProductsContext } from '../ProductsContext';
import { motion, AnimatePresence } from 'motion/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Cart({ selectedProducts, isEmpty, closeCart }) {
	const { updateProductQuantity } = useContext(ProductsContext);

	const handleClick = function () {
		closeCart();
	};

	useEffect(() => {
		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, []);

	let cartContent = <div className="cart__msg">Your cart is empty.</div>;

	const handleRemoveClick = function (item) {
		updateProductQuantity(item.id, 0);
	};

	const items = selectedProducts.map((item) => {
		const itemFinalPrice = (item.originalPrice * (item.discount / 100)).toFixed(2);
		const itemTotalPrice = (itemFinalPrice * item.quantity).toFixed(2);

		return (
			<div className="cart-item" key={item.id}>
				<div className="cart-item__img">
					<LazyLoadImage src={item.images[0].thumbnail} alt="" />
				</div>
				<div className="cart-item__details">
					<div className="product-name">{item.name}</div>
					<div className="product-prices">
						<div className="product-final-price">${itemFinalPrice}</div>
						<div className="product-quantity">x {item.quantity}</div>
						<div className="product-total-price">${itemTotalPrice}</div>
					</div>
				</div>
				<button className="btn btn--icon btn--cart-remove" onClick={() => handleRemoveClick(item)}>
					<svg
						width="14"
						height="16"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink">
						<defs>
							<path
								d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
								id="a"
							/>
						</defs>
						<use fillRule="nonzero" xlinkHref="#a" />
					</svg>
				</button>
			</div>
		);
	});

	if (!isEmpty)
		cartContent = (
			<div className="cart__body">
				<AnimatePresence>{items}</AnimatePresence>
				<Button>Checkout</Button>
			</div>
		);

	return (
		<div className="cart" onClick={(event) => event.stopPropagation()}>
			<div className="cart__heading">Cart</div>
			{cartContent}
		</div>
	);
}

export default Cart;

import './ProductDetails.css';
import Button from './Button';
import { useState } from 'react';

function ProductDetails({ product, onUpdateProduct }) {
	const [count, setCount] = useState(0);

	const companyName = product.company ?? 'Unknown';
	const productName = product.name ?? 'Unknown';
	const productDesc = product.description ?? 'Unavailable description';
	const productQuantity = product.quantity ?? 0;
	const productOriginalPrice = product.originalPrice ?? 0;
	const productDiscount = product.discount ?? 0;

	const productFinalPrice =
		productDiscount > 0 ? (productOriginalPrice * (productDiscount / 100)).toFixed(2) : productOriginalPrice;

	const handleCountChange = function (increase) {
		const change = increase ? 1 : -1;

		setCount(Math.max(0, count + change));
	};

	const handleCartClick = function () {
		onUpdateProduct(productQuantity + count);
	};

	return (
		<div className="product-section__details">
			<div className="company">{companyName}</div>
			<div className="heading">{productName}</div>
			<div className="desc">{productDesc}</div>
			<div className="prices-container">
				<div className="prices-container__final">${productFinalPrice}</div>
				{productDiscount > 0 && (
					<>
						<div className="prices-container__discount">{productDiscount}%</div>
						<div className="prices-container__original">${productOriginalPrice.toFixed(2)}</div>
					</>
				)}
			</div>
			<div className="actions-container">
				<div className="btns-container">
					<button
						className="btn btn--icon"
						onClick={() => handleCountChange(false)}
						aria-label="Decrease Button">
						<svg
							width="12"
							height="4"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink">
							<defs>
								<path
									d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
									id="a"
								/>
							</defs>
							<use fillRule="nonzero" xlinkHref="#a" />
						</svg>
					</button>
					<div className="product-quantity">{count}</div>
					<button
						className="btn btn--icon"
						onClick={() => handleCountChange(true)}
						aria-label="Increase Button">
						<svg
							width="12"
							height="12"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink">
							<defs>
								<path
									d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
									id="b"
								/>
							</defs>
							<use fillRule="nonzero" xlinkHref="#b" />
						</svg>
					</button>
				</div>
				<Button onClick={handleCartClick}>
					<svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
							fillRule="nonzero"
						/>
					</svg>
					<span>Add to cart</span>
				</Button>
			</div>
		</div>
	);
}

export default ProductDetails;

import './ProductDetails.css';
import Button from './Button';
import { useState } from 'react';
import { motion } from 'motion/react';

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
			<div className="heading">
				{'Fall'}{' '}
				<span>
					Limited
					<svg viewBox="0 0 44 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-underline">
						<motion.path
							d="M11.1261 1.28853C10.6421 1.28853 10.1581 1.28853 8.33574 1.44986C6.51342 1.61119 3.36744 1.93386 1.76023 2.14041C0.153013 2.34696 0.179902 2.42763 7.34616 2.11963C14.5124 1.81163 28.8172 1.11253 36.1998 0.792714C43.5824 0.472901 43.6093 0.553567 43.0854 0.608567C42.5614 0.663566 41.4859 0.690455 37.9337 1.16142C34.3816 1.63238 28.3854 2.54659 25.0141 3.09822C21.6428 3.64985 21.0782 3.81118 20.6797 3.89429C19.557 4.12848 18.8138 4.30332 18.6504 4.3571C18.5924 4.37619 18.7022 4.51843 19.994 4.52006C21.2859 4.52169 23.7866 4.41414 24.9672 4.35873C26.1479 4.30332 25.9328 4.30332 25.7682 4.31677C25.0851 4.37256 24.005 4.57384 22.8634 5.02117C22.2083 5.47013 21.9907 5.76917 21.9496 5.87794C21.9622 5.90605 22.0429 5.87917 22.126 5.76998"
							stroke="#FF7D1A"
							strokeLinecap="round"
							initial={{ pathLength: 0, opacity: 0 }}
							animate={{ pathLength: 1, opacity: 1 }}
							transition={{
								delay: 1.5,
								duration: 0.55,
							}}
						/>
					</svg>
				</span>{' '}
				{'Edition Sneakers'}
			</div>
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
					<motion.button
						className="btn btn--icon"
						onClick={() => handleCountChange(false)}
						aria-label="Decrease Button"
						whileHover={{
							scale: 1.3,
							transition: {
								duration: 0.2,
								ease: 'backInOut',
							},
						}}
						whileTap={{
							scale: 0.9,
						}}>
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
					</motion.button>
					<div className="product-quantity">{count}</div>
					<motion.button
						className="btn btn--icon"
						onClick={() => handleCountChange(true)}
						aria-label="Increase Button"
						whileTap={{
							scale: 0.9,
						}}
						whileHover={{
							scale: 1.3,
							transition: {
								duration: 0.2,
								ease: 'backInOut',
							},
						}}>
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
					</motion.button>
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

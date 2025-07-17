import { useState } from 'react';
import './ProductGallery.css';

function ProductGallery({ productImages }) {
	const [selectedImg, setSelectedImg] = useState(productImages[0]);

	const handleBtnClick = function (image) {
		setSelectedImg(image);
	};

	const figures = productImages.map((image, index) => (
		<button
			key={index}
			className={`btn btn--gallery  ${selectedImg === image ? 'btn--gallery--selected' : ''} `}
			onClick={() => handleBtnClick(image)}>
			<img src={image.thumbnail} alt={`Product Image ${index + 1}`} />
		</button>
	));

	return (
		<div className="gallery-container">
			<figure className="gallery-container__main-img">
				<img src={selectedImg.desktop} alt="Product Image" />
			</figure>
			<div className="gallery-container__sec-imgs">{figures}</div>
		</div>
	);
}

export default ProductGallery;

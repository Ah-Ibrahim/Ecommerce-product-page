import { useState } from 'react';
import './ProductGallery.css';
import Lightbox from './Lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function ProductGallery({ productImages }) {
	const [selectedImg, setSelectedImg] = useState(productImages[0]);
	const [showLightBoxDesktop, setShowLightBoxDesktop] = useState(true);

	const handleBtnClick = function (image) {
		setSelectedImg(image);
	};

	const handleFigClick = function () {
		setShowLightBoxDesktop(!showLightBoxDesktop);
	};

	const figures = productImages.map((image, index) => (
		<button
			key={index}
			className={`btn btn--gallery  ${selectedImg === image ? 'btn--gallery--selected' : ''} `}
			onClick={() => handleBtnClick(image)}>
			<LazyLoadImage src={image.thumbnail} alt={`Product Image ${index + 1}`} />
		</button>
	));

	return (
		<div className="gallery-container">
			<figure className="gallery-container__main-img">
				<LazyLoadImage src={selectedImg.desktop} alt="Product Image" />
			</figure>
			<div className="gallery-container__sec-imgs">{figures}</div>
			{showLightBoxDesktop && <Lightbox isMobile={false} />}
		</div>
	);
}

export default ProductGallery;

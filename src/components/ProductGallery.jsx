import { useState } from 'react';
import './ProductGallery.css';
import Lightbox from './Lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function ProductGallery({ productImages }) {
	const [selectedImgIndex, setSelectedImgIndex] = useState(0);
	const [showLightBoxDesktop, setShowLightBoxDesktop] = useState(false);

	const handleBtnSecClick = function (index) {
		setSelectedImgIndex(index);
	};

	const handleBtnMainClick = function () {
		setShowLightBoxDesktop(!showLightBoxDesktop);
	};

	const closeLightBox = function () {
		setShowLightBoxDesktop(false);
	};

	const figures = productImages.map((image, index) => (
		<button
			key={index}
			className={`btn btn--gallery btn--gallery-sec  ${
				selectedImgIndex === index ? 'btn--gallery--selected' : ''
			} `}
			onClick={() => handleBtnSecClick(index)}>
			<LazyLoadImage src={image.thumbnail} alt={`Product Image ${index + 1}`} />
		</button>
	));

	return (
		<div className="gallery-container">
			<button className="btn btn--gallery btn--gallery-main" title="Open Lightbox" onClick={handleBtnMainClick}>
				<LazyLoadImage src={productImages[selectedImgIndex].desktop} alt="Product Image" />
			</button>
			<div className="gallery-container__sec-imgs">{figures}</div>
			{showLightBoxDesktop && <Lightbox isMobile={false} productImages={productImages} onClose={closeLightBox} />}
		</div>
	);
}

export default ProductGallery;

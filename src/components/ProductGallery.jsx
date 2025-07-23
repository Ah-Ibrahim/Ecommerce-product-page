import { useEffect, useState } from 'react';
import './ProductGallery.css';
import Lightbox from './Lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { AnimatePresence } from 'motion/react';

function ProductGallery({ productImages }) {
	const [selectedImgIndex, setSelectedImgIndex] = useState(0);
	const [isShownLightboxDesktop, setIsShownLightboxDesktop] = useState(false);

	const handleBtnSecClick = function (index) {
		setSelectedImgIndex(index);
	};

	const handleBtnMainClick = function () {
		setIsShownLightboxDesktop(!isShownLightboxDesktop);
	};

	const closeLightBox = function () {
		setIsShownLightboxDesktop(false);
	};

	const handleKeyDown = function (e) {
		if (isShownLightboxDesktop) return;

		if (e.key === 'ArrowLeft') {
			setSelectedImgIndex((selectedImgIndex - 1 + productImages.length) % productImages.length);
		} else if (e.key === 'ArrowRight') {
			setSelectedImgIndex((selectedImgIndex + 1) % productImages.length);
		}
	};

	// selectedImgIndex and showLightBoxDesktop are used to reset closure
	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);

		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [selectedImgIndex, isShownLightboxDesktop]);

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
			<AnimatePresence>
				{isShownLightboxDesktop && (
					<Lightbox
						isMobile={false}
						productImages={productImages}
						onClose={closeLightBox}
						initialSelectedIndex={selectedImgIndex}
					/>
				)}
			</AnimatePresence>
		</div>
	);
}

export default ProductGallery;

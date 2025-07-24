import { useEffect, useState } from 'react';
import './ProductGallery.css';
import Lightbox from './Lightbox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { AnimatePresence } from 'motion/react';
import { useMediaQuery } from '../hooks/useMediaQuery';

function ProductGallery({ productImages }) {
	const [selectedImgIndex, setSelectedImgIndex] = useState(0);
	const [isShownLightboxDesktop, setIsShownLightboxDesktop] = useState(false);
	const isDesktop = useMediaQuery('(width >=850px)');

	// selectedImgIndex and showLightBoxDesktop are used to reset closure
	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);

		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [selectedImgIndex, isShownLightboxDesktop]);

	function handleBtnSecClick(index) {
		setSelectedImgIndex(index);
	}

	function handleBtnMainClick() {
		setIsShownLightboxDesktop(!isShownLightboxDesktop);
	}

	function closeLightBox() {
		setIsShownLightboxDesktop(false);
	}

	function handleKeyDown(e) {
		if (isShownLightboxDesktop) return;

		if (e.key === 'ArrowLeft') {
			setSelectedImgIndex((selectedImgIndex - 1 + productImages.length) % productImages.length);
		} else if (e.key === 'ArrowRight') {
			setSelectedImgIndex((selectedImgIndex + 1) % productImages.length);
		}
	}

	function handleBtnSwiper(increment) {
		const change = increment ? 1 : -1;

		setSelectedImgIndex((selectedImgIndex + change + productImages.length) % productImages.length);
	}

	if (!isDesktop) {
		return (
			<div className="gallery-showcase">
				<LazyLoadImage src={productImages[selectedImgIndex].desktop} alt="Product Image" />
				<button className="btn btn--icon btn--swiper btn--prev" onClick={() => handleBtnSwiper(false)}>
					<svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
						<path d="M11 1 3 9l8 8" strokeWidth="3" fill="none" fillRule="evenodd" />
					</svg>
				</button>
				<button className="btn btn--icon btn--swiper btn--next" onClick={() => handleBtnSwiper(true)}>
					<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
						<path d="m2 1 8 8-8 8" strokeWidth="3" fill="none" fillRule="evenodd" />
					</svg>
				</button>
			</div>
		);
	}

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

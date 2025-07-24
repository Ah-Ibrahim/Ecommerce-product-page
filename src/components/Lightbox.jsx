import './Lightbox.css';
import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'motion/react';

function Lightbox({ isMobile, initialSelectedIndex, productImages, onClose }) {
	const [selectedImgIndex, setSelectedImgIndex] = useState(initialSelectedIndex);

	const handleKeyDown = function (e) {
		if (e.key === 'ArrowLeft') {
			setSelectedImgIndex((selectedImgIndex - 1 + productImages.length) % productImages.length);
		} else if (e.key === 'ArrowRight') {
			setSelectedImgIndex((selectedImgIndex + 1) % productImages.length);
		} else if (e.key === 'Escape') {
			onClose();
		}
	};

	const handleBtnSecClick = function (index) {
		setSelectedImgIndex(index);
	};

	const handleCloseClick = function (e) {
		e.stopPropagation();
		onClose();
	};

	const handleOverlayClick = function () {
		onClose();
	};

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);

		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [selectedImgIndex]);

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
		<motion.div
			className="overlay"
			onClick={handleOverlayClick}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { delay: 0.4 } }}
			transition={{ duration: 0.45 }}>
			<motion.div
				className="container"
				initial={{ opacity: 0, y: 150 }}
				animate={{
					opacity: 1,
					y: 0,
					transition: {
						duration: 0.35,
						type: 'spring',
						stiffness: 110,
					},
				}}
				exit={{
					opacity: 0,
					y: 150,
					transition: {
						duration: 0.35,
						ease: 'backIn',
					},
				}}>
				<button className="btn btn--icon btn--close" onClick={handleCloseClick}>
					<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
						<path
							d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
							fillRule="evenodd"
						/>
					</svg>
				</button>
				<div className="gallery-container" onClick={(e) => e.stopPropagation()}>
					<button className="btn btn--gallery btn--gallery-main">
						<LazyLoadImage src={productImages[selectedImgIndex].desktop} alt="Product Image" />
					</button>
					<div className="gallery-container__sec-imgs">{figures}</div>
				</div>
			</motion.div>
		</motion.div>
	);
}

export default Lightbox;

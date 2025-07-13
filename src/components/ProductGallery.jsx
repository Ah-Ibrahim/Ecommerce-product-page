import './ProductGallery.css';

function ProductGallery() {
	return (
		<div className="gallery-container">
			<figure className="gallery-container__main-img">
				<img src={null} alt="" />
			</figure>
			<div className="gallery-container__sec-imgs">
				<figure className="gallery-container__sec-img"></figure>
				<figure className="gallery-container__sec-img"></figure>
				<figure className="gallery-container__sec-img"></figure>
				<figure className="gallery-container__sec-img"></figure>
			</div>
		</div>
	);
}

export default ProductGallery;

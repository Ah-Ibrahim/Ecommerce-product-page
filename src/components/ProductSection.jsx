import ProductDetails from './ProductDetails';
import ProductGallery from './ProductGallery';
import './ProductSection.css';

function ProductSection(props) {
	return (
		<section className="product-section">
			<ProductGallery productImages={props.product.images} />
			<ProductDetails {...props} />
		</section>
	);
}

export default ProductSection;

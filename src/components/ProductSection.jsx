import ProductDetails from './ProductDetails';
import ProductGallery from './ProductGallery';
import './ProductSection.css';
import { motion } from 'motion/react';

function ProductSection(props) {
	return (
		<motion.section
			className="product-section"
			initial={{ opacity: 0, y: 150 }}
			animate={{
				opacity: 1,
				y: 0,
			}}
			transition={{
				duration: 0.35,
				type: 'spring',
				stiffness: 110,
			}}>
			<ProductGallery productImages={props.product.images} />
			<ProductDetails {...props} />
		</motion.section>
	);
}

export default ProductSection;

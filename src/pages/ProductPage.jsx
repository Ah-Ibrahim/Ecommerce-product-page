import NavBar from '../components/NavBar';
import ProductSection from '../components/ProductSection';
import './ProductPage.css';
import '../App.css';

function ProductPage() {
	return (
		<div className="page">
			<NavBar />
			<ProductSection />
		</div>
	);
}

export default ProductPage;

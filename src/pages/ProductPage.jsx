import NavBar from '../components/NavBar';
import ProductSection from '../components/ProductSection';
import './ProductPage.css';
import '../App.css';

function ProductPage(props) {
	return (
		<div className="page">
			<NavBar />
			<ProductSection {...props} />
		</div>
	);
}

export default ProductPage;

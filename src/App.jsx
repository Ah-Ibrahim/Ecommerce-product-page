import './App.css';
import ProductPage from './pages/ProductPage';
import FontPreloader from './utils/FontPreloader';
import ProductsData from './data.json';
import { useEffect, useState } from 'react';
import { ProductsContext } from './ProductsContext';

function InitializeProducts() {
	const quantity = JSON.parse(localStorage.getItem('productsQuantity')) ?? {};

	const products = ProductsData.map((item, index) => {
		item.id = index;
		item.quantity = quantity[item.id] ?? 0;

		return item;
	});

	return products;
}

function App() {
	const [products, setProducts] = useState(InitializeProducts);

	useEffect(() => {
		const quantity = {};

		products.forEach((item) => {
			if (item.quantity > 0) quantity[item.id] = item.quantity;
		});

		localStorage.setItem('productsQuantity', JSON.stringify(quantity));
	}, [products]);

	const updateProductQuantity = function (itemId, quantity) {
		setProducts(
			products.map((item) => {
				if (item.id === itemId) {
					item.quantity = Math.max(0, quantity);
				}

				return item;
			})
		);
	};

	// Future ready for routing
	return (
		<>
			<FontPreloader />
			<ProductsContext.Provider value={{ products, updateProductQuantity }}>
				<ProductPage
					product={products[0]}
					onUpdateProduct={(quantity) => updateProductQuantity(products[0].id, quantity)}
				/>
			</ProductsContext.Provider>
		</>
	);
}

export default App;

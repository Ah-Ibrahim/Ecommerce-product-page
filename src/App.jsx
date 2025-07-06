import './App.css';
import ProductPage from './pages/ProductPage';
import FontPreloader from './utils/FontPreloader';

function App() {
	// Future ready for routing
	return (
		<>
			<FontPreloader />
			<ProductPage />
		</>
	);
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import Product from './Components/Product/Product';

function App() {
  const [products, setProducts] = useState([]);

  // Fetch Data From Server:
  useEffect(() => {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_type=blush')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <div className="App">
      <div className="products">
        {

          products.map(product => <Product key={product.id} product={product}></Product>)
        }

      </div>
    </div>
  );
}

export default App;

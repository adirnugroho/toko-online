import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h1>Daftar Produk</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="card" key={product._id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Rp {product.price.toLocaleString('id-ID')}</p>
            <Link to={`/products/${product._id}`}>Lihat Detail</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
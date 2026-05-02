import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <p className="container">Loading...</p>;

  return (
    <div className="container detail-page">
      <img src={product.image} alt={product.name} className="detail-image" />
      <div>
        <h1>{product.name}</h1>
        <p><strong>Harga:</strong> Rp {product.price.toLocaleString('id-ID')}</p>
        <p><strong>Deskripsi:</strong> {product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
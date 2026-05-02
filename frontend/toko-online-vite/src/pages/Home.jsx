import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../assets/styles/home.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Timeless Elegance</h1>
          <p>Minimal fashion for modern lifestyle</p>
          <Link to="/products" className="btn-shop">Shop Now</Link>
        </div>
      </section>

      {/* REKOMENDASI PRODUK */}
      <section className="products">
        <h2>Rekomendasi Produk</h2>

        <div className="product-grid">
          {products.slice(0, 3).map((product) => (
            <Link
              to={`/products/${product._id}`}
              className="card"
              key={product._id}
            >
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Rp {product.price.toLocaleString("id-ID")}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* STYLE INSPIRATION */}
      <section className="style">
        <h2>Style Inspiration</h2>

        <div className="style-grid">
          <div>
            <h3>Casual Chic</h3>
            <p>Blouse putih + jeans untuk tampilan santai elegan</p>
          </div>

          <div>
            <h3>Office Elegance</h3>
            <p>Blazer + inner netral untuk tampilan profesional</p>
          </div>

          <div>
            <h3>Weekend Look</h3>
            <p>Dress pastel untuk tampilan feminin</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          Kami menghadirkan fashion modern dengan sentuhan elegan untuk wanita aktif dan percaya diri.
        </p>
      </section>

    </div>
  );
}

export default Home;
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  // ambil data user dari localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // fungsi logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload(); // refresh biar navbar update
  };

  return (
    <nav className="navbar">
      <div className="nav-left">Boutique</div>

      <div className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </div>

      <div className="nav-right">
        <span>🔍</span>

        {user ? (
          <span className="icon-btn" onClick={handleLogout}>
            👤 {user.name}
          </span>
        ) : (
          <Link to="/login" className="icon-btn">
            👤
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
import { Link } from "react-router";

function NavBar() {
  return (
    <div className="nav-cont">
      <Link to="/"> Homepage </Link>|<Link to="/products"> AllProduct </Link>|
      <Link to="/new-product"> CreateProduct </Link>|
    </div>
  );
}

export default NavBar;

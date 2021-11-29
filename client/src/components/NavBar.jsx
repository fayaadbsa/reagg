import { Link } from "react-router-dom";

function NavBar(props) {
  return (
      <nav style={{display:"flex", justifyContent:"space-between", width:"50%", margin:"auto"}}>
        <h3>
          <Link to="/">Home</Link>
        </h3>
        <h3>
          <Link to="/notes">Notes</Link>
        </h3>
        <h3>
          <Link to="/redux">Redux</Link>
        </h3>
        <h3>
          <Link to="/about">About</Link>
        </h3>
      </nav>
  );
}

export default NavBar;

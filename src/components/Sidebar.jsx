import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">My Analytics</h2>

      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/sales">Sales Dashboard</NavLink>
        <NavLink to="/quality">Quality Dashboard</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;

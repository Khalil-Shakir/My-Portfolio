import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { links } from "../../Database";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-menu">
        <ul className="nav-list grid">
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className="nav-item" key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active-nav" : "nav-link"
                  }
                >
                  {icon}
                  <h3 className="nav-name">{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
        <RiCloseLine className="nav-close" />
      </div>
      <div className="nav-toggle">
        <RiMenuLine />
      </div>
    </nav>
  );
}

export default Navbar;

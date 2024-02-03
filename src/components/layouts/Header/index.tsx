import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      HEADER
      <div>
        временные маршруты:
        <NavLink to="/" style={{ marginLeft: 20 }}>
          MAIN
        </NavLink>
        <NavLink to="/report" style={{ marginLeft: 20 }}>
          REPORT
        </NavLink>
        <NavLink to="/some-path-asda" style={{ marginLeft: 20 }}>
          not found
        </NavLink>
      </div>
    </header>
  );
}

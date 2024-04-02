import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-3 px-10 bg-gray-400">
      <div className="md:flex justify-between">
        <div>
            <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-[#23BE0A] text-white" : ""
          }
        >
          {" "}
          Home{" "}
        </NavLink>
        </div>

        <div>
        <ul>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "bg-[#23BE0A] text-white" : ""
          }
        >
          {" "}
          Log In{" "}
        </NavLink>

        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? "bg-[#23BE0A] text-white" : " "
          }
        >
          {" "}
          Register{" "}
        </NavLink>
      </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

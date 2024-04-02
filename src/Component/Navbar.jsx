import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authCustomContext } from "../utilitis/Provider";

const Navbar = () => {
  const {user, logOut} = useContext( authCustomContext )

  const handleSignOut = () => {
   logOut()
   .then((result) => {
    console.log(result.user)
  }).catch((error) => {
    console.error(error)
  });
  }


  return (
    <div className="py-3 px-10 bg-gray-400 md:grid grid-cols-2 ">
      <div className="md:flex justify-between">
        <div>
            <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-[#23BE0A] text-white" : " "
          }
        >
          {" "}
          Home{" "}
        </NavLink>
        </div>
        <div>
            <NavLink
          to="/order"
          className={({ isActive }) =>
            isActive ? "bg-[#23BE0A] text-white" : " "
          }
        >
          {" "}
          Order{" "}
        </NavLink>
        </div>
      </div>
      
      <div className="text-right">
        <ul>
            { user &&
              user ? <>
                <span> {user.email} </span>
                <Link to='/' > <button className="btn" onClick={ handleSignOut }> log Out </button> </Link>
              </> 
              : <> 
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
              </>
            }
        {/* <NavLink
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
        </NavLink> */}
      </ul>
        </div>
    </div>
  );
};

export default Navbar;

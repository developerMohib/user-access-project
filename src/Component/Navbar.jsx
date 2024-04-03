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
    <div className="py-3 px-10 bg-gray-400 md:grid grid-cols-2 items-center ">
      <div className="md:flex md:justify-between items-center">
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

        { user && <>
            <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "bg-[#23BE0A] text-white" : " "
          }
        >
          {" "}
          Profile{" "}
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "bg-[#23BE0A] text-white" : " "
          }
        >
          {" "}
          Dashboard{" "}
        </NavLink>
        </>}

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
            { 
              user ? <>
                {
                  // {user.email} ? ( <span> {user.email }</span>): (<span> {user.displayName} </span> )
                }
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
      </ul>
        </div>
    </div>
  );
};

export default Navbar;

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authCustomContext } from "../utilitis/Provider";

const LogIn = () => {
    const {logInUser,signInWithGoogle} = useContext(authCustomContext);
    const localNavigate = useNavigate();


    const handleLogIn = (e) => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        e.target.reset()
        localNavigate('/')
        console.log(email, password)

        // send email and password in database
        logInUser(email, password)
        .then((result) => {
            // Signed up 
            const user = result.user;
            console.log(user, 'user from a')
          })
          .catch((error) => {
            console.error(error)
          });
    }
    const handleWithGoogle = () => {
      signInWithGoogle()
      .then((result) => {
        console.log(result.user)
      })
      .catch((error) => {
        console.error(error)
      })
    }
    const handleWithFacebook = () => {
      
    }


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="">
        <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-6 ">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
                <div>
                <button onClick={handleWithGoogle} className="btn">Google</button>
                <button onClick={handleWithFacebook} className="btn">Facebook</button>
                </div>
            </form>
                <p> New Here? <Link to='/register' > Register </Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

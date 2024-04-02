import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authCustomContext } from "../utilitis/Provider";

const Register = () => {
    
    const {createUser} = useContext(authCustomContext);
    const localNavigate = useNavigate()
    // console.log(createUser, 'register ')

    const handleRegister =(e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        e.target.reset()
        localNavigate('/')
        console.log(name,email,password);

        // send email and password 
        createUser (email, password)
        .then((result) => {
            // Signed up 
            const user = result.user;
            console.log(user, 'user from bekaceka')
          })
          .catch((error) => {
            console.error(error)
          });
    }

    return (
        <div>
          <div className="hero min-h-screen bg-base-200">
            <div className="">
            <div className="text-center ">
                <h1 className="text-5xl font-bold">Register now!</h1>
              </div>
              <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-6 ">
                <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                  </div>
                </form>
                <p> Already have an Account  <Link to='/login' > Log In</Link>  </p>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Register;
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"> Oops !! </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <Link to="/">
              {" "}
              <button className="btn btn-primary"> Go Home </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

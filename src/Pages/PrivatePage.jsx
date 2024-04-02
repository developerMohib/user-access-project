import { useContext } from "react";
import { authCustomContext } from "../utilitis/Provider";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";

const PrivatePage = ( {children} ) => {
    const { user, loading } = useContext(authCustomContext)
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user){
        return children 
    }
    return (
        <Navigate to='/login' > </Navigate>
    );
};
PrivatePage.propTypes ={ 
    children: PropTypes.node
}
export default PrivatePage;
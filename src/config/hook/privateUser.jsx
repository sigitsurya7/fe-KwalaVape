import { Outlet, Navigate } from 'react-router-dom'
import { isAuthenticated } from '../../middleware/auth/authentication';

const PrivateUser = () => {
    const auth = isAuthenticated();
    return auth ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateUser
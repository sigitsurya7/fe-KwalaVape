import { Outlet, Navigate } from 'react-router-dom'
import { isAuthenticatedUser } from '../../middleware/auth/authentication';

const PrivateUser = () => {
    const auth = isAuthenticatedUser();
    return auth ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateUser
import { Outlet, Navigate } from 'react-router-dom'
import { isAuthenticatedAdmin } from '../../middleware/auth/authentication';

const PrivateAdmin = () => {
    const auth = isAuthenticatedAdmin();
    return auth ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateAdmin
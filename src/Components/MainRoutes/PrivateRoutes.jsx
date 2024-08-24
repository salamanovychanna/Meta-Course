import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import LoadingFallback from '../LoadingFallback';

const PrivateRoutes =  () => {
    const { currentUser, loading } = useContext(AuthContext);

    if (loading) {
        return <LoadingFallback/>; 
    }

    return currentUser ? <Outlet /> : <Navigate to='/login' />;
}

export default PrivateRoutes;
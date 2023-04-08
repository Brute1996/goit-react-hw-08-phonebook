import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children, restricted = false }) {
    const { isLoggedIn } = useSelector(state => state.auth);


    const shouldRedirect = isLoggedIn && restricted;
    console.log(shouldRedirect);

    return shouldRedirect ? <Navigate to='/contacts'/> : children;
    }

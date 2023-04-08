import { NavLink } from "react-router-dom"
import { AuthMenuStyle } from "./AuthMenu.styled";

export const AuthMenu = () => {
    return (
        <AuthMenuStyle>
            <NavLink className='auth-menu-link' to='/registration'>Registration</NavLink>
            <NavLink className='auth-menu-link' to='/login'>Log in</NavLink>
        </AuthMenuStyle>
    );
};
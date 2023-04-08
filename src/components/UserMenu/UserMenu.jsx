import { userLogOut } from "components/store/auth/auth.api";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import { UserMenuStyle } from "./UserMenu.styled";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const userName = useSelector(state => state.auth.user.name)

    return (
        <UserMenuStyle>
            <NavLink className="user-menu-link" to='/contacts'>Contacts</NavLink>
            <div className="user-logut">
                {userName && <p><b><em>{`Welcome ${userName}`}</em></b></p>}
            <button  type="button" onClick={() => dispatch(userLogOut())}>Log Out</button></div>
        </UserMenuStyle>
    );
};
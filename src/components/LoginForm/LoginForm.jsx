import { userLogIn } from "components/store/auth/auth.api";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const LoginForm = () => {
    const dispatch = useDispatch();
    const [logInEmail, setLogInEmail] = useState('');
    const [logInPassword, setLogInPassword] = useState('');

    const handleChange = (e) => {
        const { value, name } = e.target;

        switch (name) {
            case 'email':
                setLogInEmail(value)
                break;
            
            case 'password':
                setLogInPassword(value)
                break;
      
            default:
                return
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(userLogIn({ email: logInEmail, password: logInPassword }))
        form.reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    E-mail
                    <input onChange={handleChange} autoComplete="on" name="email" type="email"/>
                </label>
                <label>
                    Password
                    <input onChange={handleChange} autoComplete="on" name="password" type="password"/>
                </label>
                <button type="submit">Log in</button>
            </form>
            
        </>
    );
};
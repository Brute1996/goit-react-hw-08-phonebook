import { userRegister } from "components/store/auth/auth.api";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const RegistrationForm = () => {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const handleChange = (e) => {
        const { value, name } = e.target;

        switch (name) {
            case 'name':
                setUserName(value)
                break;
      
            case 'email':
                setUserEmail(value)
                break;
            
            case 'password':
                setUserPassword(value)
                break;
      
            default:
                return
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(userRegister({name: userName, email: userEmail, password: userPassword}))
        form.reset();
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input onChange={handleChange} autoComplete="on" name="name"/>
                </label>
                <label>
                    E-mail
                    <input onChange={handleChange} autoComplete="on" type="email" name="email"/>
                </label>
                <label>
                    Password
                    <input onChange={handleChange} autoComplete="on" type="password" name="password"/>
                </label>
                <button type="submit">Create account</button>
            </form>
        </>
    );
};
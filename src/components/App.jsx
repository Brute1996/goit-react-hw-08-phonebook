import { Route, Routes } from "react-router-dom";
import { Contacts } from "./Contacts/Contacts";
import { MainLayout } from "./MainLayout/MainLayout";
import { RegistrationForm } from "./RegistrationForm/RegistrationForm";
import { LoginForm } from "./LoginForm/LoginForm";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";

export const App = () => {
  

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          path="/contacts"
          element={<PrivateRoute> <Contacts /> </PrivateRoute>}
        />
        <Route path="/registration" element={<PublicRoute restricted><RegistrationForm /></PublicRoute>}></Route>
        <Route path="/login" element={<PublicRoute restricted><LoginForm/></PublicRoute> }></Route>
      </Route>
    </Routes>
  );
};
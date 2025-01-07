import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./pages/signUp";
import SignInPage from "./pages/signIn";
import ErrorRoute from "./pages/errorRoute";
import ForgotPasswordPage from "./pages/forgotPassword";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import ExpensesPage from "./pages/expenses";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

const App = () => {
  const {isLoggedIn} = useContext(AuthContext);
  const RequireAuth = ({children}) => {
    return isLoggedIn ? children : <Navigate to ="/login"/>;
  }
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element:<RequireAuth><DashboardPage/></RequireAuth>  ,
      errorElement : <ErrorRoute/>,
    },
    {
      path: "/login",
      element: <SignInPage/>,
    },
    {
      path: "/register",
      element: <SignUpPage/>,
    },
    {
      path: "/forgot-password",
      element: <ForgotPasswordPage/>,
    },
    {
      path: "/balance",
      element:<RequireAuth><BalancePage/></RequireAuth> ,
    },
    {
      path: "/expenses",
      element: <RequireAuth> <ExpensesPage/> </RequireAuth> ,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;

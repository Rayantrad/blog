import { createBrowserRouter, RouterProvider } from "react-router";
import AboutPage from "./Components/Pages/AboutPage";
import ContactPage from "./Components/Pages/ContactPage";
import HomePage from "./Components/Pages/HomePage";
import NotFoundPage from "./Components/Pages/NotFoundPage";
import MainLayout from "./Components/Layouts/MainLayout";
import ServicesPage from "./Components/Pages/ServicesPage";
import AuthLayout from "./Components/Layouts/AuthLayout";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";
import Dashboard from "./Components/Pages/Dashboard";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import UnAuthorized from "./Components/Pages/UnAuthorized";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },

      {
        element: <ProtectedRoutes role="admin" />,
        children: [{ path: "/dashboard", element: <Dashboard /> }],
      },
      {
        element: <ProtectedRoutes />,
        children: [{ path: "/services", element: <ServicesPage /> }],
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
  {
    path: "/unauthorized",
    element: <UnAuthorized />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

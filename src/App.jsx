import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./Components/Pages/HomePage";
import MainLayout from "./Components/Layouts/MainLayout";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import MedicinesPage from "./Components/Pages/MedicinesPage";
import VitaminsPage from "./Components/Pages/VitaminsPage";
import MedicalEquipmentPage from "./Components/Pages/MedicalEquipmentPage";
import FirstAidPage from "./Components/Pages/FirstAidPage";
import PersonalPage from "./Components/Pages/PersonalPage";
import BabyCarePage from "./Components/Pages/BabyCarePage";
import AuthLayout from "./Components/Layouts/AuthLayout";
import Login from './Components/Pages/Login';
import SignUp from './Components/Pages/SignUp';
import ProductDetailPage from "./Components/Pages/ProductDetailPage";
import CartPage from "./Components/Pages/CartPage";
import CheckOutPage from "./Components/Pages/CheckOutPage";
import AllCategories from "./Components/Pages/AllCategories";
import FavouriteproductsPage from "./Components/Pages/FavouriteproductsPage";
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/medicines", element: <MedicinesPage /> },
      { path: "/vitamins", element: <VitaminsPage /> },
      { path: "/medicalequipment", element: <MedicalEquipmentPage /> },
      { path: "/firstaid", element: <FirstAidPage /> },
      { path: "/personalcare", element: <PersonalPage /> },
      { path: "/babycare", element: <BabyCarePage /> },
      { path: "/allcategories", element: <AllCategories /> },
      { path: "/:type/:id", element: <ProductDetailPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <CheckOutPage /> },
      { path: "/favourites", element:<FavouriteproductsPage />},
    ],
  },
  // {
  //   element: <AuthLayout />,
  //   children: [
  //     { path: "/login", element: <Login /> },
  //     { path: "/signup", element: <SignUp /> },
  //   ],
  // },

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

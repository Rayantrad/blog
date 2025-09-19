// import React, { useContext } from "react";
// import { NavLink } from "react-router";
// import { UserContext } from "../../Contexts/UserContext";
// import { IoCallOutline } from "react-icons/io5";
// import { MdOutlineMail } from "react-icons/md";
// import { CiSearch } from "react-icons/ci";
// import { IoPersonOutline } from "react-icons/io5";
// import { GrCart } from "react-icons/gr";
// import Container from "../UI/Container";

// function Navbar() {
//   return (
//     <div>
//       <div className=" bg-black text-white p-1">
//         <Container className="flex justify-between items-center">
//           <div className="flex justify-between gap-5">
//             <div className="flex justify-between items-center gap-1">
//               <IoCallOutline />
//               <span className="text-xs">+1-202-555-0178</span>
//             </div>

//             <div className="flex justify-between items-center gap-1">
//               <MdOutlineMail />
//               <span className="text-xs">support@carepharma.com</span>
//             </div>
//           </div>
//           <div>
//             <span className="text-xs">Free shipping on orders over $50!</span>
//           </div>
//         </Container>
//       </div>

//       <Container>
//         <div className="my-4  flex justify-between items-center ">
//           <div>
//             <div className="flex items-center">
//               <div>
//                 <NavLink to="/">
//                   <img src="/logo.avif" alt="logo care pharma" className="h-12 w-auto mr-2" />
//                 </NavLink>
//               </div>
//               <div>
//                 <h1 className="text-lg font-bold">CarePharma</h1>
//                 <span className="text-xs block -mt-0.5 text-gray-400">
//                   Your Health Partner
//                 </span>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-between items-center w-full max-w-xl px-5 h-9 bg-gray-100 rounded shadow-sm ">
//             <CiSearch className="text-gray-400 text-l mr-2 " />
//             <input
//               type="text"
//               placeholder="Search medicines, vitamins, medical equipment..."
//               className="flex-1 bg-transparent placeholder:text-sm placeholder-gray-400  focus:outline-none "
//             />
//           </div>

//           <div className="flex gap-5">
//             <div className="text-lg ">
//               <IoPersonOutline />
//             </div>
//             <div className="text-lg ">
//               <GrCart />
//             </div>
//           </div>
//         </div>
//       </Container>

//       <div className="border-b border-gray-300 "></div>
//       <Container>
//         <div className="flex gap-6  justify-center m-4">
//           <NavLink
//             className={({ isActive }) =>
//               `text-base ${isActive ? "text-blue-600" : "text-black"}`
//             }
//             to="/medicines"
//           >
//             Medicines
//           </NavLink>
//           <NavLink
//             className={({ isActive }) =>
//               `text-base ${isActive ? "text-blue-600" : "text-black"}`
//             }
//             to="/vitamins"
//           >
//             Vitamins & Supplements
//           </NavLink>
//           <NavLink
//             className={({ isActive }) =>
//               `text-base ${isActive ? "text-blue-600" : "text-black"}`
//             }
//             to="/medicalequipment"
//           >
//             Medical Equipment
//           </NavLink>
//           <NavLink
//             className={({ isActive }) =>
//               `text-base ${isActive ? "text-blue-600" : "text-black"}`
//             }
//             to="/firstaid"
//           >
//             First Aid
//           </NavLink>
//           <NavLink
//             className={({ isActive }) =>
//               `text-base ${isActive ? "text-blue-600" : "text-black"}`
//             }
//             to="/personalcare"
//           >
//             Personal Care
//           </NavLink>
//           <NavLink
//             className={({ isActive }) =>
//               `text-base ${isActive ? "text-blue-600" : "text-black"}`
//             }
//             to="/babycare"
//           >
//             Baby Care
//           </NavLink>
//         </div>
//       </Container>

//     </div>
//   );
// }

// export default Navbar;



import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { IoCallOutline, IoPersonOutline, IoMenu, IoClose } from 'react-icons/io5';
import { MdOutlineMail } from 'react-icons/md';
import CartIcon from './../UI/CartIcon';
import { MdFavoriteBorder } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='sticky top-0 z-50 bg-white'>
      {/* Top Bar - Free shipping message hidden on small screens */}
      <div className=" bg-black text-white py-1 ">
        <div className="container mx-auto flex justify-between items-center xs:px-1 sm:px-4 px-1">
          <div className="flex w-3xl justify-between lg:justify-start sm:gap-5 items-center">
            <div className="flex items-center gap-1">
              <IoCallOutline />
              <span className="text-xs">+1-202-555-0256</span>
            </div>
            <div className="flex items-center gap-1">
              <MdOutlineMail />
              <span className="text-xs">support@carepharma.com</span>
            </div>
          </div>
          <div className="hidden  justify-end lg:block"> {/* This div is hidden on small screens */}
            <span className="text-xs">Free shipping on orders over $50!</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className='container mx-auto xs:px-1 sm:px-4 px-1'>
        <div className="my-2 flex justify-between items-center relative">
          {/* Logo and Name */}
          <div className="flex items-center">
            <NavLink to="/">
              <img src="/logo.avif" alt="CarePharma logo" className="h-12 w-auto mr-2" />
            </NavLink>
            <div>
              <h1 className="text-lg font-bold">CarePharma</h1>
              <span className="text-xs block -mt-0.5 text-gray-400">
                Your Health Partner
              </span>
            </div>
          </div>

          <div className="hidden lg:flex gap-6 justify-center">

            {/* Desktop Navigation Links */}


            <div className="hidden xl:block">
              <div>
                <div className="flex gap-6 justify-center m-4">
                  <NavLink
                    className={({ isActive }) => `text-sm font-medium hover:text-blue-600 transition-colors ${isActive ? "text-blue-600  font-bold underline" : "text-black"}`}
                    to="/allcategories"
                  >
                    All Products
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => `text-sm font-medium hover:text-blue-600 transition-colors ${isActive ? "text-blue-600  font-bold underline" : "text-black"}`}
                    to="/medicines"
                  >
                    Medicines
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => `text-sm font-medium hover:text-blue-600 transition-colors ${isActive ? "text-blue-600 font-bold underline" : "text-black"}`}
                    to="/vitamins"
                  >
                    Vitamins
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => `text-sm font-medium hover:text-blue-600 transition-colors ${isActive ? "text-blue-600 font-bold underline" : "text-black"}`}
                    to="/medicalequipment"
                  >
                    Medical Equipment
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => `text-sm font-medium hover:text-blue-600 transition-colors ${isActive ? "text-blue-600 font-bold underline" : "text-black"}`}
                    to="/firstaid"
                  >
                    First Aid
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => `text-sm font-medium hover:text-blue-600 transition-colors ${isActive ? "text-blue-600 font-bold underline" : "text-black"}`}
                    to="/personalcare"
                  >
                    Personal Care
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => `text-sm font-medium hover:text-blue-600 transition-colors ${isActive ? "text-blue-600 font-bold underline" : "text-black"}`}
                    to="/babycare"
                  >
                    Baby Care
                  </NavLink>
                </div>
              </div>
            </div>


          </div>

          {/* Icons and Burger Menu Button */}

          {/* Icons and Burger Menu Button */}
          <div className="flex items-center gap-4">
            <div className="text-lg cursor-pointer hover:text-blue-600 transition-colors">
              <IoPersonOutline />
            </div>
            <div className="text-lg cursor-pointer hover:text-pink-600 transition-colors">
              <MdFavoriteBorder />
            </div>
            <CartIcon />
            <button className="xl:hidden text-2xl transition-all duration-300 z-50" onClick={toggleMenu}>
              {isMenuOpen ? <IoClose /> : <IoMenu />}
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-300" />

      {/* Mobile Menu - Sliding Overlay */}

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col p-6 pt-20">
          <NavLink
            className={({ isActive }) =>
              `py-3 text-lg font-medium border-b border-gray-200 hover:text-blue-600 transition-colors
        ${isActive ? "text-blue-600 font-bold underline" : "text-gray-800"}`
            }
            to="/allcategories"
            onClick={toggleMenu}
          >
            All Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `py-3 text-lg font-medium border-b border-gray-200 hover:text-blue-600 transition-colors
        ${isActive ? "text-blue-600 font-bold underline" : "text-gray-800"}`
            }
            to="/medicines"
            onClick={toggleMenu}
          >
            Medicines
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `py-3 text-lg font-medium border-b border-gray-200 hover:text-blue-600 transition-colors
        ${isActive ? "text-blue-600 font-bold underline" : "text-gray-800"}`
            }
            to="/vitamins"
            onClick={toggleMenu}
          >
            Vitamins
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `py-3 text-lg font-medium border-b border-gray-200 hover:text-blue-600 transition-colors
        ${isActive ? "text-blue-600 font-bold underline" : "text-gray-800"}`
            }
            to="/medicalequipment"
            onClick={toggleMenu}
          >
            Medical Equipment
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `py-3 text-lg font-medium border-b border-gray-200 hover:text-blue-600 transition-colors
        ${isActive ? "text-blue-600 font-bold underline" : "text-gray-800"}`
            }
            to="/firstaid"
            onClick={toggleMenu}
          >
            First Aid
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `py-3 text-lg font-medium border-b border-gray-200 hover:text-blue-600 transition-colors
        ${isActive ? "text-blue-600 font-bold underline" : "text-gray-800"}`
            }
            to="/personalcare"
            onClick={toggleMenu}
          >
            Personal Care
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `py-3 text-lg font-medium border-b border-gray-200 hover:text-blue-600 transition-colors
        ${isActive ? "text-blue-600 font-bold underline" : "text-gray-800"}`
            }
            to="/babycare"
            onClick={toggleMenu}
          >
            Baby Care
          </NavLink>
        </div>
      </div>



      {/* Overlay to close menu on click outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default Header;

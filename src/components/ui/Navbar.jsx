import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CgMenuRound } from "react-icons/cg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut, signIn } from "../../redux/slices/authSlice";
import UserMenu from "./UserMenu"; 
import Logo from "../../assets/logo/Logo13.png";

export default function ExpediaHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const isHome = location.pathname === "/";

  // Handle Auth initialization
  useEffect(() => {
    try {
      const localUser = localStorage.getItem("user");
      const token = localStorage.getItem("token");

      if (localUser && token && !isAuthenticated) {
        dispatch(signIn({ user: JSON.parse(localUser), token }));
      }
    } catch (error) {
      console.error("LocalStorage parse error:", error);
    }
  }, [dispatch, isAuthenticated]);

  // Handle Scroll to make navbar fixed and change styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch(signOut());
    setMenuOpen(false);
    navigate("/");
  };

  // Determine styles based on scroll and page
  const isDarkText = !isHome || scrolled;
  
  const navClass = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isDarkText 
      ? "bg-white text-gray-900 shadow-md border-b border-gray-100 py-3" 
      : "bg-transparent text-white py-5"
  }`;
    
  const linkHoverClass = "hover:text-[#4BA9A2]";
  const plainsColor = isDarkText ? "text-gray-900" : "text-white";
  const mobileMenuBg = isDarkText ? "bg-white text-gray-900" : "bg-gray-900 bg-opacity-95 text-white";
  const mobileMenuBorder = isDarkText ? "border-gray-100" : "border-gray-700";

  return (
    <header className={navClass}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Plains Motor Inn Logo" className="h-14 w-auto object-contain transition-opacity duration-300 hover:opacity-90" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-base font-medium">
          <Link to="/hotel-card" className={`${linkHoverClass} transition-colors`}>Rooms & Rates</Link>
          <Link to="/gallery" className={`${linkHoverClass} transition-colors`}>Gallery</Link>
          <Link to="/about" className={`${linkHoverClass} transition-colors`}>About Us</Link>
          <Link to="/contact" className={`${linkHoverClass} transition-colors`}>Contact</Link>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="tel:403-742-3491" className="bg-[#F39C49] hover:bg-[#e08c3c] text-blue-900 px-5 py-2 rounded-md font-bold text-base transition-colors shadow-sm flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            403-742-3491
          </a>

          {/* Auth State Preserved */}
          {isAuthenticated ? (
            <UserMenu />
          ) : (
            <Link to="/signin" className={`${linkHoverClass} transition-colors text-base font-medium`}>
              Sign in
            </Link>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FaTimes size={24} className={isDarkText ? "text-gray-900" : "text-white"} />
            ) : (
              <CgMenuRound size={32} className="text-[#4BA9A2]"/>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden px-4 pb-4 space-y-4 shadow-lg absolute w-full left-0 top-full border-t transition-colors duration-300 ${mobileMenuBg} ${mobileMenuBorder}`}>
          <div className="pt-4">
            <Link to="/hotel-card" onClick={() => setMenuOpen(false)} className={`block text-base font-medium ${linkHoverClass}`}>Rooms & Rates</Link>
          </div>
          <Link to="/gallery" onClick={() => setMenuOpen(false)} className={`block text-base font-medium ${linkHoverClass}`}>Gallery</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className={`block text-base font-medium ${linkHoverClass}`}>About Us</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className={`block text-base font-medium ${linkHoverClass}`}>Contact</Link>
          
          <a href="tel:403-742-3491" className="block text-base font-medium text-[#4BA9A2] py-2">
            📞 403-742-3491
          </a>

          {isAuthenticated ? (
            <>
              <div className={`text-base font-medium pb-2 border-b ${mobileMenuBorder} ${isDarkText ? "text-gray-500" : "text-gray-400"}`}>
                Welcome, {user?.name || user?.mobile}
              </div>
              <Link to="/booking-history" onClick={() => setMenuOpen(false)} className={`block pt-2 text-base font-medium ${linkHoverClass}`}>
                Booking Details
              </Link>
              <button onClick={handleSignOut} className="text-left w-full text-base font-medium hover:text-red-400">
                Sign out
              </button>
            </>
          ) : (
            <Link to="/signin" onClick={() => setMenuOpen(false)} className="block text-base font-medium text-[#4BA9A2]">
              Sign in
            </Link>
          )}
        </div>
      )}
    </header>
  );
}

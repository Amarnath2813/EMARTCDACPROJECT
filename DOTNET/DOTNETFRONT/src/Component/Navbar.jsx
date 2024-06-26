import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

const CustomNavbar = () => {
  const [isLogin, setIsLogin] = useState(sessionStorage.getItem('islogin') === 'true');

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLogin(sessionStorage.getItem('islogin') === 'true');
    };

    // Listen for changes in sessionStorage
    window.addEventListener('storage', handleStorageChange);

    // Cleanup the listener when the component is unmounted
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [isLogin]);

  const handleLogout = () => {
    // Clear user-related data from sessionStorage
    sessionStorage.removeItem('custId');
    sessionStorage.removeItem('islogin');

    // Update the state to trigger re-render
    setIsLogin(false);
  };

  useEffect(() => {
    // Set up an interval to periodically check sessionStorage
    const intervalId = setInterval(() => {
      // Check sessionStorage and update state accordingly
      setIsLogin(sessionStorage.getItem('islogin') === 'true');
    }, 1000); // Check every second

    // Clean up interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <BootstrapNavbar expand="lg" variant="dark" className="navbar-custom">
      <Link to="/home" className="navbar-brand">
        <img src="/Logo1.jpg" alt="Logo" style={{ width: '80px', height: 'auto', marginRight: '1rem' }} />
      </Link>

      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/home">
            E-mart
          </Nav.Link>
          <Nav.Link as={Link} to="/categories">
            Categories
          </Nav.Link>
          <Nav.Link as={Link} to="/login" onClick={handleLogout}>
            {isLogin ? 'Logout' : 'Login'}
          </Nav.Link>
          <Nav.Link as={Link} to="/register">
            Register
          </Nav.Link>
          <Nav.Link as={Link} to="/AboutPage">
            About Us
          </Nav.Link>
          <Nav.Link as={Link} to="/cartpage">
            CART
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;

<Nav.Link as={Link} to="/home">
            E-mart&nbsp;
            <img src="/Logo.ico" alt="Logo" style={{ width: '30px', height: 'auto' }} />
          </Nav.Link>
import React, { useState } from "react";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import Links from "../Links/Links";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <p>THEAI</p>
      </div>
      <Links />
      <div className="navbar__auth">
        <a className="signin" href="#signin">
          Sign in
        </a>
        <a className="signup" href="#signup">
          Sign up
        </a>
      </div>
      <div className="navbar__mobile">
        {!toggle && (
          <span className="navbar__mobile-open">
            <HiMenuAlt4 onClick={() => setToggle(true)} />
          </span>
        )}

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <span className="navbar__mobile-close">
              <HiX onClick={() => setToggle(false)} />
            </span>
            <ul className="navbar__links">
              {["home", "about", "technology", "education", "contact"].map(
                (item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
            <ul className="navbar__auth-mobile">
              <a className="signin" href="#signin">
                Sign in
              </a>
              <a className="signup" href="#signup">
                Sign up
              </a>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

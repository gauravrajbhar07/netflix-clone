import React, { useState } from "react";
import "./Style/Nav.css";
import { useEffect } from "react";

function Nav() {
  //   const [show, handleShow] = useState(false);

  //   useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //       if (window.screenY > 100) {
  //         handleShow(true);
  //       } else handleShow(false);
  //     });
  //     return () => {
  //       window.removeEventListener("scroll", null);
  //     };
  //   }, []);

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={show ? `${"nav"} ${"nav_black"}` : "nav"}>
      <img
        className="nav_logo"
        src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
        alt="Netflix logo"
      />

      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix avatar"
      />
    </div>
  );
}

export default Nav;

import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Matt Calvert Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;

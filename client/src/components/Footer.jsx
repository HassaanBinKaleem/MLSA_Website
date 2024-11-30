import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <hr />
        <p className="text-center mb-0 py-3">
          Copyright &copy; {new Date().getFullYear()} MLSA Multan Chapter
        </p>
      </footer>
    </React.Fragment>
  );
};

export default Footer;

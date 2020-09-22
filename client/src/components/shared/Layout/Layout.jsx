import React from "react";
import Nav from "../Nav/Nav.jsx";
import Footer from "../Footer/Footer.jsx";
import "./Layout.css";

export default function Layout(props) {
  return (
    <div className="display">
      <Nav />
      <br />
      <main className="display-info">{props.children}</main>
      <br />
      {/* Props.children are the individual divs, forms,
      and buttons passed down from each screen. */}
      <Footer />
    </div>
  );
}

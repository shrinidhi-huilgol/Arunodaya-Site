import { useState } from "react";
// import "./Navbar.css"; // optional if you want to split styles

export default function Navbar(){
  const [open, setOpen] = useState(false);
  return (
    <header className={`nav ${open ? "open" : ""}`}>
      <div className="container nav-inner">
        <div className="nav-logo">Arunodaya</div>

        <nav className="nav-links" onClick={()=>setOpen(false)}>
          <a href="#about">Home</a>
          <a href="#programs">About us</a>
          <a href="#impact">Events</a>
          <a href="#contact" className="btn">Contact Us</a>
        </nav>

        <button aria-label="Menu" className="menu-btn btn outline" onClick={()=>setOpen(v=>!v)}>
          ☰
        </button>
      </div>
    </header>
  );
}

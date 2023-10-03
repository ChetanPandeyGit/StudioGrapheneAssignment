import React, { useState } from "react";
import Star from "../Images/Star.png";
import Hero from "../Images/Hero.png";
import Img2022 from "../Images/2022.png";
import SM from "../Images/seemore.png";
import '../Components/Components.css'

const NavAndHero = () => {
  const navbar = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
      child: [
        { name: "Product 1", id: "p1" },
        { name: "Product 2", id: "p2" },
        { name: "Product 3", id: "p3" },
        { name: "Product 4", id: "p4" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];

  const [active, setActive] = useState(null);

  const handleclick = (id) => {
    setActive(id);
  };

  const [menuBar, setMenuBar] = useState(false);
  return (
    <div className="nh">
      <div className="navAndHero">
        <div className="nav">
          <div className="leftnav">
            <span>ShopKart</span>
          </div>
          <div className="rightnav">
            <span>WISHLIST (0)</span>
            <span>BAG (0)</span>
          </div>
          <button id="hamburger"  onClick={()=>{ setMenuBar( !menuBar )}}>&#9776;</button>
          <div className={menuBar ? "mobilenav menu" : "mobile-nav"}>
          <nav className="menu">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">OUR PRODUCTS</a></li>
                    <li><a href="#">CONTACT US</a></li>
                </ul>
            </nav>
          </div>
        </div>
        <hr />
        <img src={Star} alt="star" />
        <div className="botnav">
          {navbar.map((item) => (
            <span key={item.id} onClick={() => handleclick(item.id)}>
              {item.name}
              {item.child && (
                <ul>
                  {item.child.map((child) => (
                    <li key={child.id}>
                      {child.name}
                      <br />
                    </li>
                  ))}
                </ul>
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="herosec">
        <div className="heroimg">
          <img src={Hero} alt="hero" />
        </div>
        <div className="herotext">
          <span>Fresh</span>
          <br />
          <img src={Img2022} alt="2022" />
          <br />
          <span>Look</span>
        </div>
      </div>
      <button>
        See More
        <img src={SM} alt="hero" />
      </button>
    </div>
  );
};

export default NavAndHero;

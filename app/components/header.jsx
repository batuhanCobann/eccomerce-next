"use client"
import Link from "next/link";
import { useState } from "react";

export default function Header(){


    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
      };



    return (
        <>
        <div className="App-sepet">
            
            <div className={`cart ${isCartOpen ? 'open' : ''}`}>
                <h2>Sepet</h2>
                <ul>
                    <li>sepet</li>
                </ul>
        </div>
      
      {/* Diğer içerikler */}
    </div>


            <div className="App">
                
                <div className={`offcanvas-menu ${isOpen ? 'open' : ''}`}>
                    <div className="offcanvas-header">
                    <button className="close-btn" onClick={toggleMenu}>
                        x
                    </button>
                    </div>
                    <div className="offcanvas-body">
                    <ul>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    </div>
                </div>
            </div>

            <div className="header">
                <div className="header-left">
                <button className="hamburger-menu" onClick={toggleMenu}>
                    <img src="hamburger-menu.svg" alt="" />
                </button>
                    
                    <Link href={"/urunler"} className="products-btn"><h2>PRODUCTS</h2></Link>
                </div>
                <div className="header-left-link">
                    <a href="">Collections</a>
                    <a href="">Men</a>
                    <a href="">Women</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="admin.html">Admin Panel</a>
                </div>
                <div className="header-right">
                    <button className="cart-button sepet-btn" onClick={toggleCart}><img src="sepet.svg" alt="" /></button>
                    <img src="profil-img.svg" alt="" />
                </div>
            </div>
        </>
    )
}
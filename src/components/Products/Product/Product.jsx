


import React from 'react';
import "./Product.scss";
// import prod1 from "../../../assets/products/earbuds-prod-1.webp"
import prod1 from "../../../assets/products/cs_book1.png"
import prod2 from "../../../assets/products/me_book1.png"
import prod3 from "../../../assets/products/cs_book2.png" // Removed space here
import prod4 from "../../../assets/products/cs_book3.png"
import prod5 from "../../../assets/products/cv_book1.png"
import prod6 from "../../../assets/products/me_book2.png"
import prod7 from "../../../assets/products/me_book3.png"

const Product1 = () => {
    return (
        <div  className="product-card">
            <div className="thumbnail">
                <img src={prod1} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">LET US C++</span>
                <span className="price">&#8377;499</span>
            </div>
        </div>
    );
};

const Product2 = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod2} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">ROBOTICS MECHANICS AND CONTROL</span>
                <span className="price">&#8377;865</span>
            </div>
        </div>
    );
};

const Product3 = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod3} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">DATABASE MANAGEMENT SYSTEMS(DBMS)</span>
                <span className="price">&#8377;450</span>
            </div>
        </div>
    );
};
const Product4 = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod4} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">OPPS WITH C++</span>
                <span className="price">&#8377;699</span>
            </div>
        </div>
    );
};
const Product5 = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod5} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">BASIC CIVIL ENGINEERING</span>
                <span className="price">&#8377;987</span>
            </div>
        </div>
    );
};
const Product6 = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod6} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">ENGINEERING THERMODYNAMICS</span>
                <span className="price">&#8377;897</span>
            </div>
        </div>
    );
};
const Product7 = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod7} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">RENEWABLE ENERGY RESOURCES</span>
                <span className="price">&#8377;349</span>
            </div>
        </div>
    );
};
export { Product1, Product2, Product3, Product4, Product5, Product6, Product7 };



import React from 'react';
import "./Products.scss";
import { Product1, Product2, Product3, Product4, Product5, Product6, Product7 } from "./Product/Product";

const Products = ({ innerPage, headingText }) => {
    return (
        <div className="products-container">
            {!innerPage && <div className="sec-heading">{headingText}</div>}
            <div className="products">
                <Product1 />
                <Product2 />
                <Product3 />
                <Product4 />
                <Product5 />
                <Product6 />
                <Product7 />
            </div>
        </div>
    );
};

export default Products;
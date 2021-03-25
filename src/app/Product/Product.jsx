import React, { useState } from 'react';

import { Stars } from '../Stars/Stars';
import '../Product/Product.css';

export const Product = ({product}) => {

   const {id,name, description, rating, image, promo, active} = product;
   const [toggle, setToggle] = useState(false);
  return (
    <>
        <div key={id} className="product">
            <picture className="productPicture">
              <img src={image} className={active? "active" : "unavailable"} alt={name}></img>
            </picture>
            {promo ? <div className="promoFlag">Promo</div> : null}
            <h4 className="productTitle">{name}</h4>
            <p className="productDescription">{description}</p>
            <Stars rating={rating}></Stars>
            {active ? <button className="productBtn active" onClick={() => setToggle(true)}>Show details</button> : <button className="productBtn inActive">Unavailable</button> }
            {active ? <div className={toggle? "bigProductBox show":"bigProductBox hide"}>
                        <div className="bigProductCart">
                          <picture className="productCartPicture">
                            <img src={image} className={active? "active" : "unavailable"} alt={name}></img>
                          </picture>
                          <h4 className="productTitle">{name}</h4>
                          <p className="productDescription">{description}</p>
                          <button onClick={() => setToggle(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <g id="close">
                                <path id="Path" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#1A1B1D"/>
                              </g>
                            </svg>
                          </button>
                        </div>
                      </div> 
            : null}
        </div>
    </>
  );
};

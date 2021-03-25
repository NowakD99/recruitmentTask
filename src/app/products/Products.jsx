import React, {useState, useEffect} from 'react';

import { Searcher } from '../Searcher/Searcher';
import { Filter } from '../Filter/Filter';
import { Pagination } from '../Pagination/Pagination';
import { ProductsList } from '../ProductsList/ProductsList';
import {convertObjToLink} from '../Functions/convertObjToLink';
import '../products/Products.css';

const API = {
  link: "https://join-tsh-api-staging.herokuapp.com/products?",
  search: "",
  limit: "&limit=8",
  page: "&page=1",
  promo: "",
  active: ""
}

export const Products = () => {
  
  
  const [productList, setProductList] = useState([]);
  const [meta, setMeta] = useState([]);
  const [currentAPILink, setCurrentAPILink] = useState(API);
  
  const getProducts = (api) => {    
    fetch(api)
    .then(response => response.json())
    .then(response => {
      setMeta(response.meta);
      setProductList(response.items);
    })
  }

  const onInit = () => {
    getProducts(convertObjToLink(API));
  }

  useEffect(onInit, [])

  return (
    <>
      <header>
        <div className="container">
        <h1 className="logo">join.tsh.io</h1>
        <div className="allFilters">
          <Searcher name="Search" parameter="search" getProducts={getProducts} currentAPILink={currentAPILink} setCurrentAPILink={setCurrentAPILink}></Searcher>
          <Filter name="Promo" parameter="promo" getProducts={getProducts} currentAPILink={currentAPILink} setCurrentAPILink={setCurrentAPILink}></Filter>
          <Filter name="Active" parameter="active" getProducts={getProducts} currentAPILink={currentAPILink} setCurrentAPILink={setCurrentAPILink}></Filter>
        </div>
        <button className="loginBtn">Log in</button>
        </div>
      </header>
      <div className="mainContent">
        <div className={`container ${meta.totalItems ? "" : "empty"}`} >
          {meta.totalItems ? 
          <>
            <ProductsList getProducts={getProducts} productList={productList} currentAPILink={currentAPILink}></ProductsList>
            <Pagination meta={meta} parameter="page" getProducts={getProducts} currentAPILink={currentAPILink} setCurrentAPILink={setCurrentAPILink}></Pagination>
          </>
        : <div className="emptyListBox"> 
            <div> 
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="48" viewBox="0 0 38 48" fill="none">
                <g id="Group">
                  <g id="task-list-plain">
                    <path id="Shape" fillRule="evenodd" clipRule="evenodd" d="M26.5 9.02197H34C35.6569 9.02197 37 10.3651 37 12.022V43.522C37 45.1788 35.6569 46.522 34 46.522H4C2.34315 46.522 1 45.1788 1 43.522V12.022C1 10.3651 2.34315 9.02197 4 9.02197H11.5C11.5 4.87984 14.8579 1.52197 19 1.52197C23.1421 1.52197 26.5 4.87984 26.5 9.02197Z" stroke="#B9BDCF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path id="Shape_2" d="M19 7.52197C19.4142 7.52197 19.75 7.85776 19.75 8.27197C19.75 8.68619 19.4142 9.02197 19 9.02197C18.5858 9.02197 18.25 8.68619 18.25 8.27197C18.25 7.85776 18.5858 7.52197 19 7.52197" stroke="#B9BDCF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                </g>
              </svg>
              <p className="emptyListTitle">Ooops… It’s empty here</p>
              <p className="emptyListDescription">There are no products on the list</p>
            </div>
          </div>}
        
        </div>
      </div>
    </>
  );
};

import React from 'react';
import {convertObjToLink} from '../Functions/convertObjToLink';
import '../Pagination/Pagination.css';

export const Pagination = ({meta, parameter, currentAPILink, setCurrentAPILink, getProducts}) => {

    const {totalPages, currentPage} = meta;
    const first = {...currentAPILink};
    first[parameter] = `&${parameter}=${1}`;
    const last = {...currentAPILink};
    last[parameter] = `&${parameter}=${totalPages}`;
    
    let paginationArray = [];
    if(totalPages <= 6) {
        for(let i=1; i<=totalPages; i++)
        paginationArray.push(i);
    } else if(currentPage === 1) {
        paginationArray = [1,2,3,"...",totalPages-2,totalPages-1,totalPages];
    } else {
        if(currentPage+1 >= totalPages-2)
        paginationArray = [totalPages-5, totalPages-4, totalPages-3,"...",totalPages-2,totalPages-1,totalPages];
        else
        paginationArray = [currentPage-1, currentPage, currentPage+1,"...",totalPages-2,totalPages-1,totalPages];
    }


    const onClickChangePage = (API) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        setCurrentAPILink(API)
        getProducts(convertObjToLink(API));
    }
  
  return (
    <div className="paginationBox"> 
        <div className="pagination"> 
            <button className={currentPage === 1 ? "disabled first" : "first"} disabled={currentPage === 1 ? true : false} onClick={() => onClickChangePage(first)}>First</button>
            {paginationArray.map((item,index) => {
                if(Number.isInteger(item)){
                    let APILink = {...currentAPILink}
                    APILink[parameter] = `&${parameter}=${item}`;
                    
                    return <button name={item} className={currentPage === item ? "active" : null} disabled={currentPage === item ? true : false} key={index} onClick={() => onClickChangePage(APILink)}>{item}</button>
                }
            
                return <p key={index}>{item ? item : null}</p>
            })}
            <button className={currentPage === totalPages ? "disabled last" : "last"} disabled={currentPage === totalPages ? true : false} onClick={() => onClickChangePage(last)}>Last</button>
        </div>
    </div>
  );
};

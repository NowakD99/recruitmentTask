import React, {useState, useEffect} from 'react';
import {useComponentDidMount} from '../Functions/useComponentDidMount';
import {convertObjToLink} from '../Functions/convertObjToLink';
import '../Filter/Filter.css';

export const Filter = ({name, parameter, getProducts, currentAPILink, setCurrentAPILink}) => {
  const [checked, setChecked] = useState(false);
  const isComponentMounted = useComponentDidMount();

  function onChange() {
    if(isComponentMounted) {
        let API = {...currentAPILink, page: "&page=1", [parameter]: checked ? `&${parameter}=true` : ""}
        setCurrentAPILink(API)
        getProducts(convertObjToLink(API))
      }
  }
  
  useEffect(onChange, [checked]);

  return (
    <div className="filters">
        <input id={name} type="checkbox" onChange={() => setChecked(!checked)}></input> 
        <label htmlFor={name}>{name}</label>
    </div>
  );
};

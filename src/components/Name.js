import React from 'react';
import './Second.css';
function Name(props){
    return(
     <div className="wrap">
         <img src={props.data.src} height={props.data.height} width={props.data.width} />
         <h2>{props.data.head}</h2>
         <p>{props.data.para}</p>
     </div>
    )
}
export default Name;
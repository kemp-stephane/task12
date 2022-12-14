import React from "react";


const Win =({flip,handleClick,status,value}) =>{

    if (flip){
        return (
            <div id={value} className="card" onClick={handleClick}>{status}</div>
            
        )
    } else {
        return (
            <div id={value} className="card" onClick={handleClick}></div>
            
        )
    }
}

export default Win;


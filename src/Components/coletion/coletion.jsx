import React from "react";
import "style.css";

const handleClick = {label} => {
    console.log(`${label} button clicked`);
    
}



export default function coletion(){
    <div className="container-coletion">

            <h2>Coleções em destaque</h2>
        
                <Button label="Camisetas" onClick={ ()=> handleClick('Camisetas')} />

                <Button label="Calças" onClick={ ()=> handleClick('Calças')} />

                <Button label="Bonés" onClick={ ()=> handleClick('Bonés')} />

                <Button label="Headphones" onClick={ ()=> handleClick('Headphones')} />

                <Button label="Tênis" onClick={ ()=> handleClick('Tênis')} />   
          </div>
};
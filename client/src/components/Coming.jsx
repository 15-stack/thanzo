import React from "react";
import Card from "./Card";


function Coming() {


    return(
        <div className="flex flex-col md:flex-row justify-left md:justify-center">

            <div className="mt-3 md:mt-9 mx-9 md:mx-24">
                <h1 className="font-bold leading-tight text-4xl md:text-5xl font-['Prosto_one'] mb-2 md:mb-6 ">A seamless payment <br/> and commerce solution <br/> for online businesses</h1>
                <h2 className="text-lg md:text-xl mb-9 md:mb-12"> Accept and collect payment from anywhere directly <br/> for your products and services</h2>
                <p className="font-semibold font-['Poppins'] text-lg md:text-xl mb-2 md:mb-6 ">Payment integration + Checkout + <br/> Commerce tool + Payment link </p> 
                <p className="absolute text-2xl md:text-5xl font-['Poppins'] bg-transparent border-2  rounded-xl px-2 py-1 md:px-4 md:py-3 ">Coming soon </p>                               
            </div>

            <div >
                <Card />                
            </div>

        </div>
        
    )
}



export default Coming

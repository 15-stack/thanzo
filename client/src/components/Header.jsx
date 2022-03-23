import React from "react";
import thanzoLogo from "./img/thanzo.svg";

function Header() {
    return(
        <div className="mt-6 md:mt-9 ml-8 md:ml-28 lg:ml-80 ">
            <img className="w-36 md:w-48 mb-12" src={thanzoLogo} alt="logo"/>
        </div>
    )
}

export default Header
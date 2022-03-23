import React from "react";
import facebook from "./img/facebook.png";
import twitter from "./img/twitter.png";
import whatsapp from "./img/whatsapp.png";
import instagram from "./img/instagram.png";

function Contact() {
    return (
        <div className="flex  ml-9 md:ml-28 lg:ml-80 mt-12 mb-6 ">
            <div className="flex flex-row w-52 space-x-7">
                <button><a href="" target="_blank"><img src={facebook} alt="facebook"/></a></button>
                <button><a href="" target="_blank"><img src={twitter} alt="twitter"/></a></button>
                <button><a href="" target="_blank"><img src={whatsapp} alt="whatsapp"/></a></button>
                <button><a href="" target="_blank"><img src={instagram} alt="instagram"/></a></button>
            </div>

        </div>
    )
}

export default Contact 
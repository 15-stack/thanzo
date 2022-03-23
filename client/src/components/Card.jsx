import React, {Component} from "react";
import business from "./img/bizman.png";
// import {useMailChimp, Status} from "hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


class Card extends Component {


    notify = () => toast.success('Thank you! Your email has been received', {position: toast.POSITION.BOTTOM_CENTER});

    state = {
        email: ''
    }

    handleChange = e => {
        this.setState({ email: e.target.value.trim()});
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.email) {
            fetch(`/api/memberAdd?email=${this.state.email}`)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }
    }
        
    render() {

         return (
            <div className="md:container relative justify-center md:justify-left flex flex-col drop-shadow-2xl bg-white rounded-xl md:rounded-3xl md:mx-0 mx-9 md:mt-0 mt-20 md:mb-0 mb-12 px-3 py-3 md:px-5 md:py-5">
                <div className="">
                    <img className="w-54 md:w-96  bg-timber rounded-lg md:rounded-2xl " src={business} alt="card image" />
                </div>

                <form onSubmit={this.handleSubmit}  className="flex flex-col">
                    <h3 className="font-bold text-2xl md:text-4xl mt-3 md:mt-6 mb-6 md:mb-8 font-['Prosto_One'] ">Get notified when <br/> we launch</h3>
                    


                    <input onChange={this.handleChange} value={this.state.email} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" type="email"  name="email" className="mt-1 px-4 py-3 md:px-4 md:py-3 bg-white border shadow-sm border-gray placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md text-sm md:text-base focus:ring-1" placeholder="you@example.com"  />

                    <button onClick={this.notify} disabled={!this.state.email} type="submit"  className="bg-purple mb-6 hover:ring text-white  px-4 py-3  mt-2 md:mt-2 text-sm md:text-base rounded-md" >Notify me</button>
                    <ToastContainer/>  
                </form>
                
            </div>
        )

    }
       
          
}

export default Card
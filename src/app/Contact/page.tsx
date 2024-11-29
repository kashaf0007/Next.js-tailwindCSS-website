import React from "react";
const Contact =() =>{
    return(
        <section className="contact-form border  max-w-lg mx-20 my-20 p-8 bg-gray-200  shadow-md rounded-md">
        <h2 className="text-4xl font-bold  mb-6 text-center text-black" data-aos="fade-up" >Contact Us</h2>
        <form className="items-center">
        <input type="text" placeholder='User Name' className="w-full mb-4 py-2 border bg-white border-black rounded-md  text-green-200" required/>
          <input type="text"  placeholder='Full Name ' className="w-full mb-4 py-2 border bg-white border-black rounded-md  text-green-200"required/>
          <input type="email" placeholder=' enter your email' className="w-full mb-4 py-2 border  bg-white border-black  text-green-200 rounded-md"required/>
          <input type="number" placeholder='enter your phone no' className="w-full mb-4 py-2 border  bg-white border-black  text-green-200 rounded-md"/>
          <textarea placeholder='your message ' className="w-full mb-4 py-2 border border-gray-500  bg-white  text-black rounded-md" rows={5} required></textarea>
          <button type='submit'  className="w-full  bg-green-100 text-black py-2 rounded-md hover:bg-green-200">Send</button>
        
        </form>
        </section>
    )
}
export default Contact
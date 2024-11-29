import React from 'react'

const Packages = () => {
    const Packages  =[
      { id:1, name:"HAJJ",description:'Essential Packing Tips For Your Hajj',Image:'/img3.jpeg'},
      {id:2, name:"UMRAH",description:'The Ultimate Guide to Performing Umrah',Image:'/img.jpeg'},
      {id:3, name:"PRAY",description:'Personal Stories fro the Scared Journey',Image:'/img1.jpeg'},
      {id:4, name:"MANASIK",description:'Manasik',Image:'/img4.jpeg'},
      {id:5, name:"TRANSPORTATION",description:'Our best transportation',Image:'/img5.jpeg'},
      {id:6, name:"TOUR",description:'Haram Shariff,Masjid-e-Nabvi,and other places',Image:'/img6.jpeg'},
    ]

    return (
      <div className=' packages grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10'>
    <h1>Packages</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste assumenda eerendis soluta laudantium dolores nesciunt tenetur rem.</p>
        <div className='justify-center items-center'>
          {Packages.map((Packages)=>(
            <div key={Packages.id} className="package-cart bg-white p-5 rounded-md  shadow-md text-center ">
              <img src={Packages.Image  }  alt={Packages.name} className='w-full rounded-md transition-transform duration-300 transform hover:scale-110'/>
              <h3 className='mt-4 text-2xl font-bold'>{Packages.name}</h3>
               <button className=  'bg-green-200 rounded-md mt-4 px-4 py-2 text-black  hover:bg-green-200'>BOOK NOW</button>
              </div>
          ))}
        </div> 
      </div>
    )
  }
  

export default Packages

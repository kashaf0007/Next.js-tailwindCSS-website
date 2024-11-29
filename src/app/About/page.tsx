import React from "react";
const About = () => {
    return(
        <section className="about h-screen flex items-center justify-start bg-cover bg-center  text-white px-10" style={{backgroundImage:"url('img1.jpeg')"}}>
            <div className="bg-black bg-opacity-60 p-8 rounded-md max-w-lg text-left">
                <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">About Us</h2>
                <p className="pt-20">We are providing the best nearby accommodation wth walking distance to Haram Shariff,Masjid-e-Nabvi,and other places without any difficulty and can smoothly perfor all the arkan of Hajj and Umrah.  We feel pround for keeping our words commited by keeping in mind of Hajj, Umrah, Ziyarah's routines.</p>
            </div>
        </section>
    )
}
export default About;
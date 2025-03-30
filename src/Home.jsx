import React, { useState, useEffect } from "react";
import logo from './logo.png';
import loadingImg from './horses.gif';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';
import v1 from './v1.mp4';
import img6 from './img6.png';
import img7 from './img7.png';
import img8 from './img8.png';
import img9 from './img9.png';
import img10 from './img10.png';
import img11 from './img11.png';
import v2 from './v2.mp4';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home({ text, text1, text2, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14, text15, text16, text17, text18, text19, text20, text21, text22, text23, text24, text25, text26, text27, text28, text29, text30, text31, text32, text33, text34, text35 }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1900);
    }, []);

    const images = [
        "https://i.pinimg.com/474x/8e/5c/6c/8e5c6c21aeb580658129b7182fb403cd.jpg",
        "https://i.pinimg.com/736x/fd/b2/bb/fdb2bb245e9e0fb9c5ae23b89c87f7cd.jpg",
        "https://i.pinimg.com/736x/13/08/75/130875e3f579ee4ae4d1e996fb125aed.jpg",
        "https://i.pinimg.com/736x/5f/4b/e0/5f4be00621e41e0c476f3b07e6d4181e.jpg",
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <>
            {isLoading ? (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img src={loadingImg} alt="Loading..." />
                </div>
            ) : (
                <div className="bg-white">
                    <header className="bg-[#ddebed] h-16">
                        <nav className="mx-auto flex max-w-7xl items-center justify-between h-22 p-4 lg:px-8">
                            <div className="flex lg:flex-1">
                                <img className="w-13 -mt-3 cursor-pointer" src={logo} alt="Logo" />
                            </div>
                            <div className="flex lg:hidden">
                                <button
                                    type="button"
                                    className="-m-2.5 inline-flex rounded-md p-2.5 -mt-6 text-[#485354] font-extrabold"
                                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                >
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>
                            </div>
                            <div className="hidden lg:flex lg:gap-x-8 -mt-4">
                                <a href="#Home" className="text-sm font-semibold text-[#485354]">{text}</a>
                                <a href="#About" className="text-sm font-semibold hover:text-[#485354]">{text1}</a>
                                <a href="#Contact" className="text-sm font-semibold hover:text-[#485354]">{text2}</a>
                           </div>
                            <div className="hidden -mt-4 lg:flex lg:flex-1 lg:justify-end">
                            <Link to='/Search'><i className="cursor-pointer text-[#485354] fa-solid fa-magnifying-glass"></i></Link>
                            </div>
                        </nav>
                        {mobileMenuOpen && (
                            <div className="fixed inset-0 z-20 bg-[#ddebed] p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                                <div className="flex items-center justify-between">
                                    <img className="w-13 -mt-3 -ml-2" src={logo} alt="Logo" />
                                    <button
                                        type="button"
                                        className="-mt-5 text-[#485354] rounded-md"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="absolute -mt-13 top-1/2 left-1/2 transform space-y-22 -translate-x-1/2 -translate-y-1/2">
                                    <a href="#Home" className="block text-sm font-semibold text-[#485354]">{text}</a>
                                    <a href="#About" className="block text-sm font-semibold text-[#485354]">{text1}</a>
                                    <a href="#Contact" className="block text-sm font-semibold text-[#485354]">{text2}</a>
                                </div>
                                <Link to='/Search'><div className="absolute top-1/2 left-1/2 transform mt-49 cursor-pointer -translate-x-1/2 -translate-y-1/2"><i className="fa-solid fa-magnifying-glass"></i></div></Link>
                            </div>
                        )}
                    </header>
                    <section id="Home">
                        <div className="text-center h-[773px] w-full bg-no-repeat bg-cover bg-[url('https://www.365vet.co.uk/media/magefan_blog/Horse_close_up.jpg')]">
                            <h1 className="text-xl font-black text-white p-9">{text4}</h1>
                        </div>
                        <div className="mt-23">
                            <div className=" flex-col items-start justify-center lg:px-44">
                                <img className="w-16 -mt-[555px]" src={img1} alt="Logo" />
                                <p className="text-white -mt-7 text-[22px]">{text5}</p>
                                <h1 className="text-white font-serif text-[70px]">{text6}</h1>
                            </div>
                        </div>
                    </section>
                    <h1 className="text-black font-cursive text-xl text-center mt-56">{text7}</h1>
            <div class="container mt-26 mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-8 md:gap-76">
            <div class="flex flex-col items-center">
                <div class="category-circle rounded-full shadow-lg overflow-hidden flex items-center justify-center mb-4">
                    <img src={img3} alt="" class="object-cover w-22 h-22"/>
                </div>
                <h2 class="text-[16px] tracking-wider">{text8}</h2>
            </div>
            <div class="flex flex-col items-center">
                <div class="category-circle rounded-full shadow-lg overflow-hidden flex items-center justify-center mb-4">
                    <img src={img2} alt="" class="object-cover w-22 h-22"/>
                </div>
                <h2 class="text-[16px] tracking-wider">{text9}</h2>
            </div>
            <div class="flex flex-col items-center">
                <div class="category-circle rounded-full shadow-lg overflow-hidden flex items-center justify-center mb-4">
                    <img src={img4} alt="" class="object-cover w-22 h-22"/>
                </div>
                <h2 class="text-[16px] tracking-wider">{text10}</h2>
            </div>
        </div>
    </div> 
             <section id="About">
             <div class="mt-19 bg-white">
                        <div class="container mx-auto">
                            <div class="flex flex-col md:flex-row items-center">
                                <div class="w-full md:w-1/2 p-4">
                                    <img src={img5} alt="" class="w-full h-auto shadow-lg" />
                                </div>
                                <div class="w-full md:w-1/2 p-8">
                                    <p class="text-gray-600 text-lg mb-8 -mt-2">
                                        {text11}
                                    </p>
                                    <div class="space-y-4">
                                        <div class="flex items-start">
                                            <span class="text-primary mr-2 mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="text-[#485354] h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            <span class="text-gray-600 text-lg">{text12}</span>
                                        </div>
                                        <div class="flex items-start">
                                            <span class="text-primary mr-2 mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="text-[#485354] h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            <span class="text-gray-600 text-lg">{text13}</span>
                                        </div>
                                        <div class="flex items-start">
                                            <span class="text-primary mr-2 mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="text-[#485354] h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            <span class="text-gray-600 text-lg">{text14}</span>
                                        </div>
                                        <div class="flex items-start">
                                            <span class="text-primary mr-2 mt-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="text-[#485354] h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            <span class="text-gray-600 text-lg">{text15}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
             </section>
               
                    <section className="container mx-auto px-4 py-16 max-w-7xl">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="relative w-full lg:w-1/3">
                                <video src={v1} autoPlay loop muted classNameName="w-58 ml-19" />
                            </div>
                            <div className="w-full lg:w-1/3 text-center lg:text-left">
                                <h2 className="text-xl md:text-xl font-bold text-gray-800 mb-4">{text16}</h2>
                                <p className="text-gray-600 mb-8">{text17}</p>
                            </div>
                            <div className="w-full lg:w-1/3">
                                <div className="bg-[#ddebed] rounded-3xl overflow-hidden">
                                    <div className="flex items-center justify-center h-screen">
                                        <div className="flex gap-4 bg-[#485354] p-4 rounded-xl -mt-60 shadow-lg">
                                            <div className="flex flex-col gap-3">
                                                {images.map((img, index) => (
                                                    <img
                                                        key={index}
                                                        src={img}
                                                        alt={`Thumbnail ${index}`}
                                                        className={`w-16 h-20 rounded-md cursor-pointer border-2 transition ${selectedImage === img ? "border-[#ddebed] scale-105" : "border-transparent"
                                                            }`}
                                                        onClick={() => setSelectedImage(img)}
                                                    />
                                                ))}
                                            </div>
                                            <motion.div
                                                key={selectedImage}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <img
                                                    src={selectedImage}
                                                    alt="Selected"
                                                    className="w-64 h-89 mt-2 object-cover rounded-lg shadow-md"
                                                />
                                            </motion.div>
                                        </div>
                                    </div>                    
                                    <div className="p-8 -mt-56">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{text18}</h3>
                                        <p className="text-gray-500 text-xl mb-6">{text19}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="text-black font-semibold text-2xl mt-12 text-center">
                            <h1>{text20}</h1>
                        </div>
               
               
                        <div class="container mt-26 mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-8 md:gap-16">
            <div class="flex flex-col items-center">
                <div class="category-circle w-40 shadow-[#485354] h-40 rounded-full cursor-pointer shadow-lg overflow-hidden flex items-center justify-center mb-4">
                    <Link to='/Akhal teke horse'><img src={img6} alt="" class="object-cover w-full h-full"/></Link> 
                </div>
                <Link to='/Akhal teke horse'><h2 class="text-[16px] cursor-pointer font-bold tracking-wider">{text21}</h2></Link>
            </div>
            <div class="flex flex-col items-center">
                <div class="category-circle w-40 shadow-[#485354] h-40 rounded-full cursor-pointer shadow-lg overflow-hidden flex items-center justify-center mb-4">
                    <Link to='/American paint horse'><img src={img7} alt="" class="object-cover w-full h-full"/></Link> 
                </div>
                <Link to='/American paint horse'><h2 class="text-[16px] cursor-pointer font-bold tracking-wider">{text22}</h2></Link> 
            </div>            
            <div class="flex flex-col items-center">
                <div class="category-circle w-40 shadow-[#485354] h-40 rounded-full cursor-pointer shadow-lg overflow-hidden flex items-center justify-center mb-4">
                <Link to='/American quarter horse'><img src={img8} alt="" class="object-cover w-full h-full"/></Link> 
                </div>
                <Link to='/American quarter horse'><h2 class="text-[16px] cursor-pointer font-bold tracking-wider">{text23}</h2></Link> 
            </div>
            <div class="flex flex-col items-center">
                <div class="category-circle w-40 shadow-[#485354] h-40 rounded-full cursor-pointer shadow-lg overflow-hidden flex items-center justify-center mb-4">
                <Link to='/American saddlebred horse'><img src={img9} alt="Mdamma" class="object-cover w-full h-full"/></Link> 
                </div>
                <Link to='/American saddlebred horse'><h2 class="text-[16px] cursor-pointer font-bold tracking-wider">{text24}</h2></Link> 
            </div>
            <div class="flex flex-col items-center">
                <div class="category-circle w-40 shadow-[#485354] h-40 rounded-full cursor-pointer shadow-lg overflow-hidden flex items-center justify-center mb-4">
                <Link to='/American curly horse'><img src={img10} alt="Shamalia" class="object-cover w-full h-full"/></Link> 
                </div>
                <Link to='/American curly horse'><h2 class="text-[16px] cursor-pointer font-bold tracking-wider">{text25}</h2></Link> 
            </div>
        </div>
    </div> 

   

            <div className="relative bg-peach min-h-screen flex flex-col items-center justify-center mt-23 p-6">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-[#485354]"></div>
        
        <div className="relative z-10">
          <div className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-[#485354] shadow-lg">
            <img 
              src={img11}
              alt="Salon Model" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
  
        <div className="text-center mt-6 px-4">
          <h1 className="text-3xl font-bold text-black">{text26}</h1>
          <p className="text-gray-700 mt-2 max-w-md">
             {text27}        
        </p>
        </div>
      </div>        
      <div class="flex items-center mt-7 justify-center ">
            <video src={v2} autoPlay loop muted />
        </div>
      <section id="Contact">
         <div className="flex flex-col lg:flex-row mt-40 items-center bg-[#485354] text-white p-8 lg:p-16">
      <div className="bg-black p-8 rounded-lg shadow-lg w-full lg:w-1/3">
        <h2 className="text-3xl font-semibold text-center mb-4">{text28}</h2>
        <div className="space-y-10 mt-11">
          <div className="flex items-center space-x-4">
             <i className="cursor-pointer text-[#ddebed] fa-solid fa-location-dot"></i>            
          <div>
              <h3 className="font-bold uppercase text-gray-300">{text29}</h3>
              <p>{text30}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <i className="cursor-pointer text-[#ddebed] fa-solid fa-phone"></i>
            <div>
              <h3 className="font-bold uppercase text-gray-300">{text31}</h3>
              <p>{text32}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
          <i className="cursor-pointer text-[#ddebed] fa-solid fa-envelope"></i>
          <div>
              <h3 className="font-bold uppercase text-gray-300">{text33}</h3>
              <p>{text34}</p>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <h3 className="font-bold uppercase text-gray-300 mb-2">{text35}</h3>
          <div className="flex justify-center space-x-4 text-2xl">
            <a href="https://web.facebook.com/Asmaabahaki" className="cursor-pointer text-[#ddebed]"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/asmaa-bahaki-51269b252/" className="cursor-pointer text-[#ddebed]"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://www.youtube.com/@as.bk.dev0" className="cursor-pointer text-[#ddebed]"><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div className="mt-8 lg:mt-0 lg:ml-12 w-full lg:w-2/3">
        <img
          src="https://static.sayidaty.net/styles/1375_scale/public/2024-02/325755.jpeg"
          alt="Happy woman hugging a dog"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>
    </div>
    
      </section>
       
  
                </div>

            )}
        </>
    );
}

export default Home;

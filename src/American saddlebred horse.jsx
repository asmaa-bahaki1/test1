import React from "react";
import logo from './logo.png';
import img9 from './img9.png';
import img24 from './img24.png';
import img25 from './img25.png';
import img26 from './img26.png';

function Americansaddlebredhorse({ text, text1 }) {

    return (
        <>
                <div className="bg-white">
                    <header className="bg-[#ddebed] h-16">
                        <nav className="mx-auto flex max-w-7xl items-center justify-between h-22 p-4 lg:px-8">
                            <div className="flex lg:flex-1">
                               <a href="/"><img className="w-13 -mt-3 cursor-pointer" src={logo} alt="Logo" /></a>
                            </div>
                        </nav>
                    </header>
   
                    <div className="bg-white">  
            <div class="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="flex flex-col items-center">
                <img
                  src={img9}
                  alt=""
                  class="w-133 h-162 object-cover rounded-xl"
                />
              </div>
        
              <div class="space-y-4">
                <h2 class="text-xl mt-7 font-semibold">{text}</h2>
                <div class="flex items-center mt-11 space-x-2">
                  <span class="text-sm text-black">{text1}</span>
                </div>
      
               <div class="flex mt-24 space-x-9">
                    <img
                      src={img24}
                      alt=""
                      class="w-20 h-24 object-cover rounded-md"
                    />
                    <img
                      src={img25}
                      alt=""
                      class="w-20 h-24 object-cover rounded-md"
                    />
                    <img
                      src={img26}
                      alt=""
                      class="w-20 h-24 object-cover rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
        </div>
   

        </>
    );
}

export default Americansaddlebredhorse;

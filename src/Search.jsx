import React, { useState } from "react";
import logo from './logo.png';
import data from "./TemplateData.json";
import data1 from "./TemplateData1.json";

function Search( ) {
  const [searchTerm, setSearchTerm] = useState("");

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
                </div>
                <div className="flex flex-col bg-white items-center p-4">          
      <div className="kolycom w-full max-w-screen-lg">
        <div className="desah mb-6 mt-3">
          <input
            id="searchInput"
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="w-full text-[#485354] px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#485354]"
          />
        </div>
        
        {/* Template Containers */}
        {[
          data,
          data1
        ].map((dataArray, index) => (
          <div className="template_Container grid grid-cols-1 sm:grid-cols-2 mt-17 lg:grid-cols-3 gap-6 mb-8" key={index}>
            {dataArray
              .filter((val) =>
                searchTerm === "" ||
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((val) => (
                <div className="template p-4 border rounded-lg shadow-md hover:shadow-lg transition-all duration-300" key={val.id}>
                  <img src={val.img} alt={`Image for ${val.title}`} className="h-96"/>
                  <h3 className="text-lg mt-13 font-semibold text-black">{val.title}</h3>
                  <a
                    href={val.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#485354] mt-2 inline-block"
                  >
                    View More
                  </a>
                </div>
              ))}
          </div>
        ))}
      </div>     
    </div>
        </>
    );
}

export default Search;

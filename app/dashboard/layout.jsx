"use client";
import React from "react";
import Header from "./_components/Header";
// import file from "../../public/file.jpg";
import file from "../../public/file.png";
import { createContext, useState } from "react";
export const WebCamContext = createContext();

const DashboardLayout = ({ children }) => {
  const [webCamEnabled, setWebCamEnabled] = useState(false);
  return (
    <div className="h-screen bg-gradient-to-r from-teal-200 to-green-200 min-h-screen">
      <div className="">
        <Header file={file} />
        <div className="mx-5 md:mx-20 lg:mx-36">
          <WebCamContext.Provider value={{ webCamEnabled, setWebCamEnabled }}>
            {children}
          </WebCamContext.Provider>
        </div>
    </div>
    </div>

    
  );
};

export default DashboardLayout;

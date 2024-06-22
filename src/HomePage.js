// src/ExistingHtmlComponent.js
import React, { useEffect, useRef } from 'react';
import htmlMain from "./homepage.html";

const HomePage = () => {
    // const iframeRef = useRef(null);

    // useEffect(() => {
    //     const iframe = iframeRef.current;
    //     iframe.src = '/homepage.html';
    // }, []);
    // var __html = require("./homepage.html");
    var __html = htmlMain;
    var template = { __html: __html };

    return (
        // <iframe
        //     ref={iframeRef}
        //     title="Existing HTML"
        //     style={{ width: '100%', height: '100vh', border: 'none' }}
        // />
        <div dangerouslySetInnerHTML={template} />
    );
};

export default HomePage;

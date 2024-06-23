// src/ExistingHtmlComponent.js
import React, { useEffect, useRef } from 'react';
import htmlMain from "./start.html";
// import './homepage.css';

const StartPage = () => {
    var __html = htmlMain;
    var template = { __html: __html };

    return (
        <div dangerouslySetInnerHTML={template} />
    );
};

export default StartPage;

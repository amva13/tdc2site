// src/ExistingHtmlComponent.js
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import htmlMain from "./homepage.html";
import './homepage.css';

const HomePage = () => {
    const navigate = useNavigate();
    const contentRef = useRef(null);
    var __html = htmlMain;
    var template = { __html: __html };

    useEffect(() => {
        const handleLinkClick = (event) => {
          if (event.target.tagName === 'A' && event.target.href.startsWith(window.location.origin)) {
            event.preventDefault();
            navigate(event.target.getAttribute('href'));
          }
        };
    contentRef.current.addEventListener('click', handleLinkClick);
    return () => {
        contentRef.current.removeEventListener('click', handleLinkClick);
      };
    }, [navigate])

    return (
        <div ref={contentRef} dangerouslySetInnerHTML={template} />
    );
};

export default HomePage;

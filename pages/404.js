import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ErrorContent from '../components/Error/ErrorContent';
import Footer from '../components/Layouts/Footer';



const fourZerofour = () => {
  return (
    <>
    <NavbarTwo />
    
    <PageBanner 
        pageTitle="404 Error" 
        BGImage="bg-three"
    />  

    <ErrorContent />

    <Footer />
</>
  )
}

export default fourZerofour

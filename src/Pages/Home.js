import React from "react";
import Navigation from "../Components/Navigation";
import Weather from "../Components/Weather";
import Footer from "../Components/Footer";
import Header from "../Components/Header";


const Home = () => {
    return(
        <>
       <Navigation/>
            <Header />
            <Weather />
            <Footer />
        </>
    );
}

export default Home;
import React, { useState, useEffect } from "react";
import CustomScapeBox from "./CustomScapeBox.jsx";
import { Link } from "react-scroll";

const CustomDynamicHero = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "12.jpg",
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "19.jpg"
    ]
    const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (index >= images.length) {
                setIndex(0);
                return;
            };

            setCurrentImage(new URL(`../assets/${images[index]}`, import.meta.url).href);
            setIndex((prev) => prev + 1 % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [images, index]);

    return (
        <div className="dynamic-hero">
            <div className="text-wrapper">
                <h2>Cuidando do presente <br /> para garantir o futuro.</h2>

                <p>Serviços de limpeza, jardinagem e desinfestação com excelência, pontualidade e profissionalismo.</p>

                <button className="get-order-button">
                    <Link to="contacts" smooth={true} duration={500}>
                        Solicitar orçamento →
                    </Link>
                </button>
            </div>

            <CustomScapeBox />

            <img src={currentImage} />
        </div>
    )
}

export default CustomDynamicHero;
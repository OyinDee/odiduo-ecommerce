import React from 'react'

// import {Link} from "react-router-dom"
import {Routes, Route, useNavigate} from "react-router-dom"
import axios from 'axios'
import {useEffect, useState} from "react"
import img1 from "../images/bag.jpg"
import img2 from "../images/bags.jpg"
import img3 from "../images/bff.jpg"
import img4 from "../images/bheadw.jpg"
import img5 from "../images/bicycle.jpg"
import img6 from "../images/body spray.jpg"
import img8 from "../images/brace.jpg"
import img9 from "../images/bsneak.jpg"
import img10 from "../images/camera.jpg"
import img11 from "../images/cart.png"
import img12 from "../images/charger.jpg"
import img13 from "../images/chargers.jpg"
import Container from "./Container"
import Navbar from './Navbar'
import Footer from './Footer'

export default function Effect() {
    const navigate= useNavigate()
    useEffect(() => {
        const showSlides=()=> {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            slides[slideIndex-1].style.display = "block";
            setTimeout(showSlides, 5000);
        }
        showSlides()
    }, [])

        let slideIndex = 0;


           
        return (
            <>
        <div className="slideshow-container">
                <Container dynimage={img11}></Container>
                <Container dynimage={img12}></Container>
                <Container dynimage={img13}></Container>
                <Container dynimage={img5}></Container>
                <Container dynimage={img6}></Container>
                <Container dynimage={img8}></Container>
                <Container dynimage={img9}></Container>
                <Container dynimage={img10}></Container>
                <Container dynimage={img1}></Container>
                <Container dynimage={img2}></Container>
                <Container dynimage={img3}></Container>
                <Container dynimage={img4}></Container>
        </div>
       </>
)

}
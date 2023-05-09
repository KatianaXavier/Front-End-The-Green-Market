import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carrossel.css'


const items = [
    <div className="img1" ></div>,
    <div className="img2" ></div>,
    <div className="img3" ></div>,
    <div className="img4" ></div>,
    <div className="img5" ></div>,
    <div className="img6" ></div>,
];

export const Carrossel= () => (
    <AliceCarousel
    mouseTracking
    items={items}
    infinite={true}
    animationDuration={8500}
    disableButtonsControls
    controlsStrategy="responsive"
    autoPlayStrategy='action'
    autoPlay={true}
    />
);
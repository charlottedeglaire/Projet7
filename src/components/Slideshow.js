import React, { useEffect, useState } from "react";

const widthSpan = 100;

const Slideshow = ({ images }) => {
    const right_arrow = <i className="fa-solid fa-chevron-right"></i>;
    const left_arrow = <i className="fa-solid fa-chevron-left"></i>;
    const displayPictures = images.map((image, index) => {
        return (
            <div className="slide" key={index} id={`carouselitem${index}`}>
                <img src={image} alt="logement" />
            </div>
        );
    });
    const [sliderPosition, setSliderPosition] = useState(0);

    const prevSlide = () => {
        let newPosition = sliderPosition;
        if (newPosition > 0) {
            newPosition = newPosition - 1;
        } else if (newPosition === 0) {
            newPosition = images.length - 1;
        }
        translateFullSlides(newPosition);
        setSliderPosition(newPosition);
    };
    const nextSlide = () => {
        let newPosition = sliderPosition;
        if (newPosition < images.length - 1) {
            newPosition = newPosition + 1;
        } else if (newPosition === images.length - 1) {
            newPosition = 0;
        }
        translateFullSlides(newPosition);
        setSliderPosition(newPosition);
    };

    const translateFullSlides = (newPosition) => {
        let toTranslate = -widthSpan * newPosition;
        for (let i = 0; i < images.length; i++) {
            document.getElementById(
                `carouselitem${i}`
            ).style.transform = `translateX(${toTranslate}%)`;
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3500);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sliderPosition]);

    if (images.length > 1) {
        return (
            <div className="carousel_display">
                <div className="left_arrow" onClick={prevSlide}>
                    {left_arrow}
                </div>
                <div className="counter">
                    <p>
                        {sliderPosition + 1} / {images.length}
                    </p>
                </div>
                <div className="right_arrow" onClick={nextSlide}>
                    {right_arrow}
                </div>
                <div className="display_frame">{displayPictures}</div>
            </div>
        );
    } else {
        return (
            <div className="carousel_display">
                <div className="display_frame">{displayPictures}</div>
            </div>
        );
    }
};

export default Slideshow;

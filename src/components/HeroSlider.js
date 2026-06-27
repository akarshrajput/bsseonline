"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/hero_image_1782533247987.png",
  "/schools_hero_bg_1782534291875.png",
  "/media__1782532746302.png"
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="hero slider-container">
      {images.map((src, index) => (
        <div
          key={index}
          className={`slider-slide ${index === currentIndex ? "active" : ""}`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            priority={index === 0}
            style={{ objectFit: 'cover' }}
          />
        </div>
      ))}
      
      <button className="slider-btn prev" onClick={goToPrev}>
        &#10094;
      </button>
      <button className="slider-btn next" onClick={goToNext}>
        &#10095;
      </button>
      
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

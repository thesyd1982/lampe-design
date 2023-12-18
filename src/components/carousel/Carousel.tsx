import { SlideProps } from '../../types/commonTypes';
import "./carousel.scss"
import { useState, useEffect } from "react";

interface CarouselProps {
slides: SlideProps[]
}
const Carousel = (props: CarouselProps) => {
  const { slides: slds } = props;
  const [slides, setSlides] = useState(slds);
  const [isPaused, setPaused] = useState(false);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    if (!isPaused) {
      setSlides((prevSlides) => [...prevSlides.slice(1), prevSlides[0]]);
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
      console.log("nextSlide");
    }
  };

  const prevSlide = () => {
    if (!isPaused) {
      setSlides((prevSlides) => [prevSlides[prevSlides.length - 1], ...prevSlides.slice(0, -1)]);
      setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
      console.log("prevSlide");
    }
  };

  const pauseSlider = () => {
    setPaused(true);
    console.log("slider paused!");
  };

  const resumeSlider = () => {
    setPaused(false);
    console.log("slider resumed!");
  };

  const resetTimer = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      startTimer();
    }
  };

  const startTimer = () => {
    const id = setInterval(() => {
      nextSlide();
    }, 10000);
    setIntervalId(id);
  };

const goToSlide = (index: number) => {
    setSlides((prevSlides) => {
      const diff = (index - activeIndex + slides.length) % slides.length;
      return [...prevSlides.slice(diff), ...prevSlides.slice(0, diff)];
    });
    setActiveIndex(index);
};

    return (
            <div className="carousel" id='carousel'>
            <div className="carousel__slider">
            {slides.map((e,i) => {
                    return  <div className="slide" key={i}  onMouseEnter={pauseSlider} onMouseLeave={resumeSlider }>
                    <img src={e.image} className="slide__image"/>
                    <div className="slide__content">
                    <h3 className="title">{e.title}</h3>
                    <p className="description">{e.description}</p>
                    {e.children}
                    </div>
                    </div>
                    })}
            </div>

            <div className="carousel-control left" onClick={prevSlide}>
            <div className="arrow left"></div>
            </div>

            <div className="carousel-control right" onClick={nextSlide}>
            <div className="arrow right"></div>
            </div>

           <ol className="carousel-indicators" >
        {slides.map((_, i) => (
          <li key={i} className={`${i === activeIndex ? 'active' : ''}`} onClick={() => goToSlide(i)}></li>
        ))}
      </ol>
        </div>
        )
}
export default Carousel

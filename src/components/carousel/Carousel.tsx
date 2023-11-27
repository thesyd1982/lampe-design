import { Slide } from "./slide"
import { SlideProps } from '../../types/commonTypes';
import "./carousel.scss"
import { useState } from "react";

interface CarouselProps {
slides: SlideProps[]
}
const Carousel = (props: CarouselProps) => {
    const { slides } = props
        const [slideIndex, setSlideIndex] = useState(0)

        function showNextSlide() {
            setSlideIndex(index => {
                    if (index === slides.length - 1) return 0
                    return index + 1
                    })
        }

    function showPrevSlide() {
        setSlideIndex(index => {
                if (index === 0) return slides.length - 1
                return index - 1
                })
    }
    return (

            <div className="carousel" id='carousel'>
            <div className="slider">
            {slides.map((e,i) => {
                    return  <div className="slide"
                    style={{ transform: `translate(${-100 * slideIndex}%)` , transition: "transform 1s ease-in-out"}} key={i}>
                    <img src={e.image}className="slide__image"/>
                    <div className="slide__content">
                    <h3 className="title">{e.title}</h3>
                    <p className="description">{e.description}</p>
                    {e.children}
                    </div>
                    </div>

                    // return < Slide
                    //         id={slideIndex}
                    //         title={e.title}
                    //         description={e.description}
                    //         image={e.image}
                    //        active={e.active}>
                    //       {e.children}
                    //       </Slide>
                    })}
    </div>

        <div className="carousel-control left" onClick={showPrevSlide}>
        <div className="arrow left"></div>
        </div>

        <div className="carousel-control right" onClick={showNextSlide}>
        <div className="arrow right"></div>
        </div>

        <ol className="carousel-indicators">
        {
            slides.map(e =>
                    <li className={`${e.active ? "active" : ""}`}></li>)
        }
    </ol>
        </div>
        )
}
export default Carousel

import React, { useRef } from "react";
import Slider from "react-slick";
import styles from './index.module.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import arrowPrevDefault from '../../../assets/images/google/workspace/carrousel-1/arrow-right.png'
import arrowNextDefault from '../../../assets/images/google/workspace/carrousel-1/arrow-left.png'



const Dots = ({ dataLength = [] }) => {
    return (
        <ul class="slick-dots" style="display: block;">
            <li class="slick-active"><button>1</button></li>
            <li class=""><button>2</button></li>
            <li class=""><button>3</button></li>
            <li class=""><button>4</button></li>
        </ul>
    );
}

const CarrouselGoogle = ({ data, arrowPrev = '', arrowNext = '', slideShow = 1, carrouselType = '' }) => {
    const slider = useRef(null)

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: slideShow,
        slidesToScroll: slideShow,
        // dotsClass: styles['slick-dots'],
        appendDots: dots => (
            <div>
                <ul className={styles.dots}>{dots}</ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const prev = () => {
        slider.current.slickPrev()
    }

    const next = () => {
        slider.current.slickNext()
    }



    return (
        <div className={styles.carrousel + ' ' + `${styles[carrouselType]}`}>
            <Slider {...settings} ref={slider}>
                {data.map((item, index) => {
                    return (
                        <div className={styles.item} value={index + 1} key={index}>
                            <div className={styles['item-content']}>
                                {item.imgCarrousel ? (<img src={item.imgCarrousel} alt="" />) : null}

                                {(item.title || item.text) && (
                                    <div className={styles['item-text']}>
                                        {item.title && <h3>{item.title}</h3>}
                                        {item.text && <p dangerouslySetInnerHTML={{ __html: item.text}}></p>}
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </Slider>
            <div className={styles.controls}>
                <button className={styles.prev} onClick={prev}>
                    <img src={arrowPrev ? arrowPrev : arrowPrevDefault} alt="voltar" draggable="false" />
                </button>
                <button className={styles.next} onClick={next}>
                    <img src={arrowNext ? arrowNext : arrowNextDefault} alt="avançar" draggable="false" />
                </button>
            </div>
        </div>
    )
}

export default CarrouselGoogle
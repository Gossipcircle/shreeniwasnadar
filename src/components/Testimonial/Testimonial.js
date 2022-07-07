import React from 'react';
import Title from '../title/Title';
import Slider from "react-slick";
import { FaQuoteLeft } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonial.scss';

const ReviewBox = ({ name, expert, review }) => (
    <div className="testimonial__div mx-2 px-3 pb-3 o-border-purple d-flex flex-column position-relative">
        <div className="fa-quote-left text-white o-font-lg text-center o-bg-purple position-absolute rounded-circle">
            <FaQuoteLeft />
        </div>
        <strong>{name}</strong>
        <small className="text-muted mb-3">{expert}</small>
        <p className="text-justify o-font-sm">{review}</p>
    </div>
);

class Testimonial extends React.Component{

    state = {
        testimonials: [
            {
                id: 1,
                name: 'Yuki Software',
                expert: 'Client',
                review: '"Shreeniwas is a good skilled person as well as he learnt quickly. Timing response is very much good in him. Good job."',
            },
            {
                id: 2,
                name: 'Yuki Software',
                expert: 'Graphist & Designer',
                review: '"Shreeniwas is a good skilled person as well as he learnt quickly. Timing response is very much good in him. Good job."',
            },
            {
                id: 3,
                name: 'Yuki Software',
                expert: 'Software Engineer',
                review: '"Shreeniwas is a good skilled person as well as he learnt quickly. Timing response is very much good in him. Good job."',
            },
        ]
    }

    render(){
        const settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 1000,
            autoplaySpeed: 3000,
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 992,
                settings: {
                  slidesToShow: 1,
                }
              }]
        };
        return(
            <>
                <Title>Reviews</Title>
                <div className="testimonial mb-5">
                <Slider {...settings}>
                    {
                        this.state.testimonials.map(item => (
                            <ReviewBox key={item.id} {...item} />
                        ))
                    }
                </Slider>
                </div>
            </>
        );
    }
}

export default Testimonial;
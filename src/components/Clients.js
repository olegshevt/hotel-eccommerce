import React from 'react';
import Slider from "react-slick";

export const Clients = () => {

    const clients = ['https://banner2.cleanpng.com/20180517/obq/kisspng-amazon-com-amazon-alexa-retail-amazon-prime-order-amazon-5afd8d9f145d12.3907629815265663030834.jpg', 'https://banner2.cleanpng.com/20180517/obq/kisspng-amazon-com-amazon-alexa-retail-amazon-prime-order-amazon-5afd8d9f145d12.3907629815265663030834.jpg', 'https://banner2.cleanpng.com/20180517/obq/kisspng-amazon-com-amazon-alexa-retail-amazon-prime-order-amazon-5afd8d9f145d12.3907629815265663030834.jpg', 'https://banner2.cleanpng.com/20180517/obq/kisspng-amazon-com-amazon-alexa-retail-amazon-prime-order-amazon-5afd8d9f145d12.3907629815265663030834.jpg', 'https://banner2.cleanpng.com/20180517/obq/kisspng-amazon-com-amazon-alexa-retail-amazon-prime-order-amazon-5afd8d9f145d12.3907629815265663030834.jpg', 'https://banner2.cleanpng.com/20180517/obq/kisspng-amazon-com-amazon-alexa-retail-amazon-prime-order-amazon-5afd8d9f145d12.3907629815265663030834.jpg']
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
    };
    return (
        <div className="blockTest">
            <div className="pairs-box">
                <div className="container">
                    <div className="ttl-box">Our clients</div>
                </div>
                <Slider {...settings}>
                    {clients.map((name, index) => (<div key={index}><img className="clientLogo" src={name} /></div>))}


                </Slider>
            </div>
        </div>
    )
}
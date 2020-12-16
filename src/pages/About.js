import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Breadcrumbs } from '../components/Breadcrumbs';


export const About = () => {


    return (
        <>
            <Header onSearchProduct={null} />
            <div class="page-body">
                <div class="container">
                    <Breadcrumbs />
                    <h1>About</h1>

                    <div class="about-box">
                        <div class="about-box--left">
                            <article>
                                <h3>Lorem Ipsum</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </article>
                            <article>
                                <h3>Lorem Ipsum</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </article>
                            <article>
                                <h3>Lorem Ipsum</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            </article>
                        </div>
                        <div class="about-box--right">
                            <div class="slider-gallery">
                                <div class="list">
                                    <div class="item"><img src="files/screen-1.png" alt="" /></div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )

}
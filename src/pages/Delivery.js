import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Breadcrumbs } from '../components/Breadcrumbs';

export const Delivery = () => {

    return (
        <>
            <Header onSearchProduct={null} />
            <div class="page-body">
                <div class="container">
                    <Breadcrumbs />
                    <h1>Delivery</h1>

                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

                    <div class="row">
                        <div class="column">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}
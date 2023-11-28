import React from 'react'
import Logo from '../src/assets/images/icon-mushroom.png'
import Hero from '../src/assets/images/albinoA+.png'
import PlaceH from '../src/assets/images/placeh.png'


function home() {

    return (
        <>
            <div className="container-fluid px-5 header sticky-top">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2  border-bottom border-dark">
                    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img src={Logo} alt='' className='w-25 h-25' />
                    </a>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/home" className="nav-link px-2 menu-color">Home</a></li>
                        <li><a href="/Products" className="nav-link px-2 menu-color">Products</a></li>
                        <li><a href="#" className="nav-link px-2 menu-color">About</a></li>
                    </ul>

                    <div className="col-md-3 text-end">
                        <i className='bi bi-person fs-3 me-4'></i>
                        <i className='bi bi-cart fs-3'>0</i>
                    </div>
                </header>
            </div>

            <div className="container-fluid col-xxl-8 px-4 py-5 hero-container">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-5">
                        <img src={Hero} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6 hero-text">
                        <h1 className="display-1 fw-bold lh-1 mb-3">
                            <span>Tu tienda Online De Hongos</span>
                        </h1>
                        <div className='d-flex align-items-center my-5'>
                            <img src={Logo} alt='' className='me-3' />
                            <p className='fw-bold'>
                                Nosotros enviamos Hongos Frescos
                                <br></br>
                                hasta la puerta de tu casa.
                            </p>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-warning btn-lg px-4 me-md-2 rounded-2">Comprar Hongos</button>
                            <button type="button" className="btn btn-light btn-lg px-4 rounded-0">Ver Productos</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-4 py-5 delivery-process" >
                <h2 className='text-center display-4 mt-4 fw-bold'>Como Funcionan Los Pedidos</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-sm-2 row-cols-md-3">

                    <div className="col px-5 text-center">
                        <div className="mb-3">
                            <img src={PlaceH} alt='' className='w-50 h-50' />
                        </div>
                        <h2>Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>

                    </div>
                    <div className=" col px-5 text-center">
                        <div className="mb-3">
                            <img src={PlaceH} alt='' className='w-50 h-50' />
                        </div>
                        <h2>Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>

                    </div>
                    <div className="col px-5 text-center">
                        <div className="mb-3">
                            <img src={PlaceH} alt='' className='w-50 h-50' />
                        </div>
                        <h2>Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>

                    </div>
                </div>
            </div>

            <div className="container-fluid px-4 py-5 benef" >
                <h2 className='text-center display-4 mt-4 fw-bold'>Beneficios principales</h2>
                <div className='container mt-5'>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card shadow-sm">
                                <img src={PlaceH} alt='' />

                                <div className="card-body d-flex">
                                    <img src={PlaceH} alt='' className='w-25 h-25' />
                                    <p>
                                        <strong>Beneficios</strong>
                                        <p>Multiples beneficios en cuanto a depresion y ansiedad</p>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img src={PlaceH} alt='' />

                                <div className="card-body d-flex">
                                    <img src={PlaceH} alt='' className='w-25 h-25' />
                                    <p>
                                        <strong>Beneficios</strong>
                                        <p>Multiples beneficios en cuanto a depresion y ansiedad</p>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img src={PlaceH} alt='' />

                                <div className="card-body d-flex">
                                    <img src={PlaceH} alt='' className='w-25 h-25' />
                                    <p>
                                        <strong>Beneficios</strong>
                                        <p>Multiples beneficios en cuanto a depresion y ansiedad</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


           


        </>
    )
}

export default home
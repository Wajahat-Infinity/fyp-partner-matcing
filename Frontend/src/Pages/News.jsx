import React from 'react'
import { Helmet } from 'react-helmet'
import Title from './include/Title'
import CtaArea from './include/CtaArea'

const News = () => {
    return (
        <>
            <Helmet><title>News</title></Helmet>
            <Title />

            <section id="news_main_arae" className="section_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="section_heading_center">
                                <h2>Latest travel news</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="news_four_card">
                                    <div className="news_four_card_img">
                                        <a href="/news-details">
                                            <img src="assets/img/news/news-1.png" alt="img" />
                                        </a>
                                    </div>
                                    <div className="news_four_card_conrent">
                                        <div className="new_four_card_lists">
                                            <ul>
                                                <li>
                                                    {" "}
                                                    <span>Lifetyle</span> <i className="fas fa-circle" />
                                                </li>
                                                <li>
                                                    24th January <i className="fas fa-circle" />
                                                </li>
                                                <li>5min read</li>
                                            </ul>
                                        </div>
                                        <h3>
                                            <a href="/news-details">
                                                Revolutionising the travel industry, one partnership at a time
                                            </a>
                                        </h3>
                                        <p>
                                            Irure enim eiusmod ipsum do Lorem sit consectetur enim
                                            consectetur. Nostrud ipsum eiusmod eiusmod culpa anim excepteur.
                                        </p>
                                        <a href="/news-details">Read more...</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="news_four_card">
                                    <div className="news_four_card_img">
                                        <a href="/news-details">
                                            <img src="assets/img/news/news-2.png" alt="img" />
                                        </a>
                                    </div>
                                    <div className="news_four_card_conrent">
                                        <div className="new_four_card_lists">
                                            <ul>
                                                <li>
                                                    {" "}
                                                    <span>Lifetyle</span> <i className="fas fa-circle" />
                                                </li>
                                                <li>
                                                    24th January <i className="fas fa-circle" />
                                                </li>
                                                <li>Connley Jimmy</li>
                                            </ul>
                                        </div>
                                        <h3>
                                            <a href="/news-details">
                                                Nostrud occaecat reprehenderit elit pariatur do occaecat.
                                            </a>
                                        </h3>
                                        <p>
                                            Irure enim eiusmod ipsum do Lorem sit consectetur enim
                                            consectetur. Nostrud ipsum eiusmod eiusmod culpa anim excepteur.
                                        </p>
                                        <a href="/news-details">Read more...</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="news_four_card">
                                    <div className="news_four_card_img">
                                        <a href="/news-details">
                                            <img src="assets/img/news/news-4.png" alt="img" />
                                        </a>
                                    </div>
                                    <div className="news_four_card_conrent">
                                        <div className="new_four_card_lists">
                                            <ul>
                                                <li>
                                                    {" "}
                                                    <span>Lifetyle</span> <i className="fas fa-circle" />
                                                </li>
                                                <li>
                                                    24th January <i className="fas fa-circle" />
                                                </li>
                                                <li>Aston Martin</li>
                                            </ul>
                                        </div>
                                        <h3>
                                            <a href="/news-details">
                                                Ea non officia minim cupidatat culpa et reprehenderit esse ea
                                            </a>
                                        </h3>
                                        <p>
                                            Irure enim eiusmod ipsum do Lorem sit consectetur enim
                                            consectetur. Nostrud ipsum eiusmod eiusmod culpa anim excepteur.
                                        </p>
                                        <a href="/news-details">Read more...</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="news_four_card">
                                    <div className="news_four_card_img">
                                        <a href="/news-details">
                                            <img src="assets/img/news/news-2.png" alt="img" />
                                        </a>
                                    </div>
                                    <div className="news_four_card_conrent">
                                        <div className="new_four_card_lists">
                                            <ul>
                                                <li>
                                                    {" "}
                                                    <span>Lifetyle</span> <i className="fas fa-circle" />
                                                </li>
                                                <li>
                                                    24th January <i className="fas fa-circle" />
                                                </li>
                                                <li>Simon Donald</li>
                                            </ul>
                                        </div>
                                        <h3>
                                            <a href="/news-details">
                                                Anim labore dolor mollit esse do labore adipisicing fugiat
                                            </a>
                                        </h3>
                                        <p>
                                            Irure enim eiusmod ipsum do Lorem sit consectetur enim
                                            consectetur. Nostrud ipsum eiusmod eiusmod culpa anim excepteur.
                                        </p>
                                        <a href="/news-details">Read more...</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="news_four_card">
                                    <div className="news_four_card_img">
                                        <a href="/news-details">
                                            <img src="assets/img/news/news-3.png" alt="img" />
                                        </a>
                                    </div>
                                    <div className="news_four_card_conrent">
                                        <div className="new_four_card_lists">
                                            <ul>
                                                <li>
                                                    {" "}
                                                    <span>Lifetyle</span> <i className="fas fa-circle" />
                                                </li>
                                                <li>
                                                    24th January <i className="fas fa-circle" />
                                                </li>
                                                <li>Jesoca Aliston</li>
                                            </ul>
                                        </div>
                                        <h3>
                                            <a href="/news-details">
                                                Ex ad cupidatat aliquip nostrud duis deserunt culpa esse
                                            </a>
                                        </h3>
                                        <p>
                                            Irure enim eiusmod ipsum do Lorem sit consectetur enim
                                            consectetur. Nostrud ipsum eiusmod eiusmod culpa anim excepteur.
                                        </p>
                                        <a href="/news-details">Read more...</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="news_four_card">
                                    <div className="news_four_card_img">
                                        <a href="/news-details">
                                            <img src="assets/img/news/news-4.png" alt="img" />
                                        </a>
                                    </div>
                                    <div className="news_four_card_conrent">
                                        <div className="new_four_card_lists">
                                            <ul>
                                                <li>
                                                    {" "}
                                                    <span>Lifetyle</span> <i className="fas fa-circle" />
                                                </li>
                                                <li>
                                                    24th January <i className="fas fa-circle" />
                                                </li>
                                                <li>Patricia Ramsice</li>
                                            </ul>
                                        </div>
                                        <h3>
                                            <a href="/news-details">
                                                Occaecat nulla anim cillum anim id irure nostrud elit
                                                excepteur nisi
                                            </a>
                                        </h3>
                                        <p>
                                            Irure enim eiusmod ipsum do Lorem sit consectetur enim
                                            consectetur. Nostrud ipsum eiusmod eiusmod culpa anim excepteur.
                                        </p>
                                        <a href="/news-details">Read more...</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="news_four_card">
                                    <div className="news_four_card_img">
                                        <a href="/news-details">
                                            <img src="assets/img/news/news-5.png" alt="img" />
                                        </a>
                                    </div>
                                    <div className="news_four_card_conrent">
                                        <div className="new_four_card_lists">
                                            <ul>
                                                <li>
                                                    {" "}
                                                    <span>Lifetyle</span> <i className="fas fa-circle" />
                                                </li>
                                                <li>
                                                    24th January <i className="fas fa-circle" />
                                                </li>
                                                <li>Darrell Gough</li>
                                            </ul>
                                        </div>
                                        <h3>
                                            <a href="/news-details">
                                                Lahore nisei magna cupidity non quits eu non eu ad non
                                            </a>
                                        </h3>
                                        <p>
                                            Irure enim eiusmod ipsum do Lorem sit consectetur enim
                                            consectetur. Nostrud ipsum eiusmod eiusmod culpa anim excepteur.
                                        </p>
                                        <a href="/news-details">Read more...</a>
                                    </div>
                                </div>
                            </div>{" "}
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="news_four_card">
                                    <div className="news_four_card_img">
                                        <a href="/news-details">
                                            <img src="assets/img/news/news-6.png" alt="img" />
                                        </a>
                                    </div>
                                    <div className="news_four_card_conrent">
                                        <div className="new_four_card_lists">
                                            <ul>
                                                <li>
                                                    {" "}
                                                    <span>Lifetyle</span> <i className="fas fa-circle" />
                                                </li>
                                                <li>
                                                    24th January <i className="fas fa-circle" />
                                                </li>
                                                <li>Ain Giroud</li>
                                            </ul>
                                        </div>
                                        <h3>
                                            <a href="/news-details">
                                                Culpa ipsum id dolore ad qui anim denom consequat cupidatat
                                                adipisicing
                                            </a>
                                        </h3>
                                        <p>
                                            Irure enim eiusmod ipsum do Lorem sit consectetur enim
                                            consectetur. Nostrud ipsum eiusmod eiusmod culpa anim excepteur.
                                        </p>
                                        <a href="/news-details">Read more...</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="pagination_area">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">«</span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            1
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            2
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            3
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">»</span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <CtaArea />
        </>

    )
}

export default News
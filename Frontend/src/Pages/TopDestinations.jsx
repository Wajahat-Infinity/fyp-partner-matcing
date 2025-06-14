import React from 'react'
import { Helmet } from 'react-helmet'
import Title from './include/Title'
import CtaArea from './include/CtaArea'

const TopDestinations = () => {
    return (
        <>
            <Helmet><title>Top Destinations</title></Helmet>
            <Title />


            <section id="theme_search_form_tour">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="theme_search_form_area">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="tour_search_form">
                                            <form action="#!">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                                        <div className="flight_Search_boxed">
                                                            <p>Destination</p>
                                                            <input type="text" placeholder="Where are you going?" />
                                                            <span>Where are you going?</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                                        <div className="form_search_date">
                                                            <div className="flight_Search_boxed date_flex_area">
                                                                <div className="Journey_date">
                                                                    <p>Journey date</p>
                                                                    <input type="date" defaultValue="2022-05-03" />
                                                                    <span>Thursday</span>
                                                                </div>
                                                                <div className="Journey_date">
                                                                    <p>Return date</p>
                                                                    <input type="date" defaultValue="2022-05-05" />
                                                                    <span>Thursday</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                                                        <div className="flight_Search_boxed dropdown_passenger_area">
                                                            <p>Passenger, Class </p>
                                                            <div className="dropdown">
                                                                <button
                                                                    className="dropdown-toggle final-count"
                                                                    data-toggle="dropdown"
                                                                    type="button"
                                                                    id="dropdownMenuButton1"
                                                                    data-bs-toggle="dropdown"
                                                                    aria-expanded="false"
                                                                >
                                                                    0 Passenger
                                                                </button>
                                                                <div
                                                                    className="dropdown-menu dropdown_passenger_info"
                                                                    aria-labelledby="dropdownMenuButton1"
                                                                >
                                                                    <div className="traveller-calulate-persons">
                                                                        <div className="passengers">
                                                                            <h6>Passengers</h6>
                                                                            <div className="passengers-types">
                                                                                <div className="passengers-type">
                                                                                    <div className="text">
                                                                                        <span className="count pcount">2</span>
                                                                                        <div className="type-label">
                                                                                            <p>Adult</p>
                                                                                            <span>12+ yrs</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="button-set">
                                                                                        <button type="button" className="btn-add">
                                                                                            <i className="fas fa-plus" />
                                                                                        </button>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="btn-subtract"
                                                                                        >
                                                                                            <i className="fas fa-minus" />
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="passengers-type">
                                                                                    <div className="text">
                                                                                        <span className="count ccount">0</span>
                                                                                        <div className="type-label">
                                                                                            <p className="fz14 mb-xs-0">Children</p>
                                                                                            <span>2 - Less than 12 yrs</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="button-set">
                                                                                        <button
                                                                                            type="button"
                                                                                            className="btn-add-c"
                                                                                        >
                                                                                            <i className="fas fa-plus" />
                                                                                        </button>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="btn-subtract-c"
                                                                                        >
                                                                                            <i className="fas fa-minus" />
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="passengers-type">
                                                                                    <div className="text">
                                                                                        <span className="count incount">0</span>
                                                                                        <div className="type-label">
                                                                                            <p className="fz14 mb-xs-0">Infant</p>
                                                                                            <span>Less than 2 yrs</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="button-set">
                                                                                        <button
                                                                                            type="button"
                                                                                            className="btn-add-in"
                                                                                        >
                                                                                            <i className="fas fa-plus" />
                                                                                        </button>
                                                                                        <button
                                                                                            type="button"
                                                                                            className="btn-subtract-in"
                                                                                        >
                                                                                            <i className="fas fa-minus" />
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <span>Business</span>
                                                        </div>
                                                    </div>
                                                    <div className="top_form_search_button">
                                                        <button className="btn btn_theme btn_md">Search</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="top_testinations" className="section_padding">
                <div className="container">
                    {/* Section Heading */}
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="section_heading_center">
                                <h2>19 destinations found</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="left_side_search_area">
                                <div className="left_side_search_boxed">
                                    <div className="left_side_search_heading">
                                        <h5>Filter by price</h5>
                                    </div>
                                    <div className="filter-price">
                                        <div
                                            id="price-slider"
                                            className="noUi-target noUi-ltr noUi-horizontal"
                                        >
                                            <div className="noUi-base">
                                                <div className="noUi-connects">
                                                    <div
                                                        className="noUi-connect"
                                                        style={{ transform: "translate(0%, 0px) scale(0.75, 1)" }}
                                                    />
                                                </div>
                                                <div
                                                    className="noUi-origin"
                                                    style={{ transform: "translate(-100%, 0px)", zIndex: 5 }}
                                                >
                                                    <div
                                                        className="noUi-handle noUi-handle-lower"
                                                        data-handle={0}
                                                        tabIndex={0}
                                                        role="slider"
                                                        aria-orientation="horizontal"
                                                        aria-valuemin={0.0}
                                                        aria-valuemax={550.0}
                                                        aria-valuenow={0.0}
                                                        aria-valuetext="$0"
                                                    >
                                                        <div className="noUi-touch-area" />
                                                        <div className="noUi-tooltip">$0</div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="noUi-origin"
                                                    style={{ transform: "translate(-25%, 0px)", zIndex: 4 }}
                                                >
                                                    <div
                                                        className="noUi-handle noUi-handle-upper"
                                                        data-handle={1}
                                                        tabIndex={0}
                                                        role="slider"
                                                        aria-orientation="horizontal"
                                                        aria-valuemin={200.0}
                                                        aria-valuemax={1000.0}
                                                        aria-valuenow={750.0}
                                                        aria-valuetext="$750"
                                                    >
                                                        <div className="noUi-touch-area" />
                                                        <div className="noUi-tooltip">$750</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="apply" type="button">
                                        Apply
                                    </button>
                                </div>
                                <div className="left_side_search_boxed">
                                    <div className="left_side_search_heading">
                                        <h5>Filter by Review</h5>
                                    </div>
                                    <div className="filter_review">
                                        <form className="review_star">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="flexCheckDefault"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault"
                                                >
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="flexCheckDefault1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault1"
                                                >
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_asse" />
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="flexCheckDefault2"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault2"
                                                >
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_asse" />
                                                    <i className="fas fa-star color_asse" />
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="flexCheckDefault3"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault3"
                                                >
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_asse" />
                                                    <i className="fas fa-star color_asse" />
                                                    <i className="fas fa-star color_asse" />
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    id="flexCheckDefault5"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexCheckDefault5"
                                                >
                                                    <i className="fas fa-star color_theme" />
                                                    <i className="fas fa-star color_asse" />
                                                    <i className="fas fa-star color_asse" />
                                                    <i className="fas fa-star color_asse" />
                                                    <i className="fas fa-star color_asse" />
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="left_side_search_boxed">
                                    <div className="left_side_search_heading">
                                        <h5>Tour type</h5>
                                    </div>
                                    <div className="tour_search_type">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="flexCheckDefaultf1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefaultf1"
                                            >
                                                <span className="area_flex_one">
                                                    <span>Ecotourism</span>
                                                    <span>17</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="flexCheckDefaultf2"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefaultf2"
                                            >
                                                <span className="area_flex_one">
                                                    <span>Escorted tour </span>
                                                    <span>14</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="flexCheckDefaultf3"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefaultf3"
                                            >
                                                <span className="area_flex_one">
                                                    <span>Family trips</span>
                                                    <span>30</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="flexCheckDefaultf4"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefaultf4"
                                            >
                                                <span className="area_flex_one">
                                                    <span>Group tour</span>
                                                    <span>22</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="flexCheckDefaultf5"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefaultf5"
                                            >
                                                <span className="area_flex_one">
                                                    <span>City trips</span>
                                                    <span>41</span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="left_side_search_boxed">
                                    <div className="left_side_search_heading">
                                        <h5>Facilities</h5>
                                    </div>
                                    <div className="tour_search_type">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="flexCheckDefaultt1"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefaultt1"
                                            >
                                                <span className="area_flex_one">
                                                    <span>Gymnasium</span>
                                                    <span>20</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="flexCheckDefaultt2"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefaultt2"
                                            >
                                                <span className="area_flex_one">
                                                    <span>Mountain Bike</span>
                                                    <span>14</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="flexCheckDefaultt3"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefaultt3"
                                            >
                                                <span className="area_flex_one">
                                                    <span>Wifi</span>
                                                    <span>62</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="flexCheckDefaultt4"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefaultt4"
                                            >
                                                <span className="area_flex_one">
                                                    <span>Aerobics Room</span>
                                                    <span>08</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="flexCheckDefaultt5"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="flexCheckDefaultt5"
                                            >
                                                <span className="area_flex_one">
                                                    <span>Golf Cages</span>
                                                    <span>12</span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="top_destinations_box img_hover">
                                        <div className="heart_destinations">
                                            <i className="fas fa-heart" />
                                        </div>
                                        <a href="/tour-detail">
                                            <img src="assets/img/destination/main-page1.png" alt="img" />
                                        </a>
                                        <div className="top_destinations_box_content">
                                            <h4>
                                                <a href="/tour-detail">Ancient egypt</a>
                                            </h4>
                                            <p>
                                                <span className="review_rating">4.8/5 Excellent</span>{" "}
                                                <span className="review_count">(1214 reviewes)</span>
                                            </p>
                                            <h3>
                                                $99.00 <span>Price starts from</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="top_destinations_box img_hover">
                                        <div className="heart_destinations">
                                            <i className="fas fa-heart" />
                                        </div>
                                        <a href="/tour-detail">
                                            <img src="assets/img/destination/main-page2.png" alt="img" />
                                        </a>
                                        <div className="top_destinations_box_content">
                                            <h4>
                                                <a href="/tour-detail">Explore china</a>
                                            </h4>
                                            <p>
                                                <span className="review_rating">4.8/5 Excellent</span>{" "}
                                                <span className="review_count">(1214 reviewes)</span>
                                            </p>
                                            <h3>
                                                $99.00 <span>Price starts from</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="top_destinations_box img_hover">
                                        <div className="heart_destinations">
                                            <i className="fas fa-heart" />
                                        </div>
                                        <a href="/tour-detail">
                                            <img src="assets/img/destination/main-page3.png" alt="img" />
                                        </a>
                                        <div className="top_destinations_box_content">
                                            <h4>
                                                <a href="/tour-detail">Annapurna</a>
                                            </h4>
                                            <p>
                                                <span className="review_rating">4.8/5 Excellent</span>{" "}
                                                <span className="review_count">(1214 reviewes)</span>
                                            </p>
                                            <h3>
                                                $99.00 <span>Price starts from</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="top_destinations_box img_hover">
                                        <div className="heart_destinations">
                                            <i className="fas fa-heart" />
                                        </div>
                                        <a href="/tour-detail">
                                            <img src="assets/img/destination/main-page4.png" alt="img" />
                                        </a>
                                        <div className="top_destinations_box_content">
                                            <h4>
                                                <a href="/tour-detail">
                                                    Beautiful darjeeling
                                                </a>
                                            </h4>
                                            <p>
                                                <span className="review_rating">4.8/5 Excellent</span>{" "}
                                                <span className="review_count">(1214 reviewes)</span>
                                            </p>
                                            <h3>
                                                $99.00 <span>Price starts from</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="top_destinations_box img_hover">
                                        <div className="heart_destinations">
                                            <i className="fas fa-heart" />
                                        </div>
                                        <a href="/tour-detail">
                                            <img src="assets/img/destination/main-page5.png" alt="img" />
                                        </a>
                                        <div className="top_destinations_box_content">
                                            <h4>
                                                <a href="/tour-detail">Himalaya</a>
                                            </h4>
                                            <p>
                                                <span className="review_rating">4.8/5 Excellent</span>{" "}
                                                <span className="review_count">(1214 reviewes)</span>
                                            </p>
                                            <h3>
                                                $99.00 <span>Price starts from</span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="top_destinations_box img_hover">
                                        <div className="heart_destinations">
                                            <i className="fas fa-heart" />
                                        </div>
                                        <a href="/tour-detail">
                                            <img src="assets/img/destination/main-page6.png" alt="img" />
                                        </a>
                                        <div className="top_destinations_box_content">
                                            <h4>
                                                <a href="/tour-detail">Kathmundu</a>
                                            </h4>
                                            <p>
                                                <span className="review_rating">4.8/5 Excellent</span>{" "}
                                                <span className="review_count">(1214 reviewes)</span>
                                            </p>
                                            <h3>
                                                $99.00 <span>Price starts from</span>
                                            </h3>
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
                    </div>
                </div>
            </section>

            <CtaArea />
        </>
    )
}

export default TopDestinations
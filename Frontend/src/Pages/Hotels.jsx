import React from 'react'
import { Helmet } from 'react-helmet'
import Title from './include/Title'

const Hotels = () => {
  return (
<>
<Helmet><title>Hotels</title></Helmet>
<Title />

<section id="explore_area" className="section_padding">
  <div className="container">
    {/* Section Heading */}
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="section_heading_center">
          <h2>38 hotel found</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3">
        <div className="left_side_search_area">
          <div className="left_side_search_boxed">
            <div className="item_searc_map_area">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.6962663570607!2d89.56355961427838!3d22.813715829827952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff901efac79b59%3A0x5be01a1bc0dc7eba!2sAnd+IT!5e0!3m2!1sen!2sbd!4v1557901943656!5m2!1sen!2sbd" />
            </div>
          </div>
          <div className="left_side_search_boxed">
            <div className="left_side_search_heading">
              <h5>Search by name</h5>
            </div>
            <div className="name_search_form">
              <input
                type="text"
                className="form-control"
                placeholder="e.g Deluxe bus"
              />
              <i className="fas fa-search" />
            </div>
          </div>
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
              <h5>Filter by hotel star</h5>
            </div>
            <div className="filter_review">
              <form className="review_star">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefaulta"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefaulta"
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
                    id="flexCheckDefaulf21"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefaulf21"
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
                    id="flexCheckDefaultf3"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefaultf3"
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
                    id="flexCheckDefaultf4"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefaultf4"
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
                    id="flexCheckDefaultf5"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefaultf5"
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
              <h5>Facilities</h5>
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
                    <span>Wake-up call</span>
                    <span>20</span>
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
                    <span>Flat TV</span>
                    <span>14</span>
                  </span>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefaultaf3"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefaultaf3"
                >
                  <span className="area_flex_one">
                    <span>Vehicle service</span>
                    <span>30</span>
                  </span>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefaultaf4"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefaultaf4"
                >
                  <span className="area_flex_one">
                    <span>Guide service</span>
                    <span>22</span>
                  </span>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefaultaf5"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefaultaf5"
                >
                  <span className="area_flex_one">
                    <span>Internet, Wi-fi</span>
                    <span>41</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="left_side_search_boxed">
            <div className="left_side_search_heading">
              <h5>Hotel service</h5>
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
            <div className="theme_common_box_two">
              <div className="theme_two_box_img">
                <a href="/hotel-details">
                  <img src="assets/img/tab-img/hotel1.png" alt="img" />
                </a>
                <p>
                  <i className="fas fa-map-marker-alt" />
                  New beach, Thailand
                </p>
              </div>
              <div className="theme_two_box_content">
                <h4>
                  <a href="/hotel-details">Kantua hotel, Thailand</a>
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
            <div className="theme_common_box_two">
              <div className="theme_two_box_img">
                <a href="/hotel-details">
                  <img src="assets/img/tab-img/hotel2.png" alt="img" />
                </a>
                <p>
                  <i className="fas fa-map-marker-alt" />
                  Indonesia
                </p>
                <div className="discount_tab">
                  <span>50%</span>
                </div>
              </div>
              <div className="theme_two_box_content">
                <h4>
                  <a href="/hotel-details">Hotel paradise international</a>
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
            <div className="theme_common_box_two">
              <div className="theme_two_box_img">
                <a href="/hotel-details">
                  <img src="assets/img/tab-img/hotel3.png" alt="img" />
                </a>
                <p>
                  <i className="fas fa-map-marker-alt" />
                  Kualalampur
                </p>
              </div>
              <div className="theme_two_box_content">
                <h4>
                  <a href="/hotel-details">Hotel kualalampur</a>
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
            <div className="theme_common_box_two">
              <div className="theme_two_box_img">
                <a href="/hotel-details">
                  <img src="assets/img/tab-img/hotel4.png" alt="img" />
                </a>
                <p>
                  <i className="fas fa-map-marker-alt" />
                  Mariana island
                </p>
                <div className="discount_tab">
                  <span>50%</span>
                </div>
              </div>
              <div className="theme_two_box_content">
                <h4>
                  <a href="/hotel-details">Hotel deluxe</a>
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
            <div className="theme_common_box_two">
              <div className="theme_two_box_img">
                <a href="/hotel-details">
                  <img src="assets/img/tab-img/hotel5.png" alt="img" />
                </a>
                <a>
                  <p>
                    <i className="fas fa-map-marker-alt" />
                    Kathmundu, Nepal
                  </p>
                </a>
              </div>
              <a></a>
              <div className="theme_two_box_content">
                <a></a>
                <h4>
                  <a />
                  <a href="/hotel-details">Hotel rajavumi</a>
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
            <div className="theme_common_box_two">
              <div className="theme_two_box_img">
                <a href="/hotel-details">
                  <img src="assets/img/tab-img/hotel6.png" alt="img" />
                </a>
                <p>
                  <i className="fas fa-map-marker-alt" />
                  Beach view
                </p>
              </div>
              <div className="theme_two_box_content">
                <h4>
                  <a href="/hotel-details">Thailand grand suit</a>
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
            <div className="theme_common_box_two">
              <div className="theme_two_box_img">
                <a href="/hotel-details">
                  <img src="assets/img/tab-img/hotel7.png" alt="img" />
                </a>
                <p>
                  <i className="fas fa-map-marker-alt" />
                  Long island
                </p>
              </div>
              <div className="theme_two_box_content">
                <h4>
                  <a href="/hotel-details">Zefi resort and spa</a>
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
            <div className="theme_common_box_two">
              <div className="theme_two_box_img">
                <a href="/hotel-details">
                  <img src="assets/img/tab-img/hotel8.png" alt="img" />
                </a>
                <p>
                  <i className="fas fa-map-marker-alt" />
                  Philippine
                </p>
              </div>
              <div className="theme_two_box_content">
                <h4>
                  <a href="/hotel-details">Manila international resort</a>
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
            <div className="theme_common_box_two">
              <div className="theme_two_box_img">
                <a href="/hotel-details">
                  <img src="assets/img/tab-img/hotel1.png" alt="img" />
                </a>
                <p>
                  <i className="fas fa-map-marker-alt" />
                  New beach, Thailand
                </p>
              </div>
              <div className="theme_two_box_content">
                <h4>
                  <a href="/hotel-details">Kantua hotel, Thailand</a>
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
            <div className="theme_common_box_two">
              <div className="theme_two_box_img">
                <a href="/hotel-details">
                  <img src="assets/img/tab-img/hotel1.png" alt="img" />
                </a>
                <p>
                  <i className="fas fa-map-marker-alt" />
                  New beach, Thailand
                </p>
              </div>
              <div className="theme_two_box_content">
                <h4>
                  <a href="/hotel-details">Kantua hotel, Thailand</a>
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
            <div className="theme_common_box_two">
              <div className="theme_two_box_img">
                <a href="/hotel-details">
                  <img src="assets/img/tab-img/hotel2.png" alt="img" />
                </a>
                <p>
                  <i className="fas fa-map-marker-alt" />
                  Indonesia
                </p>
                <div className="discount_tab">
                  <span>50%</span>
                </div>
              </div>
              <div className="theme_two_box_content">
                <h4>
                  <a href="/hotel-details">Hotel paradise international</a>
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
            <div className="theme_common_box_two">
              <div className="theme_two_box_img">
                <a href="/hotel-details">
                  <img src="assets/img/tab-img/hotel3.png" alt="img" />
                </a>
                <p>
                  <i className="fas fa-map-marker-alt" />
                  Kualalampur
                </p>
              </div>
              <div className="theme_two_box_content">
                <h4>
                  <a href="/hotel-details">Hotel kualalampur</a>
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


<section id="cta_area">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-7">
        <div className="cta_left">
          <div className="cta_icon">
            <img src="assets/img/common/email.png" alt="icon" />
          </div>
          <div className="cta_content">
            <h4>Get the latest news and offers</h4>
            <h2>Subscribe to our newsletter</h2>
          </div>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="cat_form">
          <form id="cta_form_wrappper">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your mail address"
              />
              <button className="btn btn_theme btn_md" type="button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

</> 
)
}

export default Hotels
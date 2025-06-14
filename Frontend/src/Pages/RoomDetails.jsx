import React from 'react'
import { Helmet } from 'react-helmet'
import Title from './include/Title'

const RoomDetails = () => {
  return (
     <>
     <Helmet><title>Room Details</title></Helmet>
     <Title />

     <section id="tour_details_main" className="section_padding">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="tour_details_leftside_wrapper">
          <div className="tour_details_heading_wrapper">
            <div className="tour_details_top_heading">
              <h2>Double deluxe room</h2>
              <h5>
                <i className="fas fa-map-marker-alt" /> Los angeles
              </h5>
            </div>
            <div className="tour_details_top_heading_right">
              <h4>Excellent</h4>
              <h6>4.8/5</h6>
              <p>(1214 reviewes)</p>
            </div>
          </div>
          <div className="tour_details_img_wrapper">
            <div className="slider-for slick-initialized slick-slider">
              <div className="slick-list draggable">
                <div
                  className="slick-track"
                  style={{ opacity: 1, width: 3680 }}
                >
                  <div
                    className="slick-slide slick-current slick-active"
                    data-slick-index={0}
                    aria-hidden="false"
                    tabIndex={0}
                    style={{
                      width: 736,
                      position: "relative",
                      left: 0,
                      top: 0,
                      zIndex: 999,
                      opacity: 1
                    }}
                  >
                    <img src="assets/img/hotel/hotel-big-1.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide"
                    data-slick-index={1}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{
                      width: 736,
                      position: "relative",
                      left: "-736px",
                      top: 0,
                      zIndex: 998,
                      opacity: 0
                    }}
                  >
                    <img src="assets/img/hotel/hotel-big-1.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide"
                    data-slick-index={2}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{
                      width: 736,
                      position: "relative",
                      left: "-1472px",
                      top: 0,
                      zIndex: 998,
                      opacity: 0
                    }}
                  >
                    <img src="assets/img/hotel/hotel-big-1.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide"
                    data-slick-index={3}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{
                      width: 736,
                      position: "relative",
                      left: "-2208px",
                      top: 0,
                      zIndex: 998,
                      opacity: 0
                    }}
                  >
                    <img src="assets/img/hotel/hotel-big-1.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide"
                    data-slick-index={4}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{
                      width: 736,
                      position: "relative",
                      left: "-2944px",
                      top: 0,
                      zIndex: 998,
                      opacity: 0
                    }}
                  >
                    <img src="assets/img/hotel/hotel-big-1.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="slider-nav slick-initialized slick-slider">
              <button
                className="slick-prev slick-arrow"
                aria-label="Previous"
                type="button"
                style={{ display: "inline-block" }}
              >
                Previous
              </button>
              <div className="slick-list draggable">
                <div
                  className="slick-track"
                  style={{
                    opacity: 1,
                    width: 2516,
                    transform: "translate3d(-740px, 0px, 0px)"
                  }}
                >
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={-5}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/hotel/small-2.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={-4}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/hotel/small-3.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={-3}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/hotel/small-4.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={-2}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/hotel/small-5.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={-1}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/hotel/small-6.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-current slick-active"
                    data-slick-index={0}
                    aria-hidden="false"
                    tabIndex={0}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/hotel/small-1.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-active"
                    data-slick-index={1}
                    aria-hidden="false"
                    tabIndex={0}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/hotel/small-2.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-active"
                    data-slick-index={2}
                    aria-hidden="false"
                    tabIndex={0}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/hotel/small-3.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-active"
                    data-slick-index={3}
                    aria-hidden="false"
                    tabIndex={0}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/hotel/small-4.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-active"
                    data-slick-index={4}
                    aria-hidden="false"
                    tabIndex={0}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/hotel/small-5.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide"
                    data-slick-index={5}
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/hotel/small-6.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={6}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/hotel/small-1.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={7}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/hotel/small-2.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={8}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/hotel/small-3.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={9}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/hotel/small-4.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={10}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/hotel/small-5.png" alt="img" />
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={11}
                    id=""
                    aria-hidden="true"
                    tabIndex={-1}
                    style={{ width: 148 }}
                  >
                    <img src="assets/img/hotel/small-6.png" alt="img" />
                  </div>
                </div>
              </div>
              <button
                className="slick-next slick-arrow"
                aria-label="Next"
                type="button"
                style={{ display: "inline-block" }}
              >
                Next
              </button>
            </div>
          </div>
          <div className="tour_details_boxed">
            <h3 className="heading_theme">Overview</h3>
            <div className="tour_details_boxed_inner">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est.
              </p>
              <p>
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod.
              </p>
              <ul>
                <li>
                  <i className="fas fa-circle" />
                  Buffet breakfast as per the Itinerary
                </li>
                <li>
                  <i className="fas fa-circle" />
                  Visit eight villages showcasing Polynesian culture
                </li>
                <li>
                  <i className="fas fa-circle" />
                  Complimentary Camel safari, Bonfire, and Cultural Dance at
                  Camp
                </li>
                <li>
                  <i className="fas fa-circle" />
                  All toll tax, parking, fuel, and driver allowances
                </li>
                <li>
                  <i className="fas fa-circle" />
                  Comfortable and hygienic vehicle (SUV/Sedan) for sightseeing
                  on all days as per the itinerary.
                </li>
              </ul>
            </div>
          </div>
          <div className="tour_details_boxed">
            <h3 className="heading_theme">Included/Excluded</h3>
            <div className="tour_details_boxed_inner">
              <p>
                Stet clitaStet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod.
              </p>
              <ul>
                <li>
                  <i className="fas fa-circle" />
                  Buffet breakfast as per the Itinerary
                </li>
                <li>
                  <i className="fas fa-circle" />
                  Visit eight villages showcasing Polynesian culture
                </li>
                <li>
                  <i className="fas fa-circle" />
                  Complimentary Camel safari, Bonfire, and Cultural Dance at
                  Camp
                </li>
                <li>
                  <i className="fas fa-circle" />
                  All toll tax, parking, fuel, and driver allowances
                </li>
                <li>
                  <i className="fas fa-circle" />
                  Comfortable and hygienic vehicle (SUV/Sedan) for sightseeing
                  on all days as per the itinerary.
                </li>
              </ul>
            </div>
          </div>
          <div className="tour_details_boxed">
            <h3 className="heading_theme">Room facilities</h3>
            <div className="tour_details_boxed_inner">
              <div className="room_details_facilities">
                <div className="toru_details_top_bottom_item">
                  <div className="tour_details_top_bottom_icon">
                    <img src="assets/img/icon/ac.png" alt="icon" />
                  </div>
                  <div className="tour_details_top_bottom_text">
                    <p>Air condition</p>
                  </div>
                </div>
                <div className="toru_details_top_bottom_item">
                  <div className="tour_details_top_bottom_icon">
                    <img src="assets/img/icon/tv.png" alt="icon" />
                  </div>
                  <div className="tour_details_top_bottom_text">
                    <p>Flat television</p>
                  </div>
                </div>
                <div className="toru_details_top_bottom_item">
                  <div className="tour_details_top_bottom_icon">
                    <img src="assets/img/icon/gym.png" alt="icon" />
                  </div>
                  <div className="tour_details_top_bottom_text">
                    <p>Fitness center</p>
                  </div>
                </div>
                <div className="toru_details_top_bottom_item">
                  <div className="tour_details_top_bottom_icon">
                    <img src="assets/img/icon/wifi.png" alt="icon" />
                  </div>
                  <div className="tour_details_top_bottom_text">
                    <p>Free Wi-fi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="tour_details_right_sidebar_wrapper">
          <div className="tour_detail_right_sidebar">
            <div className="tour_details_right_boxed">
              <div className="tour_details_right_box_heading">
                <h3>Price</h3>
              </div>
              <div className="tour_package_bar_price">
                <h6>
                  <del>$ 35,500</del>
                </h6>
                <h3>
                  $ 30,500 <sub>/Per serson</sub>{" "}
                </h3>
              </div>
              <div className="tour_package_details_bar_list">
                <h5>Hotel facilities</h5>
                <ul>
                  <li>
                    <i className="fas fa-circle" />
                    Buffet breakfast as per the Itinerary
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                    Visit eight villages showcasing Polynesian culture
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                    Complimentary Camel safari, Bonfire,
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                    All toll tax, parking, fuel, and driver allowances
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                    Comfortable and hygienic vehicle
                  </li>
                </ul>
              </div>
            </div>
            <div className="tour_select_offer_bar_bottom">
              <button
                className="btn btn_theme btn_md w-100"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="tour_detail_right_sidebar">
            <div className="tour_details_right_boxed">
              <div className="tour_details_right_box_heading">
                <h3>Why choose us</h3>
              </div>
              <div className="tour_package_details_bar_list first_child_padding_none">
                <ul>
                  <li>
                    <i className="fas fa-circle" />
                    Buffet breakfast as per the Itinerary
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                    Visit eight villages showcasing Polynesian culture
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                    Complimentary Camel safari, Bonfire,
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                    All toll tax, parking, fuel, and driver allowances
                  </li>
                  <li>
                    <i className="fas fa-circle" />
                    Comfortable and hygienic vehicle
                  </li>
                </ul>
              </div>
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

export default RoomDetails
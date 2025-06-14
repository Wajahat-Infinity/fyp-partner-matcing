import React from 'react'
import Title from './include/Title'
import CtaArea from './include/CtaArea'

const BusDetails = () => {
  return (

    <>

    <Title />

    <section id="tour_booking_submission" className="section_padding">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="tou_booking_form_Wrapper">
          <div className="booking_tour_form">
            <h3 className="heading_theme">Passenger information</h3>
            <div className="tour_booking_form_box">
              <form action="!#" id="tour_bookking_form_item">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg_input"
                        placeholder="First name*"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg_input"
                        placeholder="Last name*"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg_input"
                        placeholder="Email address (Optional)"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg_input"
                        placeholder="Mobile number*"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg_input"
                        placeholder="Street address"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg_input"
                        placeholder="Apartment, Suite, House no (optional)"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <select className="form-control form-select bg_input">
                        <option value={1}>Khulna</option>
                        <option value={1}>New York</option>
                        <option value={1}>Barisal</option>
                        <option value={1}>Nator</option>
                        <option value={1}>Joybangla</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <select className="form-control form-select bg_input">
                        <option value={1}>State</option>
                        <option value={1}>New York</option>
                        <option value={1}>Barisal</option>
                        <option value={1}>Nator</option>
                        <option value={1}>Joybangla</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <select className="form-control form-select bg_input">
                        <option value={1}>Country</option>
                        <option value={1}>New York</option>
                        <option value={1}>Barisal</option>
                        <option value={1}>Nator</option>
                        <option value={1}>Joybangla</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg_input"
                        placeholder="Passport no."
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg_input"
                        placeholder="Visa no."
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="booking_tour_form">
            <h3 className="heading_theme">Payment method</h3>
            <div className="tour_booking_form_box">
              <div className="booking_payment_boxed">
                <form action="!#" id="payment_checked">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      defaultValue="red"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Payment by card
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      defaultValue="green"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Paypal
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                      defaultValue="black"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault3"
                    >
                      Payoneer
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault4"
                      defaultValue="white"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault4"
                    >
                      Cash on delivery
                    </label>
                  </div>
                  <div className="payment_filed_wrapper">
                    <div className="payment_card payment_toggle red">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control bg_input"
                              placeholder="Card number"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control bg_input"
                              placeholder="Cardholder name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control bg_input"
                              placeholder="Date of expiry"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control bg_input"
                              placeholder="Security code"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="paypal_payment payment_toggle green">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control bg_input"
                              placeholder="Email Address"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="payoneer_payment payment_toggle black">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control bg_input"
                              placeholder="Email Address"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="booking_tour_form_submit">
            <div className="form-check write_spical_check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="flexCheckDefaultf1"
              />
              <label className="form-check-label" htmlFor="flexCheckDefaultf1">
                I read and accept all{" "}
                <a href="terms-service.html">Terms and conditios</a>
              </label>
            </div>
            <a
              href="booking-confirmation.html"
              className="btn btn_theme btn_md"
            >
              Pay now
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="tour_details_right_sidebar_wrapper">
          <div className="tour_detail_right_sidebar">
            <div className="tour_details_right_boxed">
              <div className="tour_details_right_box_heading">
                <h3>Bus</h3>
              </div>
              <div className="flight_sidebar_right">
                <div className="flight_search_left_sidebar">
                  <div className="flight_search_destination_sidebar">
                    <p>From</p>
                    <h3>Dhaka</h3>
                  </div>
                </div>
                <div className="flight_search_middel_sidebar">
                  <div className="flight_right_arrow_sidebar">
                    <img src="assets/img/icon/right_arrow.png" alt="icon" />
                    <h6>Non-stop</h6>
                    <p>01h 05minute </p>
                  </div>
                  <div className="flight_search_destination_sidebar">
                    <p>To</p>
                    <h3>Cox’s bazar </h3>
                  </div>
                </div>
              </div>
              <div className="tour_package_details_bar_list">
                <h5>Package rules</h5>
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
              <div className="tour_package_details_bar_price">
                <h5>Price</h5>
                <div className="tour_package_bar_price">
                  <h6>
                    <del>$ 35,500</del>
                  </h6>
                  <h3>
                    $ 30,500 <sub> / Adult X 1</sub>{" "}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="tour_detail_right_sidebar">
            <div className="tour_details_right_boxed">
              <div className="tour_details_right_box_heading">
                <h3>Travel date</h3>
              </div>
              <div className="edit_date_form">
                <div className="form-group">
                  <label htmlFor="dates">Edit Date</label>
                  <input
                    type="date"
                    defaultValue="2022-05-05"
                    className="form-control"
                    id="dates"
                  />
                </div>
              </div>
              <div className="tour_package_details_bar_list">
                <h5>Tourist</h5>
                <div className="select_person_item">
                  <div className="select_person_left">
                    <h6>Adult</h6>
                    <p>12y+</p>
                  </div>
                  <div className="select_person_right">
                    <h6>01</h6>
                  </div>
                </div>
                <div className="select_person_item">
                  <div className="select_person_left">
                    <h6>Children</h6>
                    <p>2 - 12 years</p>
                  </div>
                  <div className="select_person_right">
                    <h6>01</h6>
                  </div>
                </div>
                <div className="select_person_item">
                  <div className="select_person_left">
                    <h6>Infant</h6>
                    <p>Below 2 years</p>
                  </div>
                  <div className="select_person_right">
                    <h6>01</h6>
                  </div>
                </div>
              </div>
              <div className="edit_person">
                <p>Edit person</p>
              </div>
            </div>
          </div>
          <div className="tour_detail_right_sidebar">
            <div className="tour_details_right_boxed">
              <div className="tour_details_right_box_heading">
                <h3>Coupon code</h3>
              </div>
              <div className="coupon_code_area_booking">
                <form action="#!">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control bg_input"
                      placeholder="Enter coupon code"
                    />
                  </div>
                  <div className="coupon_code_submit">
                    <button className="btn btn_theme btn_md">
                      Apply voucher
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="tour_detail_right_sidebar">
            <div className="tour_details_right_boxed">
              <div className="tour_details_right_box_heading">
                <h3>Booking amount</h3>
              </div>
              <div className="tour_booking_amount_area">
                <ul>
                  <li>
                    Adult Price x 1 <span>$40,000.00</span>
                  </li>
                  <li>
                    Discount <span>-10%</span>
                  </li>
                  <li>
                    Tax<span>5%</span>
                  </li>
                </ul>
                <div className="tour_bokking_subtotal_area">
                  <h6>
                    Subtotal <span>$38,000.00</span>
                  </h6>
                </div>
                <div className="coupon_add_area">
                  <h6>
                    <span className="remove_coupon_tour">Remove</span> Coupon
                    code (OFF 5000)
                    <span>$5,000.00</span>
                  </h6>
                </div>
                <div className="total_subtotal_booking">
                  <h6>
                    Total Amount <span>$33,000.00</span>{" "}
                  </h6>
                </div>
              </div>
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

export default BusDetails
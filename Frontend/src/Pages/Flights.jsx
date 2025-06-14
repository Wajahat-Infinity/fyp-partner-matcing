import React from 'react'
import { Helmet } from 'react-helmet'
import Title from './include/Title'

const Flights = () => {
  return (
<>
 <Helmet><title>Flights</title></Helmet>
 <Title />

 <section id="theme_search_form_tour">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="theme_search_form_area">
          <div className="theme_search_form_tabbtn">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="flights-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#flights"
                  type="button"
                  role="tab"
                  aria-controls="flights"
                  aria-selected="true"
                >
                  <i className="fas fa-plane-departure" />
                  Flights
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="tours-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#tours"
                  type="button"
                  role="tab"
                  aria-controls="tours"
                  aria-selected="false"
                >
                  <i className="fas fa-globe" />
                  Tours
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="hotels-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#hotels"
                  type="button"
                  role="tab"
                  aria-controls="hotels"
                  aria-selected="false"
                >
                  <i className="fas fa-hotel" />
                  Hotels
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="visa-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#visa-application"
                  type="button"
                  role="tab"
                  aria-controls="visa"
                  aria-selected="false"
                >
                  <i className="fas fa-passport" /> Visa
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="apartments-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#apartments"
                  type="button"
                  role="tab"
                  aria-controls="apartments"
                  aria-selected="false"
                >
                  <i className="fas fa-building" /> Apartments
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="bus-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#bus"
                  type="button"
                  role="tab"
                  aria-controls="bus"
                  aria-selected="false"
                >
                  <i className="fas fa-bus" /> Bus
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="cruise-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#cruise"
                  type="button"
                  role="tab"
                  aria-controls="cruise"
                  aria-selected="false"
                >
                  <i className="fas fa-ship" /> Cruise
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="flights"
              role="tabpanel"
              aria-labelledby="flights-tab"
            >
              <div className="row">
                <div className="col-lg-12">
                  <div className="flight_categories_search">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="oneway-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#oneway_flight"
                          type="button"
                          role="tab"
                          aria-controls="oneway_flight"
                          aria-selected="true"
                        >
                          One Way
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="roundtrip-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#roundtrip"
                          type="button"
                          role="tab"
                          aria-controls="roundtrip"
                          aria-selected="false"
                        >
                          Roundtrip
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="multi_city-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#multi_city"
                          type="button"
                          role="tab"
                          aria-controls="multi_city"
                          aria-selected="false"
                        >
                          Multi city
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="myTabContent1">
                <div
                  className="tab-pane fade show active"
                  id="oneway_flight"
                  role="tabpanel"
                  aria-labelledby="oneway-tab"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="oneway_search_form">
                        <form action="#!">
                          <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                              <div className="flight_Search_boxed">
                                <p>From</p>
                                <input type="text" defaultValue="New York" />
                                <span>
                                  JFK - John F. Kennedy International...
                                </span>
                                <div className="plan_icon_posation">
                                  <i className="fas fa-plane-departure" />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                              <div className="flight_Search_boxed">
                                <p>To</p>
                                <input type="text" defaultValue="London " />
                                <span>LCY, London city airport </span>
                                <div className="plan_icon_posation">
                                  <i className="fas fa-plane-arrival" />
                                </div>
                                <div className="range_plan">
                                  <i className="fas fa-exchange-alt" />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4  col-md-6 col-sm-12 col-12">
                              <div className="form_search_date">
                                <div className="flight_Search_boxed date_flex_area">
                                  <div className="Journey_date">
                                    <p>Journey date</p>
                                    <input
                                      type="date"
                                      defaultValue="2022-05-05"
                                    />
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
                                              <span className="count pcount">
                                                2
                                              </span>
                                              <div className="type-label">
                                                <p>Adult</p>
                                                <span>12+ yrs</span>
                                              </div>
                                            </div>
                                            <div className="button-set">
                                              <button
                                                type="button"
                                                className="btn-add"
                                              >
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
                                              <span className="count ccount">
                                                0
                                              </span>
                                              <div className="type-label">
                                                <p className="fz14 mb-xs-0">
                                                  Children
                                                </p>
                                                <span>
                                                  2 - Less than 12 yrs
                                                </span>
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
                                              <span className="count incount">
                                                0
                                              </span>
                                              <div className="type-label">
                                                <p className="fz14 mb-xs-0">
                                                  Infant
                                                </p>
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
                                      <div className="cabin-selection">
                                        <h6>Cabin Class</h6>
                                        <div className="cabin-list">
                                          <button
                                            type="button"
                                            className="label-select-btn"
                                          >
                                            <span className="muiButton-label">
                                              Economy
                                            </span>
                                          </button>
                                          <button
                                            type="button"
                                            className="label-select-btn active"
                                          >
                                            <span className="muiButton-label">
                                              Business
                                            </span>
                                          </button>
                                          <button
                                            type="button"
                                            className="label-select-btn"
                                          >
                                            <span className="MuiButton-label">
                                              First Class{" "}
                                            </span>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <span>Business</span>
                              </div>
                            </div>
                            <div className="top_form_search_button">
                              <button className="btn btn_theme btn_md">
                                Search
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="roundtrip"
                  role="tabpanel"
                  aria-labelledby="roundtrip-tab"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="oneway_search_form">
                        <form action="#!">
                          <div className="row">
                            <div className="col-lg-3  col-md-6 col-sm-12 col-12">
                              <div className="flight_Search_boxed">
                                <p>From</p>
                                <input type="text" defaultValue="New York" />
                                <span>
                                  JFK - John F. Kennedy International...
                                </span>
                                <div className="plan_icon_posation">
                                  <i className="fas fa-plane-departure" />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3  col-md-6 col-sm-12 col-12">
                              <div className="flight_Search_boxed">
                                <p>To</p>
                                <input type="text" defaultValue="London " />
                                <span>LCY, London city airport </span>
                                <div className="plan_icon_posation">
                                  <i className="fas fa-plane-arrival" />
                                </div>
                                <div className="range_plan">
                                  <i className="fas fa-exchange-alt" />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4  col-md-6 col-sm-12 col-12">
                              <div className="form_search_date">
                                <div className="flight_Search_boxed date_flex_area">
                                  <div className="Journey_date">
                                    <p>Journey date</p>
                                    <input
                                      type="date"
                                      defaultValue="2022-05-05"
                                    />
                                    <span>Thursday</span>
                                  </div>
                                  <div className="Journey_date">
                                    <p>Return date</p>
                                    <input
                                      type="date"
                                      defaultValue="2022-05-08"
                                    />
                                    <span>Saturday</span>
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
                                              <span className="count pcount">
                                                2
                                              </span>
                                              <div className="type-label">
                                                <p>Adult</p>
                                                <span>12+ yrs</span>
                                              </div>
                                            </div>
                                            <div className="button-set">
                                              <button
                                                type="button"
                                                className="btn-add"
                                              >
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
                                              <span className="count ccount">
                                                0
                                              </span>
                                              <div className="type-label">
                                                <p className="fz14 mb-xs-0">
                                                  Children
                                                </p>
                                                <span>
                                                  2 - Less than 12 yrs
                                                </span>
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
                                              <span className="count incount">
                                                0
                                              </span>
                                              <div className="type-label">
                                                <p className="fz14 mb-xs-0">
                                                  Infant
                                                </p>
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
                                      <div className="cabin-selection">
                                        <h6>Cabin Class</h6>
                                        <div className="cabin-list">
                                          <button
                                            type="button"
                                            className="label-select-btn"
                                          >
                                            <span className="muiButton-label">
                                              Economy
                                            </span>
                                          </button>
                                          <button
                                            type="button"
                                            className="label-select-btn active"
                                          >
                                            <span className="muiButton-label">
                                              Business
                                            </span>
                                          </button>
                                          <button
                                            type="button"
                                            className="label-select-btn"
                                          >
                                            <span className="MuiButton-label">
                                              First Class{" "}
                                            </span>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <span>Business</span>
                              </div>
                            </div>
                          </div>
                          <div className="top_form_search_button">
                            <button className="btn btn_theme btn_md">
                              Search
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="multi_city"
                  role="tabpanel"
                  aria-labelledby="multi_city-tab"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="oneway_search_form">
                        <form action="#!">
                          <div className="multi_city_form_wrapper">
                            <div className="multi_city_form">
                              <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                  <div className="flight_Search_boxed">
                                    <p>From</p>
                                    <input
                                      type="text"
                                      defaultValue="New York"
                                    />
                                    <span>
                                      DAC, Hazrat Shahajalal International...
                                    </span>
                                    <div className="plan_icon_posation">
                                      <i className="fas fa-plane-departure" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                  <div className="flight_Search_boxed">
                                    <p>To</p>
                                    <input type="text" defaultValue="London " />
                                    <span>LCY, London city airport </span>
                                    <div className="plan_icon_posation">
                                      <i className="fas fa-plane-arrival" />
                                    </div>
                                    <div className="range_plan">
                                      <i className="fas fa-exchange-alt" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                  <div className="form_search_date">
                                    <div className="flight_Search_boxed date_flex_area">
                                      <div className="Journey_date">
                                        <p>Journey date</p>
                                        <input
                                          type="date"
                                          defaultValue="2022-05-05"
                                        />
                                        <span>Thursday</span>
                                      </div>
                                      <div className="Journey_date">
                                        <p>Return date</p>
                                        <input
                                          type="date"
                                          defaultValue="2022-05-10"
                                        />
                                        <span>Saturday</span>
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
                                                  <span className="count pcount">
                                                    2
                                                  </span>
                                                  <div className="type-label">
                                                    <p>Adult</p>
                                                    <span>12+ yrs</span>
                                                  </div>
                                                </div>
                                                <div className="button-set">
                                                  <button
                                                    type="button"
                                                    className="btn-add"
                                                  >
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
                                                  <span className="count ccount">
                                                    0
                                                  </span>
                                                  <div className="type-label">
                                                    <p className="fz14 mb-xs-0">
                                                      Children
                                                    </p>
                                                    <span>
                                                      2 - Less than 12 yrs
                                                    </span>
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
                                                  <span className="count incount">
                                                    0
                                                  </span>
                                                  <div className="type-label">
                                                    <p className="fz14 mb-xs-0">
                                                      Infant
                                                    </p>
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
                                          <div className="cabin-selection">
                                            <h6>Cabin Class</h6>
                                            <div className="cabin-list">
                                              <button
                                                type="button"
                                                className="label-select-btn"
                                              >
                                                <span className="muiButton-label">
                                                  Economy
                                                </span>
                                              </button>
                                              <button
                                                type="button"
                                                className="label-select-btn active"
                                              >
                                                <span className="muiButton-label">
                                                  Business
                                                </span>
                                              </button>
                                              <button
                                                type="button"
                                                className="label-select-btn"
                                              >
                                                <span className="MuiButton-label">
                                                  First Class{" "}
                                                </span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <span>Business</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="multi_city_form">
                              <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                  <div className="flight_Search_boxed">
                                    <p>From</p>
                                    <input
                                      type="text"
                                      defaultValue="New York"
                                    />
                                    <span>
                                      DAC, Hazrat Shahajalal International...
                                    </span>
                                    <div className="plan_icon_posation">
                                      <i className="fas fa-plane-departure" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                  <div className="flight_Search_boxed">
                                    <p>To</p>
                                    <input type="text" defaultValue="London " />
                                    <span>LCY, London city airport </span>
                                    <div className="plan_icon_posation">
                                      <i className="fas fa-plane-arrival" />
                                    </div>
                                    <div className="range_plan">
                                      <i className="fas fa-exchange-alt" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                  <div className="form_search_date">
                                    <div className="flight_Search_boxed date_flex_area">
                                      <div className="Journey_date">
                                        <p>Journey date</p>
                                        <input
                                          type="date"
                                          defaultValue="2022-05-05"
                                        />
                                        <span>Thursday</span>
                                      </div>
                                      <div className="Journey_date">
                                        <p>Return date</p>
                                        <input
                                          type="date"
                                          defaultValue="2022-05-12"
                                        />
                                        <span>Saturday</span>
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
                                                  <span className="count pcount">
                                                    2
                                                  </span>
                                                  <div className="type-label">
                                                    <p>Adult</p>
                                                    <span>12+ yrs</span>
                                                  </div>
                                                </div>
                                                <div className="button-set">
                                                  <button
                                                    type="button"
                                                    className="btn-add"
                                                  >
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
                                                  <span className="count ccount">
                                                    0
                                                  </span>
                                                  <div className="type-label">
                                                    <p className="fz14 mb-xs-0">
                                                      Children
                                                    </p>
                                                    <span>
                                                      2 - Less than 12 yrs
                                                    </span>
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
                                                  <span className="count incount">
                                                    0
                                                  </span>
                                                  <div className="type-label">
                                                    <p className="fz14 mb-xs-0">
                                                      Infant
                                                    </p>
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
                                          <div className="cabin-selection">
                                            <h6>Cabin Class</h6>
                                            <div className="cabin-list">
                                              <button
                                                type="button"
                                                className="label-select-btn"
                                              >
                                                <span className="muiButton-label">
                                                  Economy
                                                </span>
                                              </button>
                                              <button
                                                type="button"
                                                className="label-select-btn active"
                                              >
                                                <span className="muiButton-label">
                                                  Business
                                                </span>
                                              </button>
                                              <button
                                                type="button"
                                                className="label-select-btn"
                                              >
                                                <span className="MuiButton-label">
                                                  First Class{" "}
                                                </span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <span>Business</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="add_multy_form">
                                <button type="button" id="addMulticityRow">
                                  + Add another flight
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="top_form_search_button">
                            <button className="btn btn_theme btn_md">
                              Search
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="tours"
              role="tabpanel"
              aria-labelledby="tours-tab"
            >
              <div className="row">
                <div className="col-lg-12">
                  <div className="tour_search_form">
                    <form action="#!">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="flight_Search_boxed">
                            <p>Destination</p>
                            <input
                              type="text"
                              placeholder="Where are you going?"
                            />
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
                                          <span className="count pcount">
                                            2
                                          </span>
                                          <div className="type-label">
                                            <p>Adult</p>
                                            <span>12+ yrs</span>
                                          </div>
                                        </div>
                                        <div className="button-set">
                                          <button
                                            type="button"
                                            className="btn-add"
                                          >
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
                                          <span className="count ccount">
                                            0
                                          </span>
                                          <div className="type-label">
                                            <p className="fz14 mb-xs-0">
                                              Children
                                            </p>
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
                                          <span className="count incount">
                                            0
                                          </span>
                                          <div className="type-label">
                                            <p className="fz14 mb-xs-0">
                                              Infant
                                            </p>
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
                                  <div className="cabin-selection">
                                    <h6>Cabin Class</h6>
                                    <div className="cabin-list">
                                      <button
                                        type="button"
                                        className="label-select-btn"
                                      >
                                        <span className="muiButton-label">
                                          Economy
                                        </span>
                                      </button>
                                      <button
                                        type="button"
                                        className="label-select-btn active"
                                      >
                                        <span className="muiButton-label">
                                          Business
                                        </span>
                                      </button>
                                      <button
                                        type="button"
                                        className="label-select-btn"
                                      >
                                        <span className="MuiButton-label">
                                          First Class{" "}
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <span>Business</span>
                          </div>
                        </div>
                        <div className="top_form_search_button">
                          <button className="btn btn_theme btn_md">
                            Search
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="hotels"
              role="tabpanel"
              aria-labelledby="hotels-tab"
            >
              <div className="row">
                <div className="col-lg-12">
                  <div className="tour_search_form">
                    <form action="#!">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="flight_Search_boxed">
                            <p>Destination</p>
                            <input
                              type="text"
                              placeholder="Where are you going?"
                            />
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
                                          <span className="count pcount">
                                            2
                                          </span>
                                          <div className="type-label">
                                            <p>Adult</p>
                                            <span>12+ yrs</span>
                                          </div>
                                        </div>
                                        <div className="button-set">
                                          <button
                                            type="button"
                                            className="btn-add"
                                          >
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
                                          <span className="count ccount">
                                            0
                                          </span>
                                          <div className="type-label">
                                            <p className="fz14 mb-xs-0">
                                              Children
                                            </p>
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
                                          <span className="count incount">
                                            0
                                          </span>
                                          <div className="type-label">
                                            <p className="fz14 mb-xs-0">
                                              Infant
                                            </p>
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
                                  <div className="cabin-selection">
                                    <h6>Cabin Class</h6>
                                    <div className="cabin-list">
                                      <button
                                        type="button"
                                        className="label-select-btn"
                                      >
                                        <span className="muiButton-label">
                                          Economy
                                        </span>
                                      </button>
                                      <button
                                        type="button"
                                        className="label-select-btn active"
                                      >
                                        <span className="muiButton-label">
                                          Business
                                        </span>
                                      </button>
                                      <button
                                        type="button"
                                        className="label-select-btn"
                                      >
                                        <span className="MuiButton-label">
                                          First Class{" "}
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <span>Business</span>
                          </div>
                        </div>
                        <div className="top_form_search_button">
                          <button className="btn btn_theme btn_md">
                            Search
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="visa-application"
              role="tabpanel"
              aria-labelledby="visa-tab"
            >
              <div className="row">
                <div className="col-lg-12">
                  <div className="tour_search_form">
                    <form action="#!">
                      <div className="row">
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                          <div className="flight_Search_boxed">
                            <p>Select country</p>
                            <input type="text" defaultValue="United states" />
                            <span>Where are you going?</span>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                          <div className="flight_Search_boxed">
                            <p>Your nationality</p>
                            <input type="text" defaultValue="Bangladesh" />
                            <span>Where are you going?</span>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="form_search_date">
                            <div className="flight_Search_boxed date_flex_area">
                              <div className="Journey_date">
                                <p>Entry date</p>
                                <input type="date" defaultValue="2022-05-03" />
                                <span>Thursday</span>
                              </div>
                              <div className="Journey_date">
                                <p>Exit date</p>
                                <input type="date" defaultValue="2022-05-05" />
                                <span>Thursday</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                          <div className="flight_Search_boxed dropdown_passenger_area">
                            <p>Traveller, Class </p>
                            <div className="dropdown">
                              <button
                                className="dropdown-toggle final-count"
                                data-toggle="dropdown"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                0 Traveller
                              </button>
                              <div
                                className="dropdown-menu dropdown_passenger_info"
                                aria-labelledby="dropdownMenuButton1"
                              >
                                <div className="traveller-calulate-persons">
                                  <div className="passengers">
                                    <h6>Traveller</h6>
                                    <div className="passengers-types">
                                      <div className="passengers-type">
                                        <div className="text">
                                          <span className="count pcount">
                                            2
                                          </span>
                                          <div className="type-label">
                                            <p>Adult</p>
                                            <span>12+ yrs</span>
                                          </div>
                                        </div>
                                        <div className="button-set">
                                          <button
                                            type="button"
                                            className="btn-add"
                                          >
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
                                          <span className="count ccount">
                                            0
                                          </span>
                                          <div className="type-label">
                                            <p className="fz14 mb-xs-0">
                                              Children
                                            </p>
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
                                          <span className="count incount">
                                            0
                                          </span>
                                          <div className="type-label">
                                            <p className="fz14 mb-xs-0">
                                              Infant
                                            </p>
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
                          <button className="btn btn_theme btn_md">
                            Search
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="apartments"
              role="tabpanel"
              aria-labelledby="apartments-tab"
            >
              <div className="row">
                <div className="col-lg-12">
                  <div className="tour_search_form">
                    <form action="#!">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="flight_Search_boxed">
                            <p>Destination</p>
                            <input
                              type="text"
                              placeholder="Where are you going?"
                            />
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
                                0 Traveler
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
                                          <span className="count pcount">
                                            2
                                          </span>
                                          <div className="type-label">
                                            <p>Adult</p>
                                            <span>12+ yrs</span>
                                          </div>
                                        </div>
                                        <div className="button-set">
                                          <button
                                            type="button"
                                            className="btn-add"
                                          >
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
                                          <span className="count ccount">
                                            0
                                          </span>
                                          <div className="type-label">
                                            <p className="fz14 mb-xs-0">
                                              Children
                                            </p>
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
                                          <span className="count incount">
                                            0
                                          </span>
                                          <div className="type-label">
                                            <p className="fz14 mb-xs-0">
                                              Infant
                                            </p>
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
                                  <div className="cabin-selection">
                                    <h6>Cabin Class</h6>
                                    <div className="cabin-list">
                                      <button
                                        type="button"
                                        className="label-select-btn"
                                      >
                                        <span className="muiButton-label">
                                          Economy
                                        </span>
                                      </button>
                                      <button
                                        type="button"
                                        className="label-select-btn active"
                                      >
                                        <span className="muiButton-label">
                                          Business
                                        </span>
                                      </button>
                                      <button
                                        type="button"
                                        className="label-select-btn"
                                      >
                                        <span className="MuiButton-label">
                                          First Class{" "}
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <span>Business</span>
                          </div>
                        </div>
                        <div className="top_form_search_button">
                          <button className="btn btn_theme btn_md">
                            Search
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="bus"
              role="tabpanel"
              aria-labelledby="bus-tab"
            >
              <div className="row">
                <div className="col-lg-12">
                  <div className="tour_search_form">
                    <form action="#!">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="oneway_search_form">
                            <div className="row">
                              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="flight_Search_boxed">
                                  <p>From</p>
                                  <input type="text" defaultValue="Dhaka" />
                                  <span>Bus Trtminal</span>
                                  <div className="plan_icon_posation">
                                    <i className="fas fa-plane-departure" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="flight_Search_boxed">
                                  <p>To</p>
                                  <input
                                    type="text"
                                    defaultValue="Cox’s Bazar "
                                  />
                                  <span>Bus Trtminal</span>
                                  <div className="plan_icon_posation">
                                    <i className="fas fa-plane-arrival" />
                                  </div>
                                  <div className="range_plan">
                                    <i className="fas fa-exchange-alt" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4  col-md-6 col-sm-12 col-12">
                                <div className="form_search_date">
                                  <div className="flight_Search_boxed date_flex_area">
                                    <div className="Journey_date">
                                      <p>Journey date</p>
                                      <input
                                        type="date"
                                        defaultValue="2022-05-05"
                                      />
                                      <span>Thursday</span>
                                    </div>
                                    <div className="Journey_date">
                                      <p>Return date</p>
                                      <input
                                        type="date"
                                        defaultValue="2022-05-08"
                                      />
                                      <span>Saturday</span>
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
                                                <span className="count pcount">
                                                  2
                                                </span>
                                                <div className="type-label">
                                                  <p>Adult</p>
                                                  <span>12+ yrs</span>
                                                </div>
                                              </div>
                                              <div className="button-set">
                                                <button
                                                  type="button"
                                                  className="btn-add"
                                                >
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
                                                <span className="count ccount">
                                                  0
                                                </span>
                                                <div className="type-label">
                                                  <p className="fz14 mb-xs-0">
                                                    Children
                                                  </p>
                                                  <span>
                                                    2 - Less than 12 yrs
                                                  </span>
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
                                                <span className="count incount">
                                                  0
                                                </span>
                                                <div className="type-label">
                                                  <p className="fz14 mb-xs-0">
                                                    Infant
                                                  </p>
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
                                        <div className="cabin-selection">
                                          <h6>Cabin Class</h6>
                                          <div className="cabin-list">
                                            <button
                                              type="button"
                                              className="label-select-btn"
                                            >
                                              <span className="muiButton-label">
                                                Economy
                                              </span>
                                            </button>
                                            <button
                                              type="button"
                                              className="label-select-btn active"
                                            >
                                              <span className="muiButton-label">
                                                Business
                                              </span>
                                            </button>
                                            <button
                                              type="button"
                                              className="label-select-btn"
                                            >
                                              <span className="MuiButton-label">
                                                First Class{" "}
                                              </span>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <span>Business</span>
                                </div>
                              </div>
                              <div className="top_form_search_button">
                                <button className="btn btn_theme btn_md">
                                  Search
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="cruise"
              role="tabpanel"
              aria-labelledby="cruise-tab"
            >
              <div className="row">
                <div className="col-lg-12">
                  <div className="tour_search_form">
                    <form action="#!">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="flight_Search_boxed">
                            <p>Destination</p>
                            <input
                              type="text"
                              placeholder="Where are you going?"
                            />
                            <span>Where are you going?</span>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="flight_Search_boxed">
                            <p>Cruise line</p>
                            <input type="text" placeholder="American line" />
                            <span>Choose your cruise</span>
                          </div>
                        </div>
                        <div className="col-lg-2  col-md-6 col-sm-12 col-12">
                          <div className="form_search_date">
                            <div className="flight_Search_boxed date_flex_area">
                              <div className="Journey_date">
                                <p>Journey date</p>
                                <input type="date" defaultValue="2022-05-03" />
                                <span>Thursday</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="top_form_search_button">
                          <button className="btn btn_theme btn_md">
                            Search
                          </button>
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
    </div>
  </div>
</section>



<section id="explore_area" className="section_padding">
  <div className="container">
    {/* Section Heading */}
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="section_heading_center">
          <h2>42 tours found</h2>
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
              <h5>Number of stops</h5>
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
                    <span>1 stop</span>
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
                    <span>2 stop</span>
                    <span>16</span>
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
                    <span>3 stop</span>
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
                    <span>Non-stop</span>
                    <span>22</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="left_side_search_boxed">
            <div className="left_side_search_heading">
              <h5>Flight class</h5>
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
                    <span>Economy</span>
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
                    <span>Business</span>
                    <span>26</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="left_side_search_boxed">
            <div className="left_side_search_heading">
              <h5>Airlines</h5>
            </div>
            <div className="tour_search_type">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefaults1"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefaults1"
                >
                  <span className="area_flex_one">
                    <span>Quatar Airways</span>
                    <span>17</span>
                  </span>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefaults2"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefaults2"
                >
                  <span className="area_flex_one">
                    <span>Fly Amirates </span>
                    <span>14</span>
                  </span>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefaults3"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefaults3"
                >
                  <span className="area_flex_one">
                    <span>Novo Air </span>
                    <span>62</span>
                  </span>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefaults4"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefaults4"
                >
                  <span className="area_flex_one">
                    <span>Air Asia </span>
                    <span>08</span>
                  </span>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefaults5"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefaults5"
                >
                  <span className="area_flex_one">
                    <span>Singapore Airlines </span>
                    <span>12</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="left_side_search_boxed">
            <div className="left_side_search_heading">
              <h5>Refundable</h5>
            </div>
            <div className="tour_search_type">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefaultp1"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefaultp1"
                >
                  <span className="area_flex_one">
                    <span>Yes</span>
                    <span>17</span>
                  </span>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefaultp2"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefaultp2"
                >
                  <span className="area_flex_one">
                    <span>No</span>
                    <span>14</span>
                  </span>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefaultp3"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefaultp3"
                >
                  <span className="area_flex_one">
                    <span>As per rules</span>
                    <span>62</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-9">
        <div className="row">
          <div className="col-lg-12">
            <div className="flight_search_result_wrapper">
              <div className="flight_search_item_wrappper">
                <div className="flight_search_items">
                  <div className="multi_city_flight_lists">
                    <div className="flight_multis_area_wrapper">
                      <div className="flight_search_left">
                        <div className="flight_logo">
                          <img
                            src="assets/img/common/biman_bangla.png"
                            alt="img"
                          />
                        </div>
                        <div className="flight_search_destination">
                          <p>From</p>
                          <h3>New York</h3>
                          <h6>JFK - John F. Kennedy International...</h6>
                        </div>
                      </div>
                      <div className="flight_search_middel">
                        <div className="flight_right_arrow">
                          <img
                            src="assets/img/icon/right_arrow.png"
                            alt="icon"
                          />
                          <h6>Non-stop</h6>
                          <p>01h 05minute </p>
                        </div>
                        <div className="flight_search_destination">
                          <p>To</p>
                          <h3>London </h3>
                          <h6>LCY, London city airport </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flight_search_right">
                    <h5>
                      <del>$9,560</del>
                    </h5>
                    <h2>
                      $7,560<sup>*20% OFF</sup>
                    </h2>
                    <a
                      href="/flight-booking"
                      className="btn btn_theme btn_sm"
                    >
                      Book now
                    </a>
                    <p>*Discount applicable on some conditions</p>
                    <h6
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Show more <i className="fas fa-chevron-down" />
                    </h6>
                  </div>
                </div>
                <div
                  className="flight_policy_refund collapse"
                  id="collapseExample"
                >
                  <div className="flight_show_down_wrapper">
                    <div className="flight-shoe_dow_item">
                      <div className="airline-details">
                        <div className="img">
                          <img src="assets/img/icon/bg.png" alt="img" />
                        </div>
                        <span className="airlineName fw-500">
                          Biman Bangladesh Airlines &nbsp; BG435
                        </span>
                        <span className="flightNumber">
                          BOEING 737-800 - 738
                        </span>
                      </div>
                      <div className="flight_inner_show_component">
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                        <div className="flight_duration">
                          <div className="arrow_right" />
                          <span>01h 15m</span>
                        </div>
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flight_refund_policy">
                      <div className="TabPanelInner flex_widht_less">
                        <h4>Refund Policy</h4>
                        <p className="fz12">
                          1. Refund and Date Change are done as per the
                          following policies.
                        </p>
                        <p className="fz12">
                          2. Refund Amount= Refund Charge (as per airline policy
                          + ShareTrip Convenience Fee).{" "}
                        </p>
                        <p className="fz12">
                          3. Date Change Amount= Date Change Fee (as per Airline
                          Policy + ShareTrip Convenience Fee).
                        </p>
                      </div>
                      <div className="TabPanelInner">
                        <h4>Baggage</h4>
                        <div className="flight_info_taable">
                          <h3>DAC-SPD</h3>
                          <p>
                            <span>20KG /</span> person
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flight_show_down_wrapper">
                    <div className="flight-shoe_dow_item">
                      <div className="airline-details">
                        <div className="img">
                          <img src="assets/img/icon/bg.png" alt="img" />
                        </div>
                        <span className="airlineName fw-500">
                          Biman Bangladesh Airlines &nbsp; BG435
                        </span>
                        <span className="flightNumber">
                          BOEING 737-800 - 738
                        </span>
                      </div>
                      <div className="flight_inner_show_component">
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                        <div className="flight_duration">
                          <div className="arrow_right" />
                          <span>01h 15m</span>
                        </div>
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flight_refund_policy">
                      <div className="TabPanelInner flex_widht_less">
                        <h4>Refund Policy</h4>
                        <p className="fz12">
                          1. Refund and Date Change are done as per the
                          following policies.
                        </p>
                        <p className="fz12">
                          2. Refund Amount= Refund Charge (as per airline policy
                          + ShareTrip Convenience Fee).{" "}
                        </p>
                        <p className="fz12">
                          3. Date Change Amount= Date Change Fee (as per Airline
                          Policy + ShareTrip Convenience Fee).
                        </p>
                      </div>
                      <div className="TabPanelInner">
                        <h4>Baggage</h4>
                        <div className="flight_info_taable">
                          <h3>DAC-SPD</h3>
                          <p>
                            <span>20KG /</span> person
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flight_show_down_wrapper">
                    <div className="flight-shoe_dow_item">
                      <div className="airline-details">
                        <div className="img">
                          <img src="assets/img/icon/bg.png" alt="img" />
                        </div>
                        <span className="airlineName fw-500">
                          Biman Bangladesh Airlines &nbsp; BG435
                        </span>
                        <span className="flightNumber">
                          BOEING 737-800 - 738
                        </span>
                      </div>
                      <div className="flight_inner_show_component">
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                        <div className="flight_duration">
                          <div className="arrow_right" />
                          <span>01h 15m</span>
                        </div>
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flight_refund_policy">
                      <div className="TabPanelInner flex_widht_less">
                        <h4>Refund Policy</h4>
                        <p className="fz12">
                          1. Refund and Date Change are done as per the
                          following policies.
                        </p>
                        <p className="fz12">
                          2. Refund Amount= Refund Charge (as per airline policy
                          + ShareTrip Convenience Fee).{" "}
                        </p>
                        <p className="fz12">
                          3. Date Change Amount= Date Change Fee (as per Airline
                          Policy + ShareTrip Convenience Fee).
                        </p>
                      </div>
                      <div className="TabPanelInner">
                        <h4>Baggage</h4>
                        <div className="flight_info_taable">
                          <h3>DAC-SPD</h3>
                          <p>
                            <span>20KG /</span> person
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Flight Search Item */}
              <div className="flight_search_item_wrappper">
                <div className="flight_search_items">
                  <div className="multi_city_flight_lists">
                    <div className="flight_multis_area_wrapper">
                      <div className="flight_search_left">
                        <div className="flight_logo">
                          <img
                            src="assets/img/common/biman_bangla.png"
                            alt="img"
                          />
                        </div>
                        <div className="flight_search_destination">
                          <p>From</p>
                          <h3>New York</h3>
                          <h6>JFK - John F. Kennedy International...</h6>
                        </div>
                      </div>
                      <div className="flight_search_middel">
                        <div className="flight_right_arrow">
                          <img
                            src="assets/img/icon/right_arrow.png"
                            alt="icon"
                          />
                          <h6>Non-stop</h6>
                          <p>01h 05minute </p>
                        </div>
                        <div className="flight_search_destination">
                          <p>To</p>
                          <h3>London </h3>
                          <h6>LCY, London city airport </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flight_search_right">
                    <h5>
                      <del>$9,560</del>
                    </h5>
                    <h2>
                      $7,560<sup>*20% OFF</sup>
                    </h2>
                    <a
                      href="/flight-booking"
                      className="btn btn_theme btn_sm"
                    >
                      Book now
                    </a>
                    <p>*Discount applicable on some conditions</p>
                    <h6
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample2"
                      aria-expanded="false"
                      aria-controls="collapseExample2"
                    >
                      Show more <i className="fas fa-chevron-down" />
                    </h6>
                  </div>
                </div>
                <div
                  className="flight_policy_refund collapse"
                  id="collapseExample2"
                >
                  <div className="flight_show_down_wrapper">
                    <div className="flight-shoe_dow_item">
                      <div className="airline-details">
                        <div className="img">
                          <img src="assets/img/icon/bg.png" alt="img" />
                        </div>
                        <span className="airlineName fw-500">
                          Biman Bangladesh Airlines &nbsp; BG435
                        </span>
                        <span className="flightNumber">
                          BOEING 737-800 - 738
                        </span>
                      </div>
                      <div className="flight_inner_show_component">
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                        <div className="flight_duration">
                          <div className="arrow_right" />
                          <span>01h 15m</span>
                        </div>
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flight_refund_policy">
                      <div className="TabPanelInner flex_widht_less">
                        <h4>Refund Policy</h4>
                        <p className="fz12">
                          1. Refund and Date Change are done as per the
                          following policies.
                        </p>
                        <p className="fz12">
                          2. Refund Amount= Refund Charge (as per airline policy
                          + ShareTrip Convenience Fee).{" "}
                        </p>
                        <p className="fz12">
                          3. Date Change Amount= Date Change Fee (as per Airline
                          Policy + ShareTrip Convenience Fee).
                        </p>
                      </div>
                      <div className="TabPanelInner">
                        <h4>Baggage</h4>
                        <div className="flight_info_taable">
                          <h3>DAC-SPD</h3>
                          <p>
                            <span>20KG /</span> person
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flight_show_down_wrapper">
                    <div className="flight-shoe_dow_item">
                      <div className="airline-details">
                        <div className="img">
                          <img src="assets/img/icon/bg.png" alt="img" />
                        </div>
                        <span className="airlineName fw-500">
                          Biman Bangladesh Airlines &nbsp; BG435
                        </span>
                        <span className="flightNumber">
                          BOEING 737-800 - 738
                        </span>
                      </div>
                      <div className="flight_inner_show_component">
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                        <div className="flight_duration">
                          <div className="arrow_right" />
                          <span>01h 15m</span>
                        </div>
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flight_refund_policy">
                      <div className="TabPanelInner flex_widht_less">
                        <h4>Refund Policy</h4>
                        <p className="fz12">
                          1. Refund and Date Change are done as per the
                          following policies.
                        </p>
                        <p className="fz12">
                          2. Refund Amount= Refund Charge (as per airline policy
                          + ShareTrip Convenience Fee).{" "}
                        </p>
                        <p className="fz12">
                          3. Date Change Amount= Date Change Fee (as per Airline
                          Policy + ShareTrip Convenience Fee).
                        </p>
                      </div>
                      <div className="TabPanelInner">
                        <h4>Baggage</h4>
                        <div className="flight_info_taable">
                          <h3>DAC-SPD</h3>
                          <p>
                            <span>20KG /</span> person
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flight_show_down_wrapper">
                    <div className="flight-shoe_dow_item">
                      <div className="airline-details">
                        <div className="img">
                          <img src="assets/img/icon/bg.png" alt="img" />
                        </div>
                        <span className="airlineName fw-500">
                          Biman Bangladesh Airlines &nbsp; BG435
                        </span>
                        <span className="flightNumber">
                          BOEING 737-800 - 738
                        </span>
                      </div>
                      <div className="flight_inner_show_component">
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                        <div className="flight_duration">
                          <div className="arrow_right" />
                          <span>01h 15m</span>
                        </div>
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flight_refund_policy">
                      <div className="TabPanelInner flex_widht_less">
                        <h4>Refund Policy</h4>
                        <p className="fz12">
                          1. Refund and Date Change are done as per the
                          following policies.
                        </p>
                        <p className="fz12">
                          2. Refund Amount= Refund Charge (as per airline policy
                          + ShareTrip Convenience Fee).{" "}
                        </p>
                        <p className="fz12">
                          3. Date Change Amount= Date Change Fee (as per Airline
                          Policy + ShareTrip Convenience Fee).
                        </p>
                      </div>
                      <div className="TabPanelInner">
                        <h4>Baggage</h4>
                        <div className="flight_info_taable">
                          <h3>DAC-SPD</h3>
                          <p>
                            <span>20KG /</span> person
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Flight Search Item */}
              <div className="flight_search_item_wrappper">
                <div className="flight_search_items">
                  <div className="multi_city_flight_lists">
                    <div className="flight_multis_area_wrapper">
                      <div className="flight_search_left">
                        <div className="flight_logo">
                          <img
                            src="assets/img/common/biman_bangla.png"
                            alt="img"
                          />
                        </div>
                        <div className="flight_search_destination">
                          <p>From</p>
                          <h3>New York</h3>
                          <h6>JFK - John F. Kennedy International...</h6>
                        </div>
                      </div>
                      <div className="flight_search_middel">
                        <div className="flight_right_arrow">
                          <img
                            src="assets/img/icon/right_arrow.png"
                            alt="icon"
                          />
                          <h6>Non-stop</h6>
                          <p>01h 05minute </p>
                        </div>
                        <div className="flight_search_destination">
                          <p>To</p>
                          <h3>London </h3>
                          <h6>LCY, London city airport </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flight_search_right">
                    <h5>
                      <del>$9,560</del>
                    </h5>
                    <h2>
                      $7,560<sup>*20% OFF</sup>
                    </h2>
                    <a
                      href="/flight-booking"
                      className="btn btn_theme btn_sm"
                    >
                      Book now
                    </a>
                    <p>*Discount applicable on some conditions</p>
                    <h6
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample3"
                      aria-expanded="false"
                      aria-controls="collapseExample3"
                    >
                      Show more <i className="fas fa-chevron-down" />
                    </h6>
                  </div>
                </div>
                <div
                  className="flight_policy_refund collapse"
                  id="collapseExample3"
                >
                  <div className="flight_show_down_wrapper">
                    <div className="flight-shoe_dow_item">
                      <div className="airline-details">
                        <div className="img">
                          <img src="assets/img/icon/bg.png" alt="img" />
                        </div>
                        <span className="airlineName fw-500">
                          Biman Bangladesh Airlines &nbsp; BG435
                        </span>
                        <span className="flightNumber">
                          BOEING 737-800 - 738
                        </span>
                      </div>
                      <div className="flight_inner_show_component">
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                        <div className="flight_duration">
                          <div className="arrow_right" />
                          <span>01h 15m</span>
                        </div>
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flight_refund_policy">
                      <div className="TabPanelInner flex_widht_less">
                        <h4>Refund Policy</h4>
                        <p className="fz12">
                          1. Refund and Date Change are done as per the
                          following policies.
                        </p>
                        <p className="fz12">
                          2. Refund Amount= Refund Charge (as per airline policy
                          + ShareTrip Convenience Fee).{" "}
                        </p>
                        <p className="fz12">
                          3. Date Change Amount= Date Change Fee (as per Airline
                          Policy + ShareTrip Convenience Fee).
                        </p>
                      </div>
                      <div className="TabPanelInner">
                        <h4>Baggage</h4>
                        <div className="flight_info_taable">
                          <h3>DAC-SPD</h3>
                          <p>
                            <span>20KG /</span> person
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flight_show_down_wrapper">
                    <div className="flight-shoe_dow_item">
                      <div className="airline-details">
                        <div className="img">
                          <img src="assets/img/icon/bg.png" alt="img" />
                        </div>
                        <span className="airlineName fw-500">
                          Biman Bangladesh Airlines &nbsp; BG435
                        </span>
                        <span className="flightNumber">
                          BOEING 737-800 - 738
                        </span>
                      </div>
                      <div className="flight_inner_show_component">
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                        <div className="flight_duration">
                          <div className="arrow_right" />
                          <span>01h 15m</span>
                        </div>
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flight_refund_policy">
                      <div className="TabPanelInner flex_widht_less">
                        <h4>Refund Policy</h4>
                        <p className="fz12">
                          1. Refund and Date Change are done as per the
                          following policies.
                        </p>
                        <p className="fz12">
                          2. Refund Amount= Refund Charge (as per airline policy
                          + ShareTrip Convenience Fee).{" "}
                        </p>
                        <p className="fz12">
                          3. Date Change Amount= Date Change Fee (as per Airline
                          Policy + ShareTrip Convenience Fee).
                        </p>
                      </div>
                      <div className="TabPanelInner">
                        <h4>Baggage</h4>
                        <div className="flight_info_taable">
                          <h3>DAC-SPD</h3>
                          <p>
                            <span>20KG /</span> person
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flight_show_down_wrapper">
                    <div className="flight-shoe_dow_item">
                      <div className="airline-details">
                        <div className="img">
                          <img src="assets/img/icon/bg.png" alt="img" />
                        </div>
                        <span className="airlineName fw-500">
                          Biman Bangladesh Airlines &nbsp; BG435
                        </span>
                        <span className="flightNumber">
                          BOEING 737-800 - 738
                        </span>
                      </div>
                      <div className="flight_inner_show_component">
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                        <div className="flight_duration">
                          <div className="arrow_right" />
                          <span>01h 15m</span>
                        </div>
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flight_refund_policy">
                      <div className="TabPanelInner flex_widht_less">
                        <h4>Refund Policy</h4>
                        <p className="fz12">
                          1. Refund and Date Change are done as per the
                          following policies.
                        </p>
                        <p className="fz12">
                          2. Refund Amount= Refund Charge (as per airline policy
                          + ShareTrip Convenience Fee).{" "}
                        </p>
                        <p className="fz12">
                          3. Date Change Amount= Date Change Fee (as per Airline
                          Policy + ShareTrip Convenience Fee).
                        </p>
                      </div>
                      <div className="TabPanelInner">
                        <h4>Baggage</h4>
                        <div className="flight_info_taable">
                          <h3>DAC-SPD</h3>
                          <p>
                            <span>20KG /</span> person
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Flight Search Item */}
              <div className="flight_search_item_wrappper">
                <div className="flight_search_items">
                  <div className="multi_city_flight_lists">
                    <div className="flight_multis_area_wrapper">
                      <div className="flight_search_left">
                        <div className="flight_logo">
                          <img
                            src="assets/img/common/biman_bangla.png"
                            alt="img"
                          />
                        </div>
                        <div className="flight_search_destination">
                          <p>From</p>
                          <h3>New York</h3>
                          <h6>JFK - John F. Kennedy International...</h6>
                        </div>
                      </div>
                      <div className="flight_search_middel">
                        <div className="flight_right_arrow">
                          <img
                            src="assets/img/icon/right_arrow.png"
                            alt="icon"
                          />
                          <h6>Non-stop</h6>
                          <p>01h 05minute </p>
                        </div>
                        <div className="flight_search_destination">
                          <p>To</p>
                          <h3>London </h3>
                          <h6>LCY, London city airport </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flight_search_right">
                    <h5>
                      <del>$9,560</del>
                    </h5>
                    <h2>
                      $7,560<sup>*20% OFF</sup>
                    </h2>
                    <a
                      href="/flight-booking"
                      className="btn btn_theme btn_sm"
                    >
                      Book now
                    </a>
                    <p>*Discount applicable on some conditions</p>
                    <h6
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample4"
                      aria-expanded="false"
                      aria-controls="collapseExample4"
                    >
                      Show more <i className="fas fa-chevron-down" />
                    </h6>
                  </div>
                </div>
                <div
                  className="flight_policy_refund collapse"
                  id="collapseExample4"
                >
                  <div className="flight_show_down_wrapper">
                    <div className="flight-shoe_dow_item">
                      <div className="airline-details">
                        <div className="img">
                          <img src="assets/img/icon/bg.png" alt="img" />
                        </div>
                        <span className="airlineName fw-500">
                          Biman Bangladesh Airlines &nbsp; BG435
                        </span>
                        <span className="flightNumber">
                          BOEING 737-800 - 738
                        </span>
                      </div>
                      <div className="flight_inner_show_component">
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                        <div className="flight_duration">
                          <div className="arrow_right" />
                          <span>01h 15m</span>
                        </div>
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flight_refund_policy">
                      <div className="TabPanelInner flex_widht_less">
                        <h4>Refund Policy</h4>
                        <p className="fz12">
                          1. Refund and Date Change are done as per the
                          following policies.
                        </p>
                        <p className="fz12">
                          2. Refund Amount= Refund Charge (as per airline policy
                          + ShareTrip Convenience Fee).{" "}
                        </p>
                        <p className="fz12">
                          3. Date Change Amount= Date Change Fee (as per Airline
                          Policy + ShareTrip Convenience Fee).
                        </p>
                      </div>
                      <div className="TabPanelInner">
                        <h4>Baggage</h4>
                        <div className="flight_info_taable">
                          <h3>DAC-SPD</h3>
                          <p>
                            <span>20KG /</span> person
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flight_show_down_wrapper">
                    <div className="flight-shoe_dow_item">
                      <div className="airline-details">
                        <div className="img">
                          <img src="assets/img/icon/bg.png" alt="img" />
                        </div>
                        <span className="airlineName fw-500">
                          Biman Bangladesh Airlines &nbsp; BG435
                        </span>
                        <span className="flightNumber">
                          BOEING 737-800 - 738
                        </span>
                      </div>
                      <div className="flight_inner_show_component">
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                        <div className="flight_duration">
                          <div className="arrow_right" />
                          <span>01h 15m</span>
                        </div>
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flight_refund_policy">
                      <div className="TabPanelInner flex_widht_less">
                        <h4>Refund Policy</h4>
                        <p className="fz12">
                          1. Refund and Date Change are done as per the
                          following policies.
                        </p>
                        <p className="fz12">
                          2. Refund Amount= Refund Charge (as per airline policy
                          + ShareTrip Convenience Fee).{" "}
                        </p>
                        <p className="fz12">
                          3. Date Change Amount= Date Change Fee (as per Airline
                          Policy + ShareTrip Convenience Fee).
                        </p>
                      </div>
                      <div className="TabPanelInner">
                        <h4>Baggage</h4>
                        <div className="flight_info_taable">
                          <h3>DAC-SPD</h3>
                          <p>
                            <span>20KG /</span> person
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flight_show_down_wrapper">
                    <div className="flight-shoe_dow_item">
                      <div className="airline-details">
                        <div className="img">
                          <img src="assets/img/icon/bg.png" alt="img" />
                        </div>
                        <span className="airlineName fw-500">
                          Biman Bangladesh Airlines &nbsp; BG435
                        </span>
                        <span className="flightNumber">
                          BOEING 737-800 - 738
                        </span>
                      </div>
                      <div className="flight_inner_show_component">
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                        <div className="flight_duration">
                          <div className="arrow_right" />
                          <span>01h 15m</span>
                        </div>
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flight_refund_policy">
                      <div className="TabPanelInner flex_widht_less">
                        <h4>Refund Policy</h4>
                        <p className="fz12">
                          1. Refund and Date Change are done as per the
                          following policies.
                        </p>
                        <p className="fz12">
                          2. Refund Amount= Refund Charge (as per airline policy
                          + ShareTrip Convenience Fee).{" "}
                        </p>
                        <p className="fz12">
                          3. Date Change Amount= Date Change Fee (as per Airline
                          Policy + ShareTrip Convenience Fee).
                        </p>
                      </div>
                      <div className="TabPanelInner">
                        <h4>Baggage</h4>
                        <div className="flight_info_taable">
                          <h3>DAC-SPD</h3>
                          <p>
                            <span>20KG /</span> person
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Flight Search Item */}
              <div className="flight_search_item_wrappper">
                <div className="flight_search_items">
                  <div className="multi_city_flight_lists">
                    <div className="flight_multis_area_wrapper">
                      <div className="flight_search_left">
                        <div className="flight_logo">
                          <img
                            src="assets/img/common/biman_bangla.png"
                            alt="img"
                          />
                        </div>
                        <div className="flight_search_destination">
                          <p>From</p>
                          <h3>New York</h3>
                          <h6>JFK - John F. Kennedy International...</h6>
                        </div>
                      </div>
                      <div className="flight_search_middel">
                        <div className="flight_right_arrow">
                          <img
                            src="assets/img/icon/right_arrow.png"
                            alt="icon"
                          />
                          <h6>Non-stop</h6>
                          <p>01h 05minute </p>
                        </div>
                        <div className="flight_search_destination">
                          <p>To</p>
                          <h3>London </h3>
                          <h6>LCY, London city airport </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flight_search_right">
                    <h5>
                      <del>$9,560</del>
                    </h5>
                    <h2>
                      $7,560<sup>*20% OFF</sup>
                    </h2>
                    <a
                      href="/flight-booking"
                      className="btn btn_theme btn_sm"
                    >
                      Book now
                    </a>
                    <p>*Discount applicable on some conditions</p>
                    <h6
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample5"
                      aria-expanded="false"
                      aria-controls="collapseExample5"
                    >
                      Show more <i className="fas fa-chevron-down" />
                    </h6>
                  </div>
                </div>
                <div
                  className="flight_policy_refund collapse"
                  id="collapseExample5"
                >
                  <div className="flight_show_down_wrapper">
                    <div className="flight-shoe_dow_item">
                      <div className="airline-details">
                        <div className="img">
                          <img src="assets/img/icon/bg.png" alt="img" />
                        </div>
                        <span className="airlineName fw-500">
                          Biman Bangladesh Airlines &nbsp; BG435
                        </span>
                        <span className="flightNumber">
                          BOEING 737-800 - 738
                        </span>
                      </div>
                      <div className="flight_inner_show_component">
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                        <div className="flight_duration">
                          <div className="arrow_right" />
                          <span>01h 15m</span>
                        </div>
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flight_refund_policy">
                      <div className="TabPanelInner flex_widht_less">
                        <h4>Refund Policy</h4>
                        <p className="fz12">
                          1. Refund and Date Change are done as per the
                          following policies.
                        </p>
                        <p className="fz12">
                          2. Refund Amount= Refund Charge (as per airline policy
                          + ShareTrip Convenience Fee).{" "}
                        </p>
                        <p className="fz12">
                          3. Date Change Amount= Date Change Fee (as per Airline
                          Policy + ShareTrip Convenience Fee).
                        </p>
                      </div>
                      <div className="TabPanelInner">
                        <h4>Baggage</h4>
                        <div className="flight_info_taable">
                          <h3>DAC-SPD</h3>
                          <p>
                            <span>20KG /</span> person
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flight_show_down_wrapper">
                    <div className="flight-shoe_dow_item">
                      <div className="airline-details">
                        <div className="img">
                          <img src="assets/img/icon/bg.png" alt="img" />
                        </div>
                        <span className="airlineName fw-500">
                          Biman Bangladesh Airlines &nbsp; BG435
                        </span>
                        <span className="flightNumber">
                          BOEING 737-800 - 738
                        </span>
                      </div>
                      <div className="flight_inner_show_component">
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                        <div className="flight_duration">
                          <div className="arrow_right" />
                          <span>01h 15m</span>
                        </div>
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flight_refund_policy">
                      <div className="TabPanelInner flex_widht_less">
                        <h4>Refund Policy</h4>
                        <p className="fz12">
                          1. Refund and Date Change are done as per the
                          following policies.
                        </p>
                        <p className="fz12">
                          2. Refund Amount= Refund Charge (as per airline policy
                          + ShareTrip Convenience Fee).{" "}
                        </p>
                        <p className="fz12">
                          3. Date Change Amount= Date Change Fee (as per Airline
                          Policy + ShareTrip Convenience Fee).
                        </p>
                      </div>
                      <div className="TabPanelInner">
                        <h4>Baggage</h4>
                        <div className="flight_info_taable">
                          <h3>DAC-SPD</h3>
                          <p>
                            <span>20KG /</span> person
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flight_show_down_wrapper">
                    <div className="flight-shoe_dow_item">
                      <div className="airline-details">
                        <div className="img">
                          <img src="assets/img/icon/bg.png" alt="img" />
                        </div>
                        <span className="airlineName fw-500">
                          Biman Bangladesh Airlines &nbsp; BG435
                        </span>
                        <span className="flightNumber">
                          BOEING 737-800 - 738
                        </span>
                      </div>
                      <div className="flight_inner_show_component">
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                        <div className="flight_duration">
                          <div className="arrow_right" />
                          <span>01h 15m</span>
                        </div>
                        <div className="flight_det_wrapper">
                          <div className="flight_det">
                            <div className="code_time">
                              <span className="code">DAC</span>
                              <span className="time">15:00</span>
                            </div>
                            <p className="airport">
                              Hazrat Shahjalal International Airport
                            </p>
                            <p className="date">7th Jun 2022</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flight_refund_policy">
                      <div className="TabPanelInner flex_widht_less">
                        <h4>Refund Policy</h4>
                        <p className="fz12">
                          1. Refund and Date Change are done as per the
                          following policies.
                        </p>
                        <p className="fz12">
                          2. Refund Amount= Refund Charge (as per airline policy
                          + ShareTrip Convenience Fee).{" "}
                        </p>
                        <p className="fz12">
                          3. Date Change Amount= Date Change Fee (as per Airline
                          Policy + ShareTrip Convenience Fee).
                        </p>
                      </div>
                      <div className="TabPanelInner">
                        <h4>Baggage</h4>
                        <div className="flight_info_taable">
                          <h3>DAC-SPD</h3>
                          <p>
                            <span>20KG /</span> person
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="load_more_flight">
              <button className="btn btn_md">
                <i className="fas fa-spinner" /> Load more..
              </button>
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

export default Flights
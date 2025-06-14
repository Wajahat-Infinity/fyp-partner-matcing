import React from 'react'

function Header() {
  return (
    <>
      <header className="main_header_arae">
        {/* Top Bar */}
        <div className="topbar-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <ul className="topbar-list">
                  <li>
                    <a href="#!">
                      <i className="fab fa-facebook" />
                    </a>
                    <a href="#!">
                      <i className="fab fa-twitter-square" />
                    </a>
                    <a href="#!">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#!">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span>+011 234 567 89</span>
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span>contact@domain.com</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6">
                <ul className="topbar-others-options">
                  <li>
                    <a href="/login">Login</a>
                  </li>
                  <li>
                    <a href="/register">Sign up</a>
                  </li>
                  <li>
                    <div className="dropdown language-option">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="lang-name">English</span>
                      </button>
                      <div className="dropdown-menu language-dropdown-menu">
                        <a className="dropdown-item" href="#">
                          English
                        </a>
                        <a className="dropdown-item" href="#">
                          Arabic
                        </a>
                        <a className="dropdown-item" href="#">
                          French
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown language-option">
                      <button
                        className="dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="lang-name">USD</span>
                      </button>
                      <div className="dropdown-menu language-dropdown-menu">
                        <a className="dropdown-item" href="#">
                          USD
                        </a>
                        <a className="dropdown-item" href="#">
                          BD
                        </a>
                        <a className="dropdown-item" href="#">
                          URO
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>




        {/* Navbar Bar */}
        <div className="navbar-area">
          <div className="main-responsive-nav">
            <div className="container">
              <div className="main-responsive-menu mean-container">
                <div className="mean-bar">
                  <a
                    href="#nav"
                    className="meanmenu-reveal"
                    style={{ background: "", color: "", right: 0, left: "auto" }}
                  >
                    <span>
                      <span>
                        <span />
                      </span>
                    </span>
                  </a>
                  <nav className="mean-nav">
                    <ul className="navbar-nav" style={{ display: "none" }}>
                      <li className="nav-item">
                        <a href="/" className="nav-link active">
                          Home
                        </a>

                        <a className="mean-expand" href="#" style={{ fontSize: 18 }}>
                          +
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/hotel" className="nav-link">
                          Hotels
                          <i className="fas fa-angle-down" />
                        </a>
                        <ul className="dropdown-menu" style={{ display: "none" }}>
                          <li className="nav-item">
                            <a href="/room-details" className="nav-link">
                              Rooms
                            </a>


                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              Flights
                            </a>


                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link ">
                              Hotel
                            </a>


                          </li>

                          <li className="nav-item">
                            <a href="/apartment" className="nav-link">
                              Apartments
                            </a>

                          </li>
                          <li className="nav-item">
                            <a href="/bus" className="nav-link">
                              Bus
                            </a>

                          </li>

                        </ul>
                        <a className="mean-expand" href="#" style={{ fontSize: 18 }}>
                          +
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/about" className="nav-link">
                          Abiut Us
                          <i className="fas fa-angle-down" />
                        </a>


                      </li>

                      <li className="nav-item">
                        <a href="/news" className="nav-link">
                          News
                        </a>


                      </li>
                      <li className="nav-item">
                        <a href="/contact" className="nav-link">
                          Contact
                        </a>


                      </li>
                    </ul>
                    <div className="others-options d-flex align-items-center">
                      <div className="option-item">
                        <a href="#" className="search-box">
                          <i className="bi bi-search" />
                        </a>
                      </div>
                      <div className="option-item">
                        <a href="become-vendor.html" className="btn  btn_navber">
                          Become a partner
                        </a>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="logo">
                  <a href="index.html">
                    <img src="assets/img/logo.png" alt="logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="main-navbar">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" href="index.html">
                  <img src="assets/img/logo_black.png" alt="logo" />
                </a>
                <div className="mean-push" />
                <div
                  className="collapse navbar-collapse mean-menu"
                  id="navbarSupportedContent"
                  style={{ display: "none" }}
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a href="/" className="nav-link active">
                        Home

                      </a>

                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Hotels
                        <i className="fas fa-angle-down" />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="/hotel" className="nav-link">
                            Hotels
                          </a>

                        </li>



                        <li className="nav-item">
                          <a href="/room-details" className="nav-link">
                            Room
                          </a>

                        </li>
                        <li className="nav-item">
                          <a href="/apartment" className="nav-link">
                            Apartments
                          </a>

                        </li>
                        <li className="nav-item">
                          <a href="/bus" className="nav-link ">
                            Bus
                          </a>

                        </li>




                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="/tour" className="nav-link">
                        Tours
                      </a>

                    </li>

                    <li className="nav-item">
                      <a href="/flight" className="nav-link">
                        Flights

                      </a>

                    </li>
                    <li className="nav-item">
                      <a href="/about" className="nav-link">
                        About us

                      </a>

                    </li>
                    <li className="nav-item">
                      <a href="/news" className="nav-link">
                        News
                      </a>

                    </li>
                    <li className="nav-item">
                      <a href="/contact" className="nav-link">
                        Contact
                      </a>

                    </li>
                  </ul>
                  <div className="others-options d-flex align-items-center">
                    <div className="option-item">
                      <a href="#" className="search-box">
                        <i className="bi bi-search" />
                      </a>
                    </div>
                    <div className="option-item">
                      <a href="become-vendor.html" className="btn  btn_navber">
                        Become a partner
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="others-option-for-responsive">
            <div className="container">
              <div className="dot-menu">
                <div className="inner">
                  <div className="circle circle-one" />
                  <div className="circle circle-two" />
                  <div className="circle circle-three" />
                </div>
              </div>
              <div className="container">
                <div className="option-inner">
                  <div className="others-options d-flex align-items-center">
                    <div className="option-item">
                      <a href="#" className="search-box">
                        <i className="fas fa-search" />
                      </a>
                    </div>
                    <div className="option-item">
                      <a href="contact.html" className="btn  btn_navber">
                        Get free quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default Header
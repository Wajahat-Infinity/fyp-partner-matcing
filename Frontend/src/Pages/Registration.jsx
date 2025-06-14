import React from 'react'
import { Helmet } from 'react-helmet'
import Title from './include/Title'
import CtaArea from './include/CtaArea'

const Registration = () => {
    return (
        <>
            <Helmet><title>Registration</title></Helmet>
            <Title />

            <section id="common_author_area" className="section_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="common_author_boxed">
                                <div className="common_author_heading">
                                    <h3>Register account</h3>
                                    <h2>Register your account</h2>
                                </div>
                                <div className="common_author_form">
                                    <form action="#" id="main_author_form">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter first name*"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter last name*"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="your email address (Optional)"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Mobile number*"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="User name*"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                            />
                                        </div>
                                        <div className="common_form_submit">
                                            <button className="btn btn_theme btn_md">Register</button>
                                        </div>
                                        <div className="have_acount_area other_author_option">
                                            <div className="line_or">
                                                <span>or</span>
                                            </div>
                                            <ul>
                                                <li>
                                                    <a href="#!">
                                                        <img src="assets/img/icon/google.png" alt="icon" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!">
                                                        <img src="assets/img/icon/facebook.png" alt="icon" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!">
                                                        <img src="assets/img/icon/twitter.png" alt="icon" />
                                                    </a>
                                                </li>
                                            </ul>
                                            <p>
                                                Already have an account? <a href="/login">Log in now</a>
                                            </p>
                                        </div>
                                    </form>
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

export default Registration
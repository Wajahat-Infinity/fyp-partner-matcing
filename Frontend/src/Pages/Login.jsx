import React from 'react'
import { Helmet } from 'react-helmet'
import Title from './include/Title'
import CtaArea from './include/CtaArea'

const Login = () => {
  return (
<>
<Helmet><title>Login</title></Helmet>
<Title />

<section id="common_author_area" className="section_padding">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <div className="common_author_boxed">
          <div className="common_author_heading">
            <h3>Login your account</h3>
            <h2>Logged in to stay in touch</h2>
          </div>
          <div className="common_author_form">
            <form action="#" id="main_author_form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter user name"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
                <a href="/forget-password">Forgot password?</a>
              </div>
              <div className="common_form_submit">
                <button className="btn btn_theme btn_md">Log in</button>
              </div>
              <div className="have_acount_area">
                <p>
                  Dont have an account? <a href="/register">Register now</a>
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

export default Login
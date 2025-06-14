import React from 'react'
import { Helmet } from 'react-helmet'
import Title from './include/Title'
import CtaArea from './include/CtaArea'
import { useNavigate } from 'react-router-dom'
import VerifyOTP from './VerifyOTP'

const ForgetPassword = () => {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/verifyOTP');
  };
  return (

    <>
      <Helmet><title>Forget Password</title></Helmet>
      <Title />

      <section id="common_author_area" className="section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="common_author_boxed">
                <div className="common_author_heading">
                  <h3>Forgot password</h3>
                  <h2>Reset you password</h2>
                </div>
                <div className="common_author_form">
                  <form action="#" id="main_author_form">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter mobile number"
                      />
                    </div>
                    <div className="common_form_submit">
                      <button className="btn btn_theme btn_md" onClick={handleRedirect}>
                        Send code
                      </button>
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

export default ForgetPassword
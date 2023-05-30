import React from 'react';
import './Contact.scss';
import PageTitle from '../../common/PageTitle/PageTitle';

const Contact = () => {
  return (
    <>
      <PageTitle title="Contact" />
      <h2 className="global__section_divider">Let's get in touch!</h2>
      <div
        id="form_container"
        className="global__page_container"
        style={{ width: '50%' }}
      >
        <p id="instructions">
          Reach me with questions, work inquiries, or just to say hi!
        </p>

        <div className="form_container__input">
          <h3 className="contact_title" id="name-h3">
            Your name:
          </h3>
          <input className="input_text" id="name-input" type="text" />
        </div>

        <div className="form_container__input">
          <h3 className="contact_title" id="name-h3">
            Reason for contact:
          </h3>
          <div className="radio_container">
            <div className="radio_button">
              <input type="radio" id="radioOpt1" name="reason" value="Opt1" />
              <label className="radio_label" htmlFor="radioOpt1">
                Say hi!
              </label>
            </div>
            <div className="radio_button">
              <input type="radio" id="radioOpt2" name="reason" value="Opt2" />
              <label className="radio_label" htmlFor="radioOpt2">
                Ask question
              </label>
            </div>
            <div className="radio_button">
              <input type="radio" id="radioOpt3" name="reason" value="Opt3" />
              <label className="radio_label" htmlFor="radioOpt3">
                Work together
              </label>
            </div>
          </div>
        </div>

        <div className="form_container__input">
          <h3 className="contact_title" id="message-h3">
            Your message:
          </h3>
          <textarea className="input_text" id="message-input"></textarea>
        </div>

        <div className="form_container__input">
          <h3 className="contact_title" id="reply-h3">
            Reply email:
          </h3>
          <input className="input_text" id="reply-input" type="email" />
        </div>
      </div>

      <button
        id="btnSendEmail"
        className="global__button global__smallButton"
        style={{ marginTop: '10px', marginBottom: '30px' }}
      >
        Send message
      </button>
    </>
  );
};

export default Contact;

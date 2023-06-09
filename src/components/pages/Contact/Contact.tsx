import React, { useState } from 'react';
import './Contact.scss';
import PageTitle from '../../common/PageTitle/PageTitle';
import SendEmailModal from './SendEmailModal';
import { CONTACT_REASONS } from '../../../utilities/models';

const Contact = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [name, setName] = useState<string | null>(null);
  const [reason, setReason] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [inputsDisabled, setInputsDisabled] = useState<boolean>(false);

  const closeModal = () => {
    setIsModalVisible(false);
    setInputsDisabled(false);
  };

  return (
    <>
      <PageTitle title="Contact" />
      <h2 className="global__section_divider">Let's get in touch!</h2>
      <div
        className="form_container global__page_container"
        style={{ width: '50%' }}
      >
        <p className="instructions">
          Reach me with questions, work inquiries, or just to say hi!
        </p>

        <div className="form_container__input">
          <h3 className="contact_title">Your name:</h3>
          <input
            className="input_text"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            disabled={inputsDisabled}
          />
        </div>

        <div className="form_container__input">
          <h3 className="contact_title">Reason for contact:</h3>
          <div className="radio_container">
            <div className="radio_button">
              <input
                type="radio"
                id="radioOpt1"
                name="reason"
                value={CONTACT_REASONS.SALUTE}
                disabled={inputsDisabled}
                onChange={(e) => {
                  setReason(e.target.value);
                }}
              />
              <label className="radio_label" htmlFor="radioOpt1">
                Say hi!
              </label>
            </div>
            <div className="radio_button">
              <input
                type="radio"
                id="radioOpt2"
                name="reason"
                value={CONTACT_REASONS.QUESTION}
                disabled={inputsDisabled}
                onChange={(e) => {
                  setReason(e.target.value);
                }}
              />
              <label className="radio_label" htmlFor="radioOpt2">
                Ask question
              </label>
            </div>
            <div className="radio_button">
              <input
                type="radio"
                id="radioOpt3"
                name="reason"
                value={CONTACT_REASONS.WORK}
                disabled={inputsDisabled}
                onChange={(e) => {
                  setReason(e.target.value);
                }}
              />
              <label className="radio_label" htmlFor="radioOpt3">
                Work together
              </label>
            </div>
          </div>
        </div>

        <div className="form_container__input">
          <h3 className="contact_title">Your message:</h3>
          <textarea
            className="message-input input_text"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            disabled={inputsDisabled}
          ></textarea>
        </div>

        <div className="form_container__input">
          <h3 className="contact_title">Reply email:</h3>
          <input
            className="input_text"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            disabled={inputsDisabled}
          />
        </div>
      </div>

      <button
        className="global__button global__smallButton"
        style={{ marginTop: '10px', marginBottom: '30px' }}
        onClick={() => {
          setIsModalVisible(true);
          setInputsDisabled(true);
        }}
        disabled={inputsDisabled}
      >
        Send message
      </button>

      {isModalVisible && (
        <SendEmailModal
          name={name}
          reason={reason}
          message={message}
          email={email}
          closeModalFunction={closeModal}
        />
      )}
    </>
  );
};

export default Contact;

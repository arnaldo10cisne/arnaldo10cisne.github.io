import React, { useState } from 'react';
import './Contact.scss';
import PageTitle from '../../common/PageTitle/PageTitle';
import SendEmailModal from './SendEmailModal';
import { CONTACT_REASONS } from '../../../utilities/models';

interface RadioButtonProps {
  id: string;
  value: string;
  isDisabled: boolean;
  changeStateFunction: Function;
}

const RadioButton = ({
  id,
  value,
  isDisabled,
  changeStateFunction,
}: RadioButtonProps) => {
  return (
    <div className="radio_button">
      <input
        type="radio"
        id={id}
        name="reason"
        value={value}
        disabled={isDisabled}
        onChange={(e) => {
          changeStateFunction(e.target.value);
        }}
      />
      <label className="radio_label" htmlFor={id}>
        {value}
      </label>
    </div>
  );
};

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
            <RadioButton
              id="radioOpt1"
              value={CONTACT_REASONS.SALUTE}
              isDisabled={inputsDisabled}
              changeStateFunction={setReason}
            />
            <RadioButton
              id="radioOpt2"
              value={CONTACT_REASONS.QUESTION}
              isDisabled={inputsDisabled}
              changeStateFunction={setReason}
            />
            <RadioButton
              id="radioOpt3"
              value={CONTACT_REASONS.WORK}
              isDisabled={inputsDisabled}
              changeStateFunction={setReason}
            />
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

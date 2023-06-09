import React from 'react';
import { CONTACT_REASONS, EMAIL_REGEX } from '../../../utilities/models';
import './SendEmailModal.scss';

interface ContactFormData {
  name: string | null;
  reason: string | null;
  message: string | null;
  email: string | null;
}

interface SendEmailModalProps extends ContactFormData {
  closeModalFunction: Function;
}

const NoReasonModal = () => {
  return <p>Please enter a reason for contact, a name and a message</p>;
};

const ConfirmationModal = () => {
  return <p>Are you sure you don't want to include an email?</p>;
};

const InvalidEmailModal = () => {
  return <p>Please type a valid email</p>;
};

const SendingMessageModal = ({
  name,
  reason,
  message,
  email,
}: ContactFormData) => {
  return (
    <div>
      <p>SENDING EMAIL WITH DATA: </p>
      <p>{name}-</p>
      <p>{reason}-</p>
      <p>{message}-</p>
      <p>{email}</p>
    </div>
  );
};

const SendEmailModal = ({
  name,
  reason,
  message,
  email,
  closeModalFunction,
}: SendEmailModalProps) => {
  const showNoReasonModal = !reason || !name || !message;
  const showConfirmationModal =
    !showNoReasonModal &&
    [CONTACT_REASONS.QUESTION, CONTACT_REASONS.WORK].includes(reason) &&
    !email;
  const showInvalidEmailModal =
    !showNoReasonModal &&
    !showConfirmationModal &&
    email &&
    !EMAIL_REGEX.test(email);
  const showSendingMessageModal =
    !showInvalidEmailModal && !showNoReasonModal && !showConfirmationModal;

  return (
    <div className="modalBackdrop">
      <div className="modalWindow">
        {showNoReasonModal && <NoReasonModal />}
        {showConfirmationModal && <ConfirmationModal />}
        {showInvalidEmailModal && <InvalidEmailModal />}
        {showSendingMessageModal && (
          <SendingMessageModal
            name={name}
            reason={reason}
            message={message}
            email={email}
          />
        )}
        <button
          onClick={() => {
            closeModalFunction(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SendEmailModal;

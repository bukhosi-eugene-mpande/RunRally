// components/SuccessModal.js
import React from 'react';

type SuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
  message: string;
};

const SuccessModal = ({ isOpen, onClose, message }: SuccessModalProps) => {
  if (!isOpen) return null; // If modal is not open, do not render anything

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="icon-wrapper">
          <svg
            className="success-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" stroke="#4CAF50" />
            <polyline points="9 12 12 15 16 10" stroke="#4CAF50" />
          </svg>
        </div>
        <h2>Success</h2>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          max-width: 400px;
          width: 90%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .icon-wrapper {
          margin-bottom: 10px;
        }
        .success-icon {
          width: 50px;
          height: 50px;
          color: #4caf50; /* Green color */
        }
        button {
          margin-top: 20px;
          padding: 10px 20px;
          border: none;
          background: #0070f3;
          color: white;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default SuccessModal;

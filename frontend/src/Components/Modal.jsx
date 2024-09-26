import React from 'react';

const Modal = ({ isOpen, onClose, onConfirm, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      {/* Modal box */}
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-700">
            {title}
          </h3>
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={onClose}
          >
            <span className="text-2xl">&times;</span>
          </button>
        </div>
        {/* Body */}
        <div className="p-4 sm:p-6 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">{children}</p>
        </div>
        {/* Footer */}
        <div className="flex justify-end p-4 border-t border-gray-200 space-x-2">
          <button
            className="px-4 py-2 sm:px-5 sm:py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            onClick={onClose}
          >
            No
          </button>
          <button
            className="px-4 py-2 sm:px-5 sm:py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            onClick={onConfirm}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

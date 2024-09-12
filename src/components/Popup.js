import React from 'react';

const Popup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-2 pt-8 rounded-lg shadow-lg w-[660px] max-w-3xl relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdNY-cpbCKYjUa-ceQizJubq2YvDjZbfrYUl2xFv7O4sXX2tw/viewform?embedded=true" width="640" height="821" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>
            </div>
        </div>
    );
};

export default Popup;

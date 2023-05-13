import React from 'react';
import { RiShareBoxLine } from 'react-icons/ri';

const ShareButton = ({ url }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ url })
        .then(() => console.log('Shared successfully.'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      console.warn('Web Share API not supported.');
    }
  };

  return (
    <button
      onClick={handleShare}
      className="ml-4 px-6 py-2 rounded-md bg-white text-blue-400 text-lg font-semibold inline-flex items-center"
    >
      <span className="mx-auto">Share</span> <RiShareBoxLine className="ml-2" />
    </button>
  );
};

export default ShareButton;

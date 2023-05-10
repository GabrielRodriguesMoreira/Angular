import { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';

const WhatsAppButton = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = () => {
    const phoneNumber = '5585987373084';
    const message = 'Estou interessado nos produtos';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      className={`fixed bottom-4 right-4 p-2 rounded-full bg-green-500 text-white cursor-pointer animate-pulse-on ${className}`}
      onClick={openWhatsApp}
    >
      <BsWhatsapp size={34} />
    </div>
  );
};

export default WhatsAppButton;

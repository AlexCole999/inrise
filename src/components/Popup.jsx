import React, { useEffect } from "react";

const Popup = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Hide if not open

    // Close on Escape Key Press
    useEffect(() => {
      const handleEscape = (event) => {
        if (event.key === "Escape") {
          onClose();
        }
      };
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-xs z-50" onClick={onClose}>
      <div className="bg-white text-lg p-2 w-[75%] rounded-lg shadow-lg text-center absolute top-6 right-12" onClick={(e) => e.stopPropagation()}>
        <p>Sizning barcha imkoningiz RANDOMGA jo’natiladi va xar hafta o’yin kuni biz XUDUD SHOUSIda <b>8ta ishtrokchilarni</b> aniqlaymiz</p>
        <div className="absolute top-2 -right-2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-white"></div>
      </div>
    </div>
  );
};

export default Popup;

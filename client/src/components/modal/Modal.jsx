import { useEffect, useRef, useState } from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef(null);
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setTimeout(() => {
        if (modalRef.current) {
          modalRef.current.classList.add("opacity-100", "translate-y-0");
          modalRef.current.classList.remove("opacity-0", "translate-y-8");
        }
      }, 10);
    } else if (show) {
      if (modalRef.current) {
        modalRef.current.classList.remove("opacity-100", "translate-y-0");
        modalRef.current.classList.add("opacity-0", "translate-y-8");
      }

      const timeout = setTimeout(() => {
        setShow(false);
        onClose();
        isOpen = false;
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen, show]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#5e5d5db3] bg-opacity-40 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-lg w-full max-w-md mx-4 transform transition-all duration-300 opacity-0 translate-y-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end items-center px-4 py-2">
          <button
            className="text-gray-500 hover:text-[#7C78B3] text-2xl font-bold"
            onClick={onClose}
            aria-label="Cerrar"
          >
            &times;
          </button>
        </div>
        <div className="p-4 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

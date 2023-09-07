import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="absolute top-0 h-screen backdrop-blur w-screen z-40 grid place-content-center">
          <div className="m-auto min-h-[200px] min-w-[80%] bg-white p-4 z-50 relative">
            <div className="flex justify-end">
              <AiOutlineClose
                onClick={onClose}
                className="self-end text-2xl "
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;

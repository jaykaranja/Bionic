import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    (<div className='h-full w-full bg-black/75 absolute top-0 left-0 flex justify-end z-50 py-4 pr-4'>
      { children }
    </div>),
    document.getElementById('portal-root')
  );
};

export default Modal;

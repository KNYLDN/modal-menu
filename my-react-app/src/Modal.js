const Modal = (props) => {
  const { closeModal } = props;

  return (
    <div className="overlay">
      <div className="content">
        <i onClick={closeModal} className="far fa-window-close"></i>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;

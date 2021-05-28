import React from "react";
import "./modal.scss";

import Backdrop from "./ModalBackdrop";
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";


const modal = (props) => {
  let innerModalRender = null;
  if (props.status === "success") {
    innerModalRender = (
     
        <SuccessModal closeModal={props.closeModal} />
    );
  }else if (props.status === "error") {
    innerModalRender = (
        <ErrorModal closeModal={props.closeModal} />
      
    );
  }


  return (
    <div className="modal">
      <Backdrop closeModal={props.closeModal} />
      {innerModalRender}
    </div>
  );
};

export default modal;

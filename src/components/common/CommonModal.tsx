import CustomButton from "./Button";
import Modal from 'react-bootstrap/Modal';
import { memo, useState } from "react";
import { IModalProps } from "../../misc/interfaces";

function CommonModal(props:IModalProps) {
  return (
    <>
      <Modal show={props.showModal} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.headingText}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.bodyText}</Modal.Body>
        <Modal.Footer>
          <CustomButton type="secondary" onClick={props.handleClose}>
            {props.closeButtonText}
          </CustomButton>
          <CustomButton type="primary" onClick={props.handleSubmit}>
            {props.submitButtonText}
          </CustomButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default memo(CommonModal);
import styled from "styled-components";
import React, { forwardRef, HTMLAttributes, MutableRefObject } from "react";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {}

const StyledModal = styled.aside`
  position: fixed;
  top: 0;
  left: 0;

  &[aria-hidden="true"] {
    opacity: 0;
    width: 0;
    height: 0;
    visibility: hidden;
    z-index: -1;
  }

  &[aria-hidden="false"] {
    width: 100%;
    height: 100%;
    opacity: 1;
    visibility: visible;
    z-index: 11;
  }

  .modal-underlay {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .modal-container {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 95%;
    max-width: 500px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
  }
`;

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (props, ref: React.Ref<HTMLElement>) => {
    const modal = React.useRef<HTMLElement | null>(null);

    const closeModal = () => {
      modal.current?.setAttribute("aria-hidden", "true");
    };

    return (
      <StyledModal
        ref={(node) => {
          modal.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            // eslint-disable-next-line no-param-reassign
            (ref as MutableRefObject<HTMLElement | null>).current = node;
          }
        }}
        aria-hidden
        {...props}
      >
        <button
          type="button"
          className="modal-underlay"
          aria-label="trigger-modal"
          onClick={closeModal}
        />
        <div className="modal-container">{props.children}</div>
      </StyledModal>
    );
  }
);

Modal.displayName = "Modal";

export { Modal };

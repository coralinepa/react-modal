import styled from "styled-components";
import PropTypes from "prop-types";

import { Cross2Icon } from "@radix-ui/react-icons";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

const Root = styled.div`
  background-color: #fff;
  position: relative;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transform: ${({ $isOpen }) => ($isOpen ? "scale(1)" : "scale(0.8)")};
  transition: transform 0.3s ease-in-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  cursor: pointer;
`;

function Modal({ isOpen, onClose, children }) {
  return (
    <Overlay $isOpen={isOpen} onClick={onClose}>
      <Root onClick={(e) => e.stopPropagation()}>
        {children}
        <CloseButton onClick={onClose}>
          <Cross2Icon width={20} height={20} />
        </CloseButton>
      </Root>
    </Overlay>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;

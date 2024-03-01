import React from "react";
import { Modal } from "react-native-modal";

const CustomModal = ({ isVisible, onBackdropPress, children }) => (
  <Modal
    isVisible={isVisible}
    onBackdropPress={onBackdropPress}
    backdropOpacity={0.1}
    animationIn="slideInDown"
    animationOut="slideOutUp"
    animationInTiming={3}
    animationOutTiming={4}
  >
    {children}
  </Modal>
);

export default CustomModal;

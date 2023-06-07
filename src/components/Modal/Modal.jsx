import { Img, ModalBox, Overlay } from './Modal.styled';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyCloseModal);
  }

  handleKeyCloseModal = ({ code }) => {
    const { reset } = this.props;
    if (code === 'Escape') return reset();
  };

  handleClickCloseModal = ({ currentTarget, target }) => {
    const { reset } = this.props;
    if (currentTarget === target) return reset();
  };

  render() {
    const { url, value } = this.props;
    return createPortal(
      <Overlay onClick={this.handleClickCloseModal}>
        <ModalBox>
          <Img src={url} alt={value} />
        </ModalBox>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  url: PropTypes.string,
  value: PropTypes.string,
  reset: PropTypes.func,
};

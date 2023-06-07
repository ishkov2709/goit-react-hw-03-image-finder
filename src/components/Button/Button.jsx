import { Btn } from './Button.styled';
import PropTypes from 'prop-types';

const Button = ({ title, onClick }) => {
  return (
    <Btn type="button" onClick={onClick}>
      {title}
    </Btn>
  );
};

export default Button;

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

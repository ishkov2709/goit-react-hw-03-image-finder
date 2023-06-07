import { Btn } from './Button.styled';

const Button = ({ title, onClick }) => {
  return (
    <Btn type="button" onClick={onClick}>
      {title}
    </Btn>
  );
};

export default Button;

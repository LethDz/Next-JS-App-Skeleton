'use client';
import '@ds/common-styles/dist/atoms/Button.css';

interface ButtonProps {
  label: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({ label }) => {
  return (
    <button
      onClick={(e) => {
        console.log(e.currentTarget.labels);
      }}
      type='button'
      className='dse-button__container'
    >
      {label}
    </button>
  );
};

export default Button;

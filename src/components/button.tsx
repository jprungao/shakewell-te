import React, { useRef, useEffect } from 'react';

interface ButtonProps {
  onClick: () => void;
  country: string;
  currency: string;
  language: string;
}

const Button: React.FC<ButtonProps> = React.memo(({ onClick, country, currency, language }) => {
  const counter = useRef(0);

  useEffect(() => {
    counter.current++;
    console.log("Render count of button is: " + counter.current);
  });

  return (
    <button onClick={onClick}>
      {country} - ({currency} - {language})
    </button>
  );
});

export default Button;

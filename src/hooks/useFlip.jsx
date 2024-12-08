import { useState } from 'react';

const useFlip = () => {
  const [isFacingUp, setIsFacingUp] = useState(true);
  const flip = () => {
    setIsFacingUp((up) => !up);
  };

  return [isFacingUp, flip];
};

export default useFlip;

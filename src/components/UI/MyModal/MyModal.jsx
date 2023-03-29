import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import cl from './MyModal.module.css';

const MyModal = ({ children, visible, setVisible }) => {
  const [isAnimating, setIsAnimating] = useState(false);
	
  const modalAnimation = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0%)' : 'translateY(-100%)',
    onStart: () => {
      setIsAnimating(true);
    },
    onRest: () => {
      setIsAnimating(false);
    },
  });

  const rootClasses = [cl.myModal];
  if (visible || isAnimating) {
    rootClasses.push(cl.active);
  }

  return (
    <animated.div className={rootClasses.join(' ')} style={modalAnimation} onClick={() => setVisible(false)}>
      <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </animated.div>
  );
};

export default MyModal;

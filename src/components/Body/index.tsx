import React, { ReactNode, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './body.css';

interface BodyProps {
    children: ReactNode;
  }

export const Body = ({ children }: BodyProps) => {
  const { isDark } = useContext(AppContext);

  const bodyClass = isDark ? 'light' : 'dark';
  
  return (
    <div className={`${bodyClass} bodyH`  }>
      {children}
    </div>
  );
};

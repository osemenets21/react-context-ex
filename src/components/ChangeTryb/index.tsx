import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
export const ChangeTryb = () => {
    const { isDark, setIsDark } = useContext(AppContext);
  return (
    <div>
        <button type="button" onClick={() => setIsDark(true)}>Light</button>
        <button type="button" onClick={() => setIsDark(false)}>Dark</button>
    </div>
  )
}
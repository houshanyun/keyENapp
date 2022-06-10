import React, {useEffect, useRef} from 'react';
import './Keyboard.scss';
import {ALPHABET} from '../constant/ALPHABET';

function Keyboard({setDelWord, setKeyRef}) {
  const keyboardRef = useRef(null);

  const keyboardHandle = (e) => {
    const gridList = e.target.children;
    e.preventDefault();
    const colorChange = (ele) => {
      ele.style.backgroundColor = 'red';
      setTimeout(() => {
        ele.style.backgroundColor = '#0af';
      }, 200);
    };
    for (const ele of gridList) {
      if (e.key.toUpperCase() === ele.innerText) {
        colorChange(ele);
      } else if (e.key === ele.innerText) {
        colorChange(ele);
      } else if (e.key === ' ' && ele.innerText === 'space') {
        colorChange(ele);
      }
    }
    setDelWord(() => e.key);
  };

  useEffect(() => {
    setKeyRef(keyboardRef);
  }, []);
  return <>

    <div className='keyboard-group'>
      <div
        className='keyboard-wrapper'
        ref={keyboardRef}
        onKeyDown={keyboardHandle}
        tabIndex='0'>
        {
          Array.from(ALPHABET).map((item) => {
            return (
              <div
                key={`key-${item}`}
                className={`btn btn-${item}`}
              >{item}</div>
            );
          },
          )
        }
        <div key='key-tab' className='btn btn-tab'>Tab</div>
        <div key='key-ctrl' className='btn btn-ctrl'>Control</div>
        <div key='key-shift' className='btn btn-shift'>Shift</div>
        <div key='key-enter' className='btn btn-enter'>Enter</div>
        <div key='key-caps' className='btn btn-caps'>CapsLock</div>
        <div key='key-space' className='btn btn-space'>space</div>
      </div>
    </div>
  </>;
}
export default Keyboard;

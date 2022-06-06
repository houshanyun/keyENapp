/* eslint-disable require-jsdoc */
import Text from './Text';
import {ALPHABET} from '../constant/ALPHABET';
import React from 'react';
import {useState, useRef} from 'react';
import './Keyboard.scss';
import Popup from './Popup';

function Keyboard() {
  const [delWord, setDelWord] = useState('');
  const [popup, setPopup] = useState(true);
  const [complate, setComplate] = useState(false);
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

  const startKeyOn = () => {
    const closePopup = () => {
      if (popup) {
        setPopup(false);
      } else {
        return;
      }
    };
    keyboardRef.current.focus();
    closePopup();
  };

  return <>
    <Popup
      complate={complate}
      popup={popup}
      setPopup={setPopup}
      keyboardRef={keyboardRef}
      startKeyOn={startKeyOn}
    />

    <div className='textDisplay'>
      <Text
        delWord={delWord}
        complate={setComplate}
        keyboardRef={keyboardRef}
      />
    </div>
    <div className='keyborad-group'>
      <div
        className='keyborad-wrapper'
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

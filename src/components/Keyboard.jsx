import Text from './Text';
import {ALPHABET} from '../constant/ALPHABET';
import React from 'react';
import {useState, useRef} from 'react';
import './Keyboard.scss';
import ComplatePopup from './ComplatePopup';

function Keyboard() {
  const [delWord, setDelWord] = useState('');
  const [popup, setPopup] = useState(true);
  const [complate, setComplate] = useState(false);
  const keyboardRef = useRef(null);

  const keyboradHandle = (e) => {
    const gridList = e.target.children;
    for (const ele of gridList) {
      if (e.key.toUpperCase() === ele.innerText) {
        ele.style.backgroundColor = 'red';
        setTimeout(() => {
          ele.style.backgroundColor = '#0af';
        }, 200);
      }
    }
    setDelWord(() => e.key);
  };
  const closePopup = () => {
    if (popup) {
      setPopup(false);
    } else {
      return;
    }
  };
  const startKeyOn = () => {
    keyboardRef.current.focus();
    closePopup();
  };

  //   window.addEventListener('keydown', closePopup);
  //   return () => window.removeEventListener('keydown', closePopup);
  // }, []);
  //
  return <>
    { popup &&
            <div className='popup'>
              <div className='popupContent'>
                請按下開始
                <button onClick={startKeyOn}>開始</button>
              </div>
            </div>
    }
    <ComplatePopup complate={complate} />

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
        onKeyDown={keyboradHandle}
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
        <div key='key-tab' className='btn btn-tab'>tab</div>
        <div key='key-ctrl' className='btn btn-ctrl'>ctrl</div>
        <div key='key-shift' className='btn btn-shift'>Shift</div>
        <div key='key-enter' className='btn btn-enter'>Enter</div>
        <div key='key-caps' className='btn btn-caps'>caps</div>
        <div key='key-space' className='btn btn-space'>space</div>
      </div>
    </div>
  </>;
}
export default Keyboard;

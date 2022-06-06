import React from 'react';
import './Keyboard.scss';

function Popup({complate, popup, setPopup, startKeyOn, keyboardRef}) {
  function resetHandle() {
    location.reload();
  }
  return (
    <>
      {
        complate &&
        <div className='complateWrapper'>
          <div className='complate'>已完成!</div>
          <button onClick={resetHandle}>重新開此</button>
        </div>
      }
      { popup &&
        <div className='popup'>
          <div className='popupContent'>
            請按下開始
            <button onClick={startKeyOn}>開始</button>
          </div>
        </div>
      }
    </>
  );
}

export default Popup;

